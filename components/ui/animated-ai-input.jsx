"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const AnimatedAIInput = React.forwardRef(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
    props.onChange?.(e)
  }

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        animate={{
          opacity: isFocused ? 1 : 0,
          scale: isFocused ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
      />
      <textarea
        ref={ref}
        className={cn(
          "relative w-full rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-neutral-200 shadow-sm transition-colors placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
          isFocused && "border-transparent"
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={handleChange}
        {...props}
      />
      <motion.div
        className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        animate={{
          width: isFocused ? "100%" : "0%",
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
})

AnimatedAIInput.displayName = "AnimatedAIInput"

export { AnimatedAIInput } 