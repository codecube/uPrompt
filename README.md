# uPrompt

uPrompt is a browser-based prompt IDE for composing reusable, structured prompts from editable blocks.

Instead of starting with a blank text area, choose a prompting strategy or assemble one from role, context, task, constraint, example, and output-format blocks. Fill in the variables, reorder the sections, preview the generated prompt, and copy it into the AI tool of your choice.

> uPrompt is an editor, not an AI gateway. It does not call an LLM or require an API key.

## Core workflow

1. Open the editor at `/app`.
2. Select a prompt strategy or start with a custom prompt.
3. Add, edit, reorder, or remove prompt blocks.
4. Review the assembled prompt in the live preview.
5. Copy the result or save the block configuration to local history.
6. Export the history as JSON when you want a backup or transfer.

## Features

- Block-based prompt editor with live preview
- Reordering and removal of prompt sections
- One-click copy to the clipboard
- Named prompt history stored in the browser
- JSON import and export for saved prompts
- Light and dark editing modes
- Built-in prompt-engineering guidance
- Responsive three-panel workspace with history, editor, and help

## Prompt strategies

The included strategy library provides starting structures for:

- Custom prompts
- Chain-of-thought decomposition
- Expert consultation
- Few-shot learning
- Socratic dialogue
- Creative writing
- Technical analysis
- Process optimization
- ReAct-style reasoning and acting
- Automat-style automated reasoning
- CO-STAR prompting

Each strategy expands into blocks with named variables. Selecting another strategy replaces the current working blocks.

## Custom blocks

Prompts can also be assembled from individual blocks:

| Block | Purpose |
| --- | --- |
| Role definition | Define expertise and field |
| Context setting | Supply relevant background |
| Task description | State the objective |
| Constraints | Set boundaries and requirements |
| Output format | Describe the expected response shape |
| Examples | Provide demonstrations or references |
| Quality criteria | Define what a good answer must satisfy |
| Persona | Set tone, style, and perspective |
| Evaluation metrics | Explain how the result should be assessed |

## Privacy and storage

Prompt history is stored in the browser's `localStorage` under `promptHistory`. The application has no backend, user accounts, telemetry integration, or AI-provider connection in the current version.

The data is local to the browser profile, but it is **not encrypted**. Avoid saving confidential prompts on a shared device. Clearing browser storage removes the history unless it has first been exported.

## Import and export

Export downloads a `prompt_history.json` file containing saved prompt names, timestamps, block types, and field values. Import prepends compatible entries from a JSON file to the existing local history.

Example shape:

```json
[
  {
    "id": 1733356800000,
    "name": "Product research",
    "createdAt": "2024-12-05T00:00:00.000Z",
    "blocks": [
      {
        "type": "role",
        "values": {
          "role": "product researcher",
          "field": "developer tools"
        }
      }
    ]
  }
]
```

Imported files are parsed in the browser. The prototype does not yet perform schema validation, deduplication, or conflict resolution.

## Local development

### Requirements

- Node.js 18.17 or newer
- npm

### Run the development server

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), then select **App** to open the editor.

## Technology

- Next.js 14 with the App Router
- React 18 and TypeScript
- Tailwind CSS
- shadcn/ui and Radix UI components
- Lucide icons
- Browser `localStorage` and File APIs

## Repository structure

```text
app/                       landing page and prompt editor route
components/                editor, history, preview, and UI components
context/                   active prompt-builder state provider
data/templates.ts          strategy and custom-block definitions
types/                     prompt block and history types
```

## Project status

uPrompt is a front-end prototype. Prompt composition, preview, local history, and JSON transfer are implemented. The pricing, team collaboration, accounts, API access, support, and encryption language shown on the landing-page mockup are not implemented product features.

The development server can be used to explore the interface. The current repository still has TypeScript and ESLint cleanup to complete before `npm run build` passes cleanly, including duplicate context code and inconsistent block identifier types.

Useful next steps include consolidating the context provider, validating imported JSON, adding history deletion and search, persisting drafts, adding tests, and providing optional model integrations without sacrificing local-first operation.
