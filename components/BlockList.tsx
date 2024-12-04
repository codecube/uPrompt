'use client'

import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MoveUp, MoveDown, Trash2 } from 'lucide-react';
import { useTemplateBuilder } from '../context/TemplateBuilderContext';

export const BlockList: React.FC = () => {
  const { blocks, updateBlockValue, removeBlock, moveBlock } = useTemplateBuilder();

  return (
    <div className="space-y-4 w-full max-w-4xl mx-auto">
      {blocks.map((block, index) => (
        <Card key={block.id} className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium capitalize">{block.type}</h3>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => moveBlock(index, -1)}
                  disabled={index === 0}
                >
                  <MoveUp className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => moveBlock(index, 1)}
                  disabled={index === blocks.length - 1}
                >
                  <MoveDown className="w-4 h-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => removeBlock(block.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {Object.entries(block.values).map(([variable, value]) => (
              <div key={variable} className="space-y-1">
                <label className="text-sm font-medium capitalize">
                  {variable.split('_').join(' ')}:
                </label>
                <Textarea
                  value={value}
                  onChange={(e) => updateBlockValue(block.id, variable, e.target.value)}
                  placeholder={`Enter ${variable.split('_').join(' ')}...`}
                  className="min-h-[72px]"
                  rows={3}
                />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

