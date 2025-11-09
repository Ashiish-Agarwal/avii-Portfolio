"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"



export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
  <button
  onClick={()=>theme==='dark'?setTheme('light'):setTheme('dark')}
  className="theme-toggle w-full h-20 "
  type="button"
  title="Toggle theme"
  aria-label="Toggle theme"
>
    {theme==='dark'?<Sun/>:<Moon/>}
 
</button>


  )
}
