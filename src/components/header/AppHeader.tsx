import { SquareSlash } from 'lucide-react'
import Button from './Button'

export default function AppHeader() {
  return (
    <div className="flex h-10 items-center justify-between border-b bg-gray-100 px-4 md:h-20 md:px-10">
      <div className="flex items-center gap-2">
        <SquareSlash className="h-auto w-8 stroke-1 md:w-14" />
        <h1 className="hidden text-3xl md:block">Flow Board</h1>
      </div>
      <div className="bg-purple-200">
        <Button text="LOG IN" />
      </div>
    </div>
  )
}
