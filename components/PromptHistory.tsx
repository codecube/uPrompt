'use client'

import React, { useRef } from 'react';
import { useTemplateBuilder } from '../context/TemplateBuilderContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, Upload } from 'lucide-react';

export const PromptHistory: React.FC = () => {
  const { promptHistory, loadPromptFromHistory, exportPrompts, importPrompts } = useTemplateBuilder();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importPrompts(file)
        .then(() => {
          alert('Prompts imported successfully');
        })
        .catch((error) => {
          console.error('Error importing prompts:', error);
          alert('Error importing prompts. Please check the file format.');
        });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md flex justify-between items-center">
          Prompt History
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={exportPrompts}
              title="Export Prompts"
            >
              <Download className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              title="Import Prompts"
            >
              <Upload className="w-4 h-4" />
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImport}
              accept=".json"
              style={{ display: 'none' }}
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-200px)]">
          {promptHistory.map((item) => (
            <div key={item.id} className="mb-2 p-2 bg-secondary rounded-md">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{new Date(item.createdAt).toLocaleString()}</p>
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => loadPromptFromHistory(item)}
                className="mt-1 p-0"
              >
                Open
              </Button>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

