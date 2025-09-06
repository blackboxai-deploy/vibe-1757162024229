"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Ubiquity Global Services, Inc.",
      location: "Bacolod",
      position: "Back Office Analyst",
      period: "January 1, 2021 - August 15, 2025",
      type: "current",
      responsibilities: [
        "Process and analyze business data with high accuracy",
        "Provide comprehensive administrative support to operations team",
        "Maintain detailed records and documentation systems",
        "Collaborate with multiple departments for process improvement",
        "Handle confidential information with discretion and professionalism"
      ]
    },
    {
      company: "Teletech Inc. / Philippine National Bank",
      location: "Bacolod",
      position: "Technical Support Representative",
      period: "January 2, 2018 – June 25, 2020",
      type: "previous",
      responsibilities: [
        "Provided technical support and customer service to banking clients",
        "Resolved customer inquiries and technical issues efficiently",
        "Maintained detailed call logs and customer interaction records",
        "Achieved high customer satisfaction ratings consistently",
        "Participated in continuous training and skill development programs"
      ]
    },
    {
      company: "Teletech Inc.",
      location: "Bacolod",
      position: "Technical Support Representative Intern",
      period: "Summer Class 2016",
      type: "internship",
      responsibilities: [
        "Gained hands-on experience in customer service operations",
        "Learned industry-standard communication protocols",
        "Developed problem-solving skills in fast-paced environment",
        "Received mentorship from senior technical support staff"
      ]
    },
    {
      company: "IQOR",
      location: "Bacolod",
      position: "Trainee – Seasonal Account",
      period: "April 23 - May 14, 2017",
      type: "training",
      responsibilities: [
        "Completed intensive customer service training program",
        "Learned call center operations and quality standards",
        "Developed professional communication skills",
        "Demonstrated adaptability and quick learning capability"
      ]
    }
  ]

  return (
    <div className="px-8 py-6 print:px-6 print:py-4">
      <Card className="border-stone-200 print-break-inside">
        <CardHeader className="pb-4 print:pb-2">
          <CardTitle className="font-playfair text-2xl lg:text-3xl text-stone-800 text-center print:text-xl">
            Professional Experience
          </CardTitle>
          <div className="w-16 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 print:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-24 bg-stone-300 print:h-20"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-3 ${
                    exp.type === 'current' ? 'bg-stone-700' :
                    exp.type === 'previous' ? 'bg-stone-600' :
                    exp.type === 'internship' ? 'bg-stone-500' : 'bg-stone-400'
                  }`}></div>
                  
                  {/* Experience Content */}
                  <div className="flex-grow bg-white border border-stone-200 rounded-lg p-6 shadow-sm print:p-4 print:shadow-none">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4 print:gap-2 print:mb-2">
                      <div className="lg:col-span-3">
                        <h3 className="font-semibold text-stone-800 text-lg print:text-base">
                          {exp.position}
                        </h3>
                        <p className="text-stone-700 font-medium print:text-sm">
                          {exp.company} - {exp.location}
                        </p>
                      </div>
                      <div className="lg:text-right">
                        <Badge className={`${
                          exp.type === 'current' ? 'bg-green-100 text-green-800 border-green-200' :
                          exp.type === 'previous' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                          'bg-gray-100 text-gray-800 border-gray-200'
                        } print:text-xs print:px-2`} variant="outline">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-stone-700 mb-3 print:mb-2">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-2 print:space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-3">
                            <span className="w-1.5 h-1.5 bg-stone-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-stone-600 text-sm leading-relaxed print:text-xs print:leading-normal">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="mt-8 p-6 bg-gradient-to-r from-stone-100 to-gray-100 rounded-lg border border-stone-200 print:mt-6 print:p-4">
            <div className="text-center">
              <h3 className="font-semibold text-stone-800 mb-2 print:text-sm">
                Professional Journey
              </h3>
              <p className="text-stone-600 text-sm print:text-xs">
                Progressive career growth from trainee to analyst position, with consistent focus on 
                customer service excellence, administrative efficiency, and professional development. 
                Proven ability to adapt and excel in diverse business environments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}