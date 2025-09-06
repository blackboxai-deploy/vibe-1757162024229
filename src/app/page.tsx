"use client"

import ResumeHeader from '@/components/resume/ResumeHeader'
import ProfileSummary from '@/components/resume/ProfileSummary'
import SkillsSection from '@/components/resume/SkillsSection'
import ToolsSection from '@/components/resume/ToolsSection'
import EducationSection from '@/components/resume/EducationSection'
import ExperienceSection from '@/components/resume/ExperienceSection'
import ReferencesSection from '@/components/resume/ReferencesSection'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-100">
      {/* Print Button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-stone-600 hover:bg-stone-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 text-sm font-medium"
        >
          Print Resume
        </button>
      </div>

      {/* Resume Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none print:max-w-none print:mx-0">
        
        {/* Header Section */}
        <ResumeHeader />

        {/* Profile Summary */}
        <ProfileSummary />

        {/* Skills and Tools Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-6 print:gap-6 print:px-6 print:py-4">
          <SkillsSection />
          <ToolsSection />
        </div>

        {/* Education Section */}
        <EducationSection />

        {/* Work Experience */}
        <ExperienceSection />

        {/* References */}
        <ReferencesSection />

        {/* Footer */}
        <footer className="px-8 py-6 bg-gradient-to-r from-stone-50 to-gray-50 border-t border-stone-200 print:hidden">
          <div className="text-center text-stone-600 text-sm">
            <p>Professional Resume - Keshia Renee M. Lapitan</p>
            <p className="mt-1">Ready to contribute to your team's success</p>
          </div>
        </footer>
      </div>
    </main>
  )
}