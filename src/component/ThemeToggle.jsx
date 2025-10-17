import {useEffect, useState} from "react";
import {Sun,Moon} from "lucide-react"
import {cn} from "@/lib/utils.js";
import toast from "react-hot-toast";

export const ThemeToggle = () => {

     const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme=== "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }

    }, []);

     const toggleTheme = () => {
         if (isDarkMode) {
             document.documentElement.classList.remove("dark");
             localStorage.setItem("theme","light");
             setIsDarkMode(false);
         } else {
             document.documentElement.classList.add("dark");
             localStorage.setItem("theme","dark");
             setIsDarkMode(true);
         }
     }
    return <button onClick={toggleTheme}
                   className={cn("fixed top-5 right-5 z-50 p-2 rounded-full transition duration-300",
        "focus:outline-hidden",

                       "2xl: top-4 2xl:right-6",
                       // Large laptops / big screens (≥1440px)
                       "xl:top-15 xl:right-10",

                       // Standard laptop (≥1024px)
                       "lg:top-15 lg:right-9",

                       // Tablets / small laptops (≥768px)
                       "md:top-15 md:right-8",

                       //Small tablets (≥640px)
                       "sm:top-14 sm:right-6",

                       //Small phones (≤640px)
                       "top-16 right-8 bottom-auto"
        )}>
        {isDarkMode ?
            <Sun className="h-6 w-6 text-yellow-300"/>
            :
            <Moon className="h-6 w-6 text-blue-900"/>}
     </button>
}