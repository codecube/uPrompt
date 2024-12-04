'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from 'lucide-react';
import { useTemplateBuilder } from '../context/TemplateBuilderContext';
import { customBlocks } from '../data/templates';

export const CustomBlockSelector: React.FC = () => {
  const { selectedBlockType, setSelectedBlockType, addCustomBlock } = useTemplateBuilder();

  return (
    <div className="flex gap-2">
      <Select
        value={selectedBlockType}
        onValueChange={setSelectedBlockType}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Add a new block..." />
        </SelectTrigger>
        <SelectContent className="w-[300px]">
          {Object.entries(customBlocks).map(([key, block]) => (
            <SelectItem key={key} value={key}>
              {block.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button 
        onClick={() => selectedBlockType && addCustomBlock(selectedBlockType)}
        disabled={!selectedBlockType}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};

