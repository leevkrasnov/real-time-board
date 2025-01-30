import useThemeStore from '../../store/themeStore';
import { Contrast } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className="dark:text-lilac text-charcoal cursor-pointer bg-transparent transition-colors duration-500"
      animate={{ rotate: theme === 'dark' ? 180 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
    >
      <Contrast size={24} />
    </motion.button>
  );
}
