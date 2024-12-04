'use client'

import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTemplateBuilder } from '../context/TemplateBuilderContext';
import { promptTemplates } from '../data/templates';

export const TemplateSelectorCard: React.FC = () => {
  const { loadTemplate, selectedTemplate } = useTemplateBuilder();

  const groupedTemplates = {
    "Basic": ["custom", "chainOfThought", "expertRole", "fewShot"],
    "Advanced": ["socraticDialogue", "creativeWriting", "technicalAnalysis", "processOptimization"],
    "Specialized": ["react", "automat", "costar"]
  };

  return (
    <div className="w-full">
      <Select onValueChange={loadTemplate}>
        <SelectTrigger className="w-full text-xs">
          <SelectValue placeholder="Select a template strategy..." />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(groupedTemplates).map(([group, templateKeys]) => (
            <SelectGroup key={group}>
              <SelectLabel>{group}</SelectLabel>
              {templateKeys.map((key) => (
                <SelectItem key={key} value={key} className="text-xs">
                  {promptTemplates[key].name}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

