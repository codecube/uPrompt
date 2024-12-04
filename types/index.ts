export interface Block {
  id: number;
  type: string;
  template: string;
  variables: string[];
  values: Record<string, string>;
}

export interface SavedBlock {
  type: string;
  values: Record<string, string>;
}

export interface PromptHistory {
  id: number;
  name: string;
  blocks: SavedBlock[];
  createdAt: string;
}

