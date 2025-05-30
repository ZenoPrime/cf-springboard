import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle } from "lucide-react"

interface KitProgressProps {
  totalSections: number
  completedSections: number
  sectionTitles: string[]
  completedSectionIds: string[]
}

export function KitProgress({
  totalSections,
  completedSections,
  sectionTitles,
  completedSectionIds,
}: KitProgressProps) {
  const progressPercentage = (completedSections / totalSections) * 100

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-mono uppercase text-lg font-semibold text-black">Your Progress</h3>
        <span className="font-mono text-sm text-gray-600">
          {completedSections} of {totalSections} sections complete
        </span>
      </div>

      <Progress value={progressPercentage} className="h-3" />

      <div className="space-y-2">
        {sectionTitles.map((title, index) => {
          const isCompleted = completedSectionIds.includes(`section-${index}`)
          return (
            <div key={index} className="flex items-center gap-3">
              {isCompleted ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
              <span className={`text-sm font-mono ${isCompleted ? "text-green-700" : "text-gray-600"}`}>{title}</span>
            </div>
          )
        })}
      </div>

      {progressPercentage === 100 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <h4 className="font-mono uppercase text-sm font-semibold text-green-800 mb-2">🎉 Kit Complete!</h4>
          <p className="text-sm text-green-700">Congratulations! You've completed all sections of this builder kit.</p>
        </div>
      )}
    </div>
  )
}
