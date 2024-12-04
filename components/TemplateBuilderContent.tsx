'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomBlockSelector } from './CustomBlockSelector';
import { BlockList } from './BlockList';
import { PromptPreview } from './PromptPreview';
import { useTemplateBuilder } from '../context/TemplateBuilderContext';

export const TemplateBuilderContent: React.FC = () => {
  const { isDarkMode } = useTemplateBuilder();

  return (
    <div className={`h-full ${isDarkMode ? 'dark' : ''}`}>
      <div className="h-full p-4">
        <Card className="h-full max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle>Prompt Editor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 h-[calc(100%-4rem)] overflow-auto">
            <div className="w-full max-w-4xl mx-auto">
              <CustomBlockSelector />
            </div>
            <div className="w-[calc(100%-1rem)] h-px mx-auto">
              <img
                src="/placeholder.svg?height=1&width=800"
                alt=""
                className="w-full h-full opacity-0"
              />
            </div>
            <BlockList />
            <PromptPreview />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

