"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function SkillsSection() {
  const coreSkills = [
    {
      category: "Communication",
      skills: ["Excellent verbal and written communication", "Active listening", "Professional phone etiquette", "Client relationship management"]
    },
    {
      category: "Administrative Support",
      skills: ["Data entry and management", "Document preparation", "Calendar management", "Email coordination"]
    },
    {
      category: "Technical Proficiency",
      skills: ["Microsoft Office Suite", "Google Workspace", "Database management", "File organization"]
    },
    {
      category: "Work Qualities",
      skills: ["Independent worker", "Fast learner", "Detail-oriented", "Time management"]
    }
  ]

  const keyAttributes = [
    "Excellent Communication Skills",
    "Time Management",
    "Administrative Support",
    "MS Office Proficiency",
    "Independent Work Capability",
    "Fast Learner",
    "Committed Worker",
    "Minimal Supervision Required"
  ]

  return (
    <Card className="h-full border-stone-200 print-break-inside">
      <CardHeader className="pb-4 print:pb-2">
        <CardTitle className="font-playfair text-xl lg:text-2xl text-stone-800 print:text-lg">
          Core Skills
        </CardTitle>
        <div className="w-12 h-1 bg-gradient-to-r from-stone-400 to-stone-600"></div>
      </CardHeader>
      <CardContent className="space-y-6 print:space-y-4">
        
        {/* Key Attributes */}
        <div>
          <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3 print:mb-2">
            Key Attributes
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {keyAttributes.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-stone-500 rounded-full flex-shrink-0"></div>
                <span className="text-stone-600 text-sm print:text-xs">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skills */}
        <div>
          <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3 print:mb-2">
            Professional Competencies
          </h3>
          <div className="space-y-4 print:space-y-2">
            {coreSkills.map((category, index) => (
              <div key={index} className="bg-stone-50 rounded-lg p-4 print:p-2">
                <h4 className="font-semibold text-stone-800 mb-2 print:text-sm print:mb-1">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="bg-stone-200 text-stone-700 hover:bg-stone-300 text-xs print:text-xs print:px-2 print:py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}