"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReferencesSection() {
  const references = [
    {
      name: "Mrs. Editha Elevencione Fortuna",
      title: "Team Leader/Supervisor",
      company: "Teletech Inc.",
      phone: "0943-496-1662",
      relationship: "Direct Supervisor",
      description: "Can speak to technical support experience and professional development"
    },
    {
      name: "Mr. Clifton Kyle Dico",
      title: "Clerk III",
      company: "PhilHealth Bacolod",
      phone: "0956-923-3088",
      relationship: "Professional Reference",
      description: "Can attest to administrative skills and work ethic"
    }
  ]

  return (
    <div className="px-8 py-6 print:px-6 print:py-4">
      <Card className="border-stone-200 print-break-inside">
        <CardHeader className="pb-4 print:pb-2">
          <CardTitle className="font-playfair text-2xl lg:text-3xl text-stone-800 text-center print:text-xl">
            Professional References
          </CardTitle>
          <div className="w-16 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto"></div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
            {references.map((ref, index) => (
              <div key={index} className="bg-stone-50 rounded-lg p-6 border border-stone-200 print:p-4">
                <div className="text-center">
                  {/* Reference Name */}
                  <h3 className="font-semibold text-stone-800 text-lg mb-2 print:text-base print:mb-1">
                    {ref.name}
                  </h3>
                  
                  {/* Title and Company */}
                  <p className="text-stone-700 font-medium mb-1 print:text-sm">
                    {ref.title}
                  </p>
                  <p className="text-stone-600 text-sm mb-4 print:text-xs print:mb-2">
                    {ref.company}
                  </p>
                  
                  {/* Contact Information */}
                  <div className="bg-white rounded-lg p-4 border border-stone-200 mb-4 print:p-2 print:mb-2">
                    <div className="flex items-center justify-center space-x-3">
                      <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                      <span className="text-stone-700 font-medium print:text-sm">
                        {ref.phone}
                      </span>
                    </div>
                  </div>
                  
                  {/* Relationship */}
                  <div className="space-y-2">
                    <p className="text-stone-600 text-sm font-medium print:text-xs">
                      {ref.relationship}
                    </p>
                    <p className="text-stone-600 text-xs leading-relaxed print:text-xs">
                      {ref.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Reference Note */}
          <div className="mt-8 p-6 bg-gradient-to-r from-stone-100 to-gray-100 rounded-lg border border-stone-200 print:mt-6 print:p-4">
            <div className="text-center">
              <h3 className="font-semibold text-stone-800 mb-2 print:text-sm">
                Reference Availability
              </h3>
              <p className="text-stone-600 text-sm print:text-xs">
                Additional professional and character references are available upon request. 
                All references have given permission to be contacted regarding employment opportunities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}