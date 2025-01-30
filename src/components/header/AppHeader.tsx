import LoginButton from './LoginButton';
import ThemeToggle from './ThemeToggle';

export default function AppHeader() {
  return (
    <div className="dark:bg-indigo bg-pearl flex h-10 items-center justify-between shadow-xl md:h-20 md:pr-4 md:pl-10">
      {/* Site name */}
      <div>
        <h1 className="font-usually-bold text-4xl text-gray-700 antialiased dark:text-gray-400">
          Flow Board
        </h1>
      </div>
      <div className="flex items-center gap-3">
        {/* LoginButton */}
        <LoginButton />
        {/* ThemeToggle */}
        <ThemeToggle />
      </div>
    </div>
  );
}
