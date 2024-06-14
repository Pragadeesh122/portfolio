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
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <MoonIcon className='h-6 w-6 text-gray-800' />
      ) : (
        <SunIcon className='h-6 w-6  text-white' />
      )}
    </button>
  );
};

export default ThemeToggle;
