'use client'

import React from 'react';
import Link from 'next/link';
import { PromptHistory } from './PromptHistory';
import { Sidebar as ShadcnSidebar, SidebarContent } from "@/components/ui/sidebar";

export const Sidebar: React.FC = () => {
  return (
    <ShadcnSidebar className="w-64 border-r flex-shrink-0">
      <SidebarContent className="flex flex-col h-full">
        <div className="p-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-2xl font-bold">uPrompt</span>
          </Link>
        </div>
        <div className="flex-1 p-4 space-y-4 h-[80%] overflow-hidden">
          <PromptHistory />
        </div>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

