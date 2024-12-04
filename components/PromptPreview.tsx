'use client'

import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from 'lucide-react';
import { useTemplateBuilder } from '../context/TemplateBuilderContext';

export const PromptPreview: React.FC = () => {
  const { blocks, generatePrompt, savePrompt } = useTemplateBuilder();
  const [promptName, setPromptName] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  useEffect(() => {
    setGeneratedPrompt(generatePrompt());
  }, [blocks, generatePrompt]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt)
      .catch(err => console.error('Failed to copy:', err));
  };

  const handleSave = () => {
    savePrompt(promptName);
    setPromptName('');
  };

  if (blocks.length === 0) return null;

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">Generated Prompt</h3>
        <Button 
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </Button>
      </div>
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md text-black">
        {generatedPrompt}
      </pre>
      <div className="mt-4">
        <Input 
          type="text" 
          value={promptName} 
          onChange={(e) => setPromptName(e.target.value)} 
          placeholder="Enter prompt name" 
          className="mb-2"
        />
        <Button 
          variant="default" 
          onClick={handleSave}
        >
          Save Prompt
        </Button>
      </div>
    </Card>
  );
};

