import { LucideIcon } from 'lucide-react'

interface SpecialtyCardProps {
  icon: LucideIcon
  title: string
  count: string
  color: 'red' | 'blue' | 'green' | 'purple'
  delay?: number
}

export default function SpecialtyCard({ icon: Icon, title, count, color }: SpecialtyCardProps) {
  const colorClasses = {
    red: 'bg-red-100 text-red-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform cursor-pointer">
      <div className={`rounded-full p-4 w-fit mx-auto mb-4 ${colorClasses[color]}`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{count}</p>
    </div>
  )
}
