import Button from './Button'

export default function AppHeader() {
  return (
    <div className="flex h-10 items-center justify-between border-b bg-gray-100 px-4 md:h-20 md:px-10">
      <div className="flex items-center gap-2">
        <h1 className="font-usually-bold hidden text-4xl italic antialiased md:block">
          Flow Board
        </h1>
      </div>
      <div className="font-rostov bg-purple-200">
        <Button text="Log in" />
      </div>
    </div>
  )
}
