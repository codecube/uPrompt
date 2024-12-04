'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from 'lucide-react';
import { useTemplateBuilder } from '../context/TemplateBuilderContext';

export const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTemplateBuilder();

  return (
    <header className="flex justify-between items-center p-4 bg-background border-b w-full">
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
      <nav className="space-x-4">
        <Link href="/app" className="text-sm font-medium hover:text-primary transition-colors">
          App
        </Link>
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
          Home
        </Link>
        <Button onClick={toggleDarkMode} variant="outline" size="icon">
          {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </nav>
    </header>
  );
};

