'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Block, PromptHistory } from '../types';
import { promptTemplates, customBlocks } from '../data/templates';

interface TemplateBuilderContextType {
  blocks: Block[];
  selectedTemplate: string | null;
  selectedBlockType: string;
  addCustomBlock: (blockType: string) => void;
  updateBlockValue: (blockId: string, variable: string, value: string) => void;
  removeBlock: (blockId: string) => void;
  moveBlock: (index: number, direction: number) => void;
  loadTemplate: (templateKey: string) => void;
  setSelectedBlockType: (blockType: string) => void;
  generatePrompt: () => string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  promptHistory: PromptHistory[];
  savePrompt: (name: string, prompt: string) => void;
  loadPromptFromHistory: (prompt: PromptHistory) => void;
  exportPrompts: () => void;
  importPrompts: (file: File) => Promise<void>;
}

const TemplateBuilderContext = createContext<TemplateBuilderContextType | undefined>(undefined);

export const useTemplateBuilder = () => {
  const context = useContext(TemplateBuilderContext);
  if (!context) {
    throw new Error('useTemplateBuilder must be used within a TemplateBuilderProvider');
  }
  return context;
};

export const TemplateBuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedBlockType, setSelectedBlockType] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [promptHistory, setPromptHistory] = useState<PromptHistory[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('promptHistory');
    if (savedHistory) {
      setPromptHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addCustomBlock = useCallback((blockType: string) => {
    const block = customBlocks[blockType];
    const newBlock: Block = {
      id: Date.now() + Math.random(),
      type: blockType,
      template: block.template,
      variables: block.variables,
      values: Object.fromEntries(block.variables.map(v => [v, '']))
    };
    setBlocks(prevBlocks => [...prevBlocks, newBlock]);
    setSelectedBlockType('');
  }, []);

  const updateBlockValue = useCallback((blockId: string, variable: string, value: string) => {
    setBlocks(prevBlocks => prevBlocks.map(block => 
      block.id === blockId 
        ? { ...block, values: { ...block.values, [variable]: value } }
        : block
    ));
  }, []);

  const removeBlock = useCallback((blockId: string) => {
    setBlocks(prevBlocks => prevBlocks.filter(block => block.id !== blockId));
  }, []);

  const moveBlock = useCallback((index: number, direction: number) => {
    setBlocks(prevBlocks => {
      const newBlocks = [...prevBlocks];
      const newIndex = index + direction;
      if (newIndex >= 0 && newIndex < newBlocks.length) {
        [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
      }
      return newBlocks;
    });
  }, []);

  const loadTemplate = useCallback((templateKey: string) => {
    const template = promptTemplates[templateKey];
    if (template) {
      const newBlocks = template.blocks.map(block => ({
        id: Date.now() + Math.random(),
        ...block,
        values: Object.fromEntries(block.variables.map(v => [v, '']))
      }));
      setBlocks(newBlocks);
      setSelectedTemplate(templateKey);
    }
  }, []);

  const generatePrompt = useCallback(() => {
    return blocks.map(block => {
      let template = block.template;
      Object.entries(block.values).forEach(([variable, value]) => {
        template = template.replace(`{${variable}}`, value || `{${variable}}`);
      });
      return template;
    }).join('\n\n');
  }, [blocks]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const savePrompt = useCallback((name: string) => {
    const newPrompt: PromptHistory = {
      id: Date.now(),
      name,
      blocks: blocks.map(block => ({
        type: block.type,
        values: block.values
      })),
      createdAt: new Date().toISOString(),
    };
    setPromptHistory(prev => {
      const updated = [newPrompt, ...prev];
      localStorage.setItem('promptHistory', JSON.stringify(updated));
      return updated;
    });
  }, [blocks]);

  const loadPromptFromHistory = useCallback((prompt: PromptHistory) => {
    const loadedBlocks = prompt.blocks.map((savedBlock, index) => {
      const blockTemplate = customBlocks[savedBlock.type] || promptTemplates[savedBlock.type]?.blocks[0];
      if (!blockTemplate) {
        console.error(`Unknown block type: ${savedBlock.type}`);
        return null;
      }
      return {
        id: Date.now() + index,
        type: savedBlock.type,
        template: blockTemplate.template,
        variables: blockTemplate.variables,
        values: savedBlock.values
      };
    }).filter((block): block is Block => block !== null);
    setBlocks(loadedBlocks);
  }, []);

  const exportPrompts = useCallback(() => {
    const dataStr = JSON.stringify(promptHistory);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const exportFileDefaultName = 'prompt_history.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [promptHistory]);

  const importPrompts = useCallback((file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedPrompts = JSON.parse(event.target?.result as string);
          setPromptHistory(prevHistory => {
            const updatedHistory = [...importedPrompts, ...prevHistory];
            localStorage.setItem('promptHistory', JSON.stringify(updatedHistory));
            return updatedHistory;
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }, []);

  const value = {
    blocks,
    selectedTemplate,
    selectedBlockType,
    addCustomBlock,
    updateBlockValue,
    removeBlock,
    moveBlock,
    loadTemplate,
    setSelectedBlockType,
    generatePrompt,
    isDarkMode,
    toggleDarkMode,
    promptHistory,
    savePrompt,
    loadPromptFromHistory,
    exportPrompts,
    importPrompts,
  };

  return (
    <TemplateBuilderContext.Provider value={value}>
      {children}
    </TemplateBuilderContext.Provider>
  );
};

