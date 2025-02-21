import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TemplateEditor = () => {
  const [inputs, setInputs] = useState({
    customer: '',
    industry: '',
    relevantContext: '',
    customerName: '',
    businessChallenge: '',
    specificExample: ''
  });

  const template = `CONTEXT SETTING:
I need to demonstrate the progression of AI capabilities across 5 distinct maturity levels for [[customer]] in the [[industry]] sector. Each level represents increasing sophistication in how AI can handle business questions and deliver value:

Level 0 - Fixed Rules/Chatbots:
- Characteristics: Simple Q&A, predetermined responses
- Limitations: Cannot handle complex queries or provide real-time analysis
- Typical Use: Basic information requests

Level 1 - Information Retrieval Agents:
- Characteristics: Can access and return specific data points
- Capabilities: Provides concrete metrics and basic analysis
- Typical Use: Operational queries requiring current data

Level 2 - Simple Orchestration (Single Domain):
- Characteristics: Sequential processing within one business domain
- Capabilities: Can follow multi-step processes
- Typical Use: Domain-specific optimization

Level 3 - Complex Orchestration (Multiple Domains):
- Characteristics: Cross-domain analysis and integration
- Capabilities: Handles interdependent processes
- Typical Use: Business-wide strategic questions

Level 4 - Multi-Agent Orchestration:
- Characteristics: Multiple specialized agents working together
- Capabilities: Complex problem-solving across entire organization
- Typical Use: Strategic decision-making

ADDITIONAL CONTEXT:
[[Relevant additional context]]

MATURITY MODEL DEVELOPMENT GUIDE
Step 1: Define the Use Case
"I am working with [[customer name]] on [[specific business challenge]]. They want to understand how AI maturity progresses from basic automation to multi-agent orchestration. Let's build this understanding through their use case of [[specific example]]."

Step 2: Level-by-Level Question Development
For each level, we need to:
1. Create a sample question
2. Show the expected response format
3. Demonstrate increasing complexity

Please help me develop appropriate questions and responses for each maturity level:

LEVEL 0 - Fixed Rules/Chatbot:
- Create a basic operational question that a chatbot would struggle with
- Show the chatbot's limited response
Example question format: "Where/What/How do I {basic operational task}?"

LEVEL 1 - Information Retrieval:
- Transform the basic question to include specific metrics
- Show how an information retrieval agent provides concrete data
Example format: "Where do I need to {action} today, and what are the specific {metrics}?"

LEVEL 2 - Simple Orchestration:
- Create a question that requires sequential steps
- Show how these steps connect within one domain
Example format: "How do I {optimize/forecast/analyze} {specific process} over time?"

LEVEL 3 - Complex Orchestration:
- Develop a broader business question spanning multiple domains
- List the relevant domains and their interactions
Example format: "How do I maximize {business outcome} while considering {multiple factors}?"

LEVEL 4 - Multi-Agent:
- Present a strategic question requiring multiple specialized agents
- List the agents and their specific roles
Example format: "Where is my {asset/process} {key metric}, and how do I {strategic action}?"

For each level, please provide:
1. The specific question
2. Expected response format
3. How it demonstrates increased capability over the previous level
4. Connection to business value`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getFormattedTemplate = () => {
    let result = template;
    Object.entries(inputs).forEach(([key, value]) => {
      const placeholder = key.replace(/([A-Z])/g, ' $1').toLowerCase();
      result = result.replace(`[[${placeholder}]]`, value || `[[${placeholder}]]`);
    });
    return result;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Maturity Template Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Input Fields</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Customer</label>
                  <input
                    type="text"
                    name="customer"
                    value={inputs.customer}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter customer name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={inputs.industry}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter industry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Relevant Additional Context</label>
                  <textarea
                    name="relevantContext"
                    value={inputs.relevantContext}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                    placeholder="Enter additional context"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Customer Name (for Use Case)</label>
                  <input
                    type="text"
                    name="customerName"
                    value={inputs.customerName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter customer name for use case"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Business Challenge</label>
                  <textarea
                    name="businessChallenge"
                    value={inputs.businessChallenge}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                    placeholder="Enter specific business challenge"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Specific Example</label>
                  <textarea
                    name="specificExample"
                    value={inputs.specificExample}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    rows="2"
                    placeholder="Enter specific example"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <div className="bg-gray-50 p-4 rounded max-h-[70vh] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm">
                  {getFormattedTemplate()}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemplateEditor;