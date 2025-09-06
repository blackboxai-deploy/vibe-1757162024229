"use client"

import { Card, CardContent } from '@/components/ui/card'

export default function ProfileSummary() {
  return (
    <div className="px-8 py-6 print:px-6 print:py-4">
      <Card className="bg-gradient-to-r from-stone-50 to-gray-50 border-stone-200 print:border-gray-300 print-break-inside">
        <CardContent className="p-8 print:p-6">
          <div className="text-center mb-6">
            <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-stone-800 mb-3 print:text-xl">
              Professional Summary
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-stone-700 text-lg leading-relaxed text-center print:text-base print:leading-normal">
              Dedicated and results-driven <strong className="text-stone-800">Virtual Assistant</strong> and <strong className="text-stone-800">Appointment Setter</strong> with extensive experience in administrative support and customer service. 
              Proven track record of delivering exceptional service while working independently with minimal supervision. 
              <span className="block mt-4 text-stone-600 italic">
                Committed to excellence, equipped with strong communication skills, and ready to contribute to your team's success in a remote work environment.
              </span>
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 print:gap-3 print:mt-6">
              <div className="text-center p-4 bg-white rounded-lg border border-stone-200 print:p-3">
                <div className="text-stone-800 font-bold text-lg print:text-base">5+</div>
                <div className="text-stone-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-stone-200 print:p-3">
                <div className="text-stone-800 font-bold text-lg print:text-base">Remote</div>
                <div className="text-stone-600 text-sm">Work Ready</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-stone-200 print:p-3">
                <div className="text-stone-800 font-bold text-lg print:text-base">Self</div>
                <div className="text-stone-600 text-sm">Motivated</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}