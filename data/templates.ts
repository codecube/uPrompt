export const customBlocks = {
  role: {
    name: "Role Definition",
    template: "Act as a {role} with expertise in {field}.",
    variables: ["role", "field"]
  },
  context: {
    name: "Context Setting",
    template: "Consider the following context: {context}",
    variables: ["context"]
  },
  task: {
    name: "Task Description",
    template: "Your task is to {task}",
    variables: ["task"]
  },
  constraints: {
    name: "Constraints",
    template: "Follow these constraints:\n{constraints}",
    variables: ["constraints"]
  },
  format: {
    name: "Output Format",
    template: "Provide your response in the following format:\n{format}",
    variables: ["format"]
  },
  examples: {
    name: "Examples",
    template: "Here are some examples:\n{examples}",
    variables: ["examples"]
  },
  criteria: {
    name: "Quality Criteria",
    template: "Ensure your response meets these criteria:\n{criteria}",
    variables: ["criteria"]
  },
  persona: {
    name: "Persona Definition",
    template: "Adopt these characteristics:\n- Tone: {tone}\n- Style: {style}\n- Perspective: {perspective}",
    variables: ["tone", "style", "perspective"]
  },
  evaluation: {
    name: "Evaluation Metrics",
    template: "Evaluate the response using these metrics:\n{metrics}",
    variables: ["metrics"]
  }
};

