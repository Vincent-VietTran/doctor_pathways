import { LucideIcon } from 'lucide-react'

interface StepCardProps {
  icon: LucideIcon
  title: string
  duration: string
  description: string
  delay?: number
}

export default function StepCard({ icon: Icon, title, duration, description }: StepCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full hover:scale-105 transition-transform">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 rounded-full p-3 mr-4">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
