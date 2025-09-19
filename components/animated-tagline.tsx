"use client"

import { useState, useEffect } from "react"

const taglines = ["SLATE", "SOLUTIONS", "SERVICES", "SUPPORT"]

export function AnimatedTagline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % taglines.length)
        setIsVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`text-xs font-medium text-blue-600 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {taglines[currentIndex]}
    </span>
  )
}