// Export promptTemplates
export const promptTemplates = {
  custom: {
    name: "Custom Strategy",
    description: "Build your own prompt strategy from scratch",
    blocks: []
  },
  chainOfThought: {
    name: "Chain of Thought",
    description: "Step-by-step reasoning approach",
    blocks: [
      {
        type: "problem",
        template: "Problem to solve: {problem}",
        variables: ["problem"]
      },
      {
        type: "steps",
        template: "Let's break this down step by step:\n{steps}",
        variables: ["steps"]
      },
      {
        type: "conclusion",
        template: "Therefore, the final answer is: {conclusion}",
        variables: ["conclusion"]
      }
    ]
  },
  expertRole: {
    name: "Expert Consultation",
    description: "Multi-expert perspective analysis",
    blocks: [
      {
        type: "role",
        template: "As a panel of experts consisting of:\n- {expert1}\n- {expert2}\n- {expert3}",
        variables: ["expert1", "expert2", "expert3"]
      },
      {
        type: "context",
        template: "Analyzing the following situation:\n{context}",
        variables: ["context"]
      },
      {
        type: "perspectives",
        template: "Consider these aspects:\n1. {aspect1}\n2. {aspect2}\n3. {aspect3}",
        variables: ["aspect1", "aspect2", "aspect3"]
      }
    ]
  },
  fewShot: {
    name: "Few-Shot Learning",
    description: "Learning from examples",
    blocks: [
      {
        type: "context",
        template: "Task context: {context}",
        variables: ["context"]
      },
      {
        type: "examples",
        template: "Here are some examples:\n1. Input: {example1_input}\n   Output: {example1_output}\n2. Input: {example2_input}\n   Output: {example2_output}",
        variables: ["example1_input", "example1_output", "example2_input", "example2_output"]
      },
      {
        type: "task",
        template: "Now, please handle this new input: {input}",
        variables: ["input"]
      }
    ]
  },
  socraticDialogue: {
    name: "Socratic Dialogue",
    description: "Guided discovery through questioning",
    blocks: [
      {
        type: "topic",
        template: "Topic for exploration: {topic}",
        variables: ["topic"]
      },
      {
        type: "questions",
        template: "Guide the discussion through these questions:\n1. {question1}\n2. {question2}\n3. {question3}",
        variables: ["question1", "question2", "question3"]
      },
      {
        type: "exploration",
        template: "Explore each answer by considering:\n- Assumptions: {assumptions}\n- Implications: {implications}\n- Evidence: {evidence}",
        variables: ["assumptions", "implications", "evidence"]
      }
    ]
  },
  creativeWriting: {
    name: "Creative Writing",
    description: "Structured creative content generation",
    blocks: [
      {
        type: "setting",
        template: "Setting:\n- Time: {time}\n- Place: {place}\n- Atmosphere: {atmosphere}",
        variables: ["time", "place", "atmosphere"]
      },
      {
        type: "characters",
        template: "Key elements:\n- Main focus: {focus}\n- Style elements: {style}\n- Tone: {tone}",
        variables: ["focus", "style", "tone"]
      },
      {
        type: "structure",
        template: "Structure requirements:\n{structure}",
        variables: ["structure"]
      }
    ]
  },
  technicalAnalysis: {
    name: "Technical Analysis",
    description: "Detailed technical evaluation framework",
    blocks: [
      {
        type: "system",
        template: "System under analysis: {system}\nVersion/Configuration: {version}",
        variables: ["system", "version"]
      },
      {
        type: "parameters",
        template: "Evaluation parameters:\n1. Performance: {performance}\n2. Security: {security}\n3. Scalability: {scalability}",
        variables: ["performance", "security", "scalability"]
      },
      {
        type: "methodology",
        template: "Analysis methodology:\n{methodology}",
        variables: ["methodology"]
      }
    ]
  },
  processOptimization: {
    name: "Process Optimization",
    description: "Systematic process improvement approach",
    blocks: [
      {
        type: "current",
        template: "Current process:\n{current_state}",
        variables: ["current_state"]
      },
      {
        type: "goals",
        template: "Optimization goals:\n1. {goal1}\n2. {goal2}\n3. {goal3}",
        variables: ["goal1", "goal2", "goal3"]
      },
      {
        type: "constraints",
        template: "Constraints and limitations:\n{constraints}",
        variables: ["constraints"]
      },
      {
        type: "metrics",
        template: "Success metrics:\n{metrics}",
        variables: ["metrics"]
      }
    ]
  },
  react: {
    name: "ReAct (Reasoning and Acting)",
    description: "Combines reasoning and acting in a synergistic way",
    blocks: [
      {
        type: "task",
        template: "Task: {task}",
        variables: ["task"]
      },
      {
        type: "thought",
        template: "Thought: {thought}",
        variables: ["thought"]
      },
      {
        type: "action",
        template: "Action: {action}",
        variables: ["action"]
      },
      {
        type: "observation",
        template: "Observation: {observation}",
        variables: ["observation"]
      },
      {
        type: "conclusion",
        template: "Conclusion: {conclusion}",
        variables: ["conclusion"]
      }
    ]
  },
  automat: {
    name: "Automat (Automated Reasoning)",
    description: "Structures prompts for automated reasoning tasks",
    blocks: [
      {
        type: "context",
        template: "Context: {context}",
        variables: ["context"]
      },
      {
        type: "task",
        template: "Task: {task}",
        variables: ["task"]
      },
      {
        type: "steps",
        template: "Steps:\n1. {step1}\n2. {step2}\n3. {step3}",
        variables: ["step1", "step2", "step3"]
      },
      {
        type: "output",
        template: "Expected Output Format: {output_format}",
        variables: ["output_format"]
      }
    ]
  },
  costar: {
    name: "CO-STAR",
    description: "Comprehensive framework for structuring complex prompts",
    blocks: [
      {
        type: "context",
        template: "Context: {context}",
        variables: ["context"]
      },
      {
        type: "objective",
        template: "Objective: {objective}",
        variables: ["objective"]
      },
      {
        type: "steps",
        template: "Steps:\n1. {step1}\n2. {step2}\n3. {step3}",
        variables: ["step1", "step2", "step3"]
      },
      {
        type: "tools",
        template: "Tools: {tools}",
        variables: ["tools"]
      },
      {
        type: "action",
        template: "Action: {action}",
        variables: ["action"]
      },
      {
        type: "review",
        template: "Review: {review}",
        variables: ["review"]
      }
    ]
  }
};

