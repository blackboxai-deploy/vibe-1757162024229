"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function EducationSection() {
  const education = [
    {
      level: "Tertiary Education",
      institution: "University of St. La Salle - Bacolod",
      degree: "Bachelor of Science in Accounting Technology",
      period: "2013 – 2017",
      type: "university"
    },
    {
      level: "Secondary Education",
      institution: "Maranatha Christian College",
      degree: "High School Diploma",
      period: "2009 – 2013",
      type: "secondary"
    },
    {
      level: "Elementary Education",
      institution: "Sunshine Christian Academy",
      degree: "Elementary Education",
      period: "2003 – 2009",
      type: "elementary"
    }
  ]

  return (
    <div className="px-8 py-6 print:px-6 print:py-4">
      <Card className="border-stone-200 print-break-inside">
        <CardHeader className="pb-4 print:pb-2">
          <CardTitle className="font-playfair text-2xl lg:text-3xl text-stone-800 text-center print:text-xl">
            Educational Background
          </CardTitle>
          <div className="w-16 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 print:space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-8 w-px h-16 bg-stone-300 print:h-12"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ${
                    edu.type === 'university' ? 'bg-stone-600' : 
                    edu.type === 'secondary' ? 'bg-stone-500' : 'bg-stone-400'
                  }`}></div>
                  
                  {/* Education Content */}
                  <div className="flex-grow bg-stone-50 rounded-lg p-6 print:p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 print:gap-2">
                      <div className="lg:col-span-2">
                        <h3 className="font-semibold text-stone-800 text-lg print:text-base">
                          {edu.degree}
                        </h3>
                        <p className="text-stone-700 font-medium print:text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-stone-600 text-sm print:text-xs">
                          {edu.level}
                        </p>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-block bg-stone-600 text-white px-3 py-1 rounded-full text-sm font-medium print:text-xs print:px-2">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Highlight */}
          <div className="mt-8 p-6 bg-gradient-to-r from-stone-100 to-gray-100 rounded-lg border border-stone-200 print:mt-6 print:p-4">
            <div className="text-center">
              <h3 className="font-semibold text-stone-800 mb-2 print:text-sm">
                Academic Foundation
              </h3>
              <p className="text-stone-600 text-sm print:text-xs">
                Strong educational background with a focus on business administration, 
                accounting principles, and analytical thinking - providing excellent foundation 
                for administrative and virtual assistant roles.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}