"use client";

import {MoonIcon, SunIcon} from "@heroicons/react/16/solid";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='ml-12 px-2 pt-2 pb-1 rounded-lg hover:bg-background_1-400 dark:hover:bg-slate-600'>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <MoonIcon className='h-6 w-6 text-gray-800' />
        ) : (
          <SunIcon className='h-6 w-6  text-white' />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
