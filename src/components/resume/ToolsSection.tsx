"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ToolsSection() {
  const toolCategories = [
    {
      category: "Design & Content",
      tools: ["Canva", "CapCut"],
      description: "Visual content creation and video editing"
    },
    {
      category: "Communication",
      tools: ["Zoom", "Microsoft Teams", "Google Meet"],
      description: "Virtual meetings and client communication"
    },
    {
      category: "Productivity",
      tools: ["Google Workspace", "Microsoft Office Suite"],
      description: "Document management and collaboration"
    },
    {
      category: "Social Media",
      tools: ["Meta Business Suite"],
      description: "Social media management and advertising"
    }
  ]

  const allTools = [
    "Canva", "Meta Business Suite", "Zoom", "Microsoft Teams", 
    "Google Workspace", "CapCut", "Google Meet", "Microsoft Office",
    "Gmail", "Google Calendar", "Google Drive", "Microsoft Word",
    "Microsoft Excel", "Microsoft PowerPoint", "Outlook"
  ]

  return (
    <Card className="h-full border-stone-200 print-break-inside">
      <CardHeader className="pb-4 print:pb-2">
        <CardTitle className="font-playfair text-xl lg:text-2xl text-stone-800 print:text-lg">
          Tools & Platforms
        </CardTitle>
        <div className="w-12 h-1 bg-gradient-to-r from-stone-400 to-stone-600"></div>
      </CardHeader>
      <CardContent className="space-y-6 print:space-y-4">
        
        {/* Platform Categories */}
        <div>
          <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-4 print:mb-2">
            Platform Expertise
          </h3>
          <div className="space-y-4 print:space-y-2">
            {toolCategories.map((category, index) => (
              <div key={index} className="bg-stone-50 rounded-lg p-4 print:p-2">
                <div className="flex justify-between items-start mb-2 print:mb-1">
                  <h4 className="font-semibold text-stone-800 print:text-sm">
                    {category.category}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 mb-3 print:mb-1">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {category.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex}
                      className="bg-stone-600 text-white hover:bg-stone-700 text-xs print:text-xs print:px-2 print:py-1"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Tools Overview */}
        <div>
          <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3 print:mb-2">
            Software Proficiency
          </h3>
          <div className="flex flex-wrap gap-2 print:gap-1">
            {allTools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="border-stone-300 text-stone-700 hover:bg-stone-100 text-xs print:text-xs print:px-1"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}