"use client"

import { Card } from '@/components/ui/card'

export default function ResumeHeader() {
  return (
    <div className="bg-gradient-to-r from-stone-100 via-white to-stone-100 px-8 py-10 print:px-6 print:py-6">
      <Card className="bg-white/80 backdrop-blur-sm border-stone-200 shadow-lg print:shadow-none print:border-none print-break-inside">
        <div className="p-8 print:p-6">
          {/* Name and Title */}
          <div className="text-center mb-6">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-stone-800 mb-2 print:text-3xl">
              Keshia Renee M. Lapitan
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto mb-4"></div>
            <h2 className="text-xl lg:text-2xl text-stone-700 font-medium print:text-lg">
              Virtual Assistant & Appointment Setter
            </h2>
            <p className="text-stone-600 mt-2 italic">
              Professional • Reliable • Remote Work Specialist
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 print:gap-4 print:mt-6">
            {/* Address */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3">
                Address
              </h3>
              <div className="text-stone-600 leading-relaxed">
                <p>Blk. 53 Lot 19 San Dionisio Subd.</p>
                <p>Brgy. Granada, Bacolod City</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-stone-500 rounded-full flex-shrink-0"></span>
                  <span className="text-stone-600">keshia.lapitan18@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-stone-500 rounded-full flex-shrink-0"></span>
                  <span className="text-stone-600">0963-475-5380</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}