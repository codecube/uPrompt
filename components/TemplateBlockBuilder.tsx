'use client'

import React from 'react';
import { TemplateBuilderContent } from './TemplateBuilderContent';
import { Sidebar } from './Sidebar';
import { HelpPanel } from './HelpPanel';
import { SidebarProvider } from "@/components/ui/sidebar";

const TemplateBlockBuilder: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex-auto h-full">
        
        <div className="flex-1 flex justify-between overflow-hidden">
        <Sidebar />
          <div className="flex-1 overflow-auto">
          
            <TemplateBuilderContent />
          </div>
          <HelpPanel />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default TemplateBlockBuilder;

