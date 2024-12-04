import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TemplateSelectorCard } from './TemplateSelectorCard';

export const HelpPanel: React.FC = () => {
  return (
    <Card className="w-64 h-full overflow-auto flex-shrink-0 ml-auto mt-4">
      <CardHeader>
        <CardTitle className="text-base">Prompt Engineering Library</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <TemplateSelectorCard />
        <Accordion type="single" collapsible className="w-full text-xs font-normal">
          <AccordionItem value="best-practices">
            <AccordionTrigger>Best Practices</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li>Be specific and clear in your instructions</li>
                <li>Use examples to illustrate desired outputs</li>
                <li>Break complex tasks into smaller steps</li>
                <li>Specify the desired format for the response</li>
                <li>Include relevant context information</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="block-explanations">
            <AccordionTrigger>Block Explanations</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li>Role: Defines the AI's persona or expertise</li>
                <li>Context: Provides background information</li>
                <li>Task: Specifies the main objective</li>
                <li>Format: Outlines the desired response structure</li>
                <li>Constraints: Sets limitations or requirements</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="tips">
            <AccordionTrigger>Helpful Tips</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li>Experiment with different prompt structures</li>
                <li>Use the "chain of thought" technique for complex reasoning</li>
                <li>Iterate and refine your prompts based on results</li>
                <li>Consider potential biases in your instructions</li>
                <li>Test your prompts with various inputs</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

