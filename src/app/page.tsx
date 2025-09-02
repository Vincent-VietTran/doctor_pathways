import { Book, User, Target, Scissors, Heart, Microscope, Stethoscope, Search } from 'lucide-react'
import Header from '../components/Header'
import StepCard from '../components/StepCard'
import SpecialtyCard from '../components/SpecialtyCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />

      {/* Main Title Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Doctor Pathways
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate your journey from medical school to specialty training in Australia
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-8">
            <StepCard
              icon={Book}
              title="Medical School"
              duration="4–6 years"
              description="Complete your medical degree (MD/MBBS) at an accredited Australian medical school. Focus on core rotations and begin exploring specialties."
            />

            {/* Connector */}
            <div className="w-1 h-16 bg-blue-300 rounded-full"></div>

            <StepCard
              icon={User}
              title="Internship (PGY1)"
              duration="1 year"
              description="Your first year as a doctor. Complete required rotations in Medicine, Surgery, Emergency Medicine, and gain general registration with AHPRA."
            />

            {/* Connector */}
            <div className="w-1 h-16 bg-blue-300 rounded-full"></div>

            <StepCard
              icon={Target}
              title="Specialty Training"
              duration="3–7 years (including residency and applications)"
              description="Residency, applications, and 3–6 year advanced training in your chosen medical specialty. Complete rotations, exams, and requirements specific to your specialty college."
            />
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Explore Specialties?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover detailed information about application processes, requirements, and pathways for each specialty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SpecialtyCard
              icon={Scissors}
              title="Surgical Specialties"
              count="9 specialties"
              color="red"
            />

            <SpecialtyCard
              icon={Heart}
              title="Medical Specialties"
              count="6 specialties"
              color="blue"
            />

            <SpecialtyCard
              icon={Microscope}
              title="Diagnostic Specialties"
              count="2 specialties"
              color="green"
            />

            <SpecialtyCard
              icon={Stethoscope}
              title="Primary Care"
              count="1 specialty"
              color="purple"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
