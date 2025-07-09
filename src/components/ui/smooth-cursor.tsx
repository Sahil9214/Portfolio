"use client"

import { motion, useSpring } from "motion/react"
import { type FC, type JSX, useEffect, useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

export interface SmoothCursorProps {
  cursor?: JSX.Element
  springConfig?: {
    damping: number
    stiffness: number
    mass: number
    restDelta: number
  }
}

// Utkarsh Cursor with Name Tag
const UtkarshCursor: FC<{ isMoving: boolean; velocity: Position }> = ({ isMoving, velocity }) => {
  // Calculate squish based on velocity
  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y)
  const squishX = Math.min(1 + speed * 0.3, 1.8) // Horizontal stretch
  const squishY = Math.max(1 - speed * 0.2, 0.6) // Vertical compress

  return (
    <div className="relative">
      {/* Main Cursor Arrow with Squish */}
      <motion.div
        className="relative"
        animate={{
          scaleX: squishX,
          scaleY: squishY,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {/* Cursor Arrow SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" className="drop-shadow-lg">
          {/* Outer glow */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main cursor shape */}
          <path
            d="M3 3L21 12L12 13L8 21L3 3Z"
            fill="url(#cursorGradient)"
            stroke="#22c55e"
            strokeWidth="1"
            filter="url(#glow)"
          />

          {/* Inner highlight */}
          <path d="M5 5L17 11L11 12L8 17L5 5Z" fill="rgba(255,255,255,0.3)" />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Name Tag */}
      <motion.div
        className="absolute top-6 left-6 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg border border-green-400/50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isMoving ? 1 : 0.8,
          scale: isMoving ? 1.1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
          <span className="text-green-100">UTKARSH</span>
        </div>

        {/* Connecting line */}
        <div className="absolute -top-1 -left-1 w-8 h-8">
          <svg width="32" height="32" className="absolute">
            <path
              d="M8 8 L24 24"
              stroke="rgba(34, 197, 94, 0.6)"
              strokeWidth="1"
              strokeDasharray="2,2"
              className="animate-pulse"
            />
          </svg>
        </div>
      </motion.div>

      {/* Particle Trail */}
      {isMoving && (
        <>
          <motion.div
            className="absolute -top-1 -left-1 w-1 h-1 bg-green-400 rounded-full"
            animate={{
              scale: [1, 0],
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute top-2 left-1 w-0.5 h-0.5 bg-green-300 rounded-full"
            animate={{
              scale: [1, 0],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
          />
        </>
      )}

      {/* Ripple Effect on Click */}
      <motion.div
        className="absolute inset-0 w-12 h-12 -translate-x-2 -translate-y-2 rounded-full border-2 border-green-400/30"
        animate={{
          scale: isMoving ? [1, 1.5] : 1,
          opacity: isMoving ? [0.6, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          repeat: isMoving ? Number.POSITIVE_INFINITY : 0,
        }}
      />
    </div>
  )
}

// Morphing Blob Cursor with Name
const MorphingBlobCursor: FC<{ isMoving: boolean; velocity: Position }> = ({ isMoving, velocity }) => {
  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y)

  return (
    <div className="relative">
      {/* Morphing Blob */}
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full relative overflow-hidden shadow-lg"
        animate={{
          borderRadius: isMoving
            ? `${60 + Math.sin(Date.now() * 0.01) * 20}% ${40 + Math.cos(Date.now() * 0.01) * 20}% ${30 + Math.sin(Date.now() * 0.015) * 20}% ${70 + Math.cos(Date.now() * 0.015) * 20}%`
            : "50%",
          scale: isMoving ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-1 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-70" />
        <div className="absolute inset-2 bg-white/30 rounded-full" />

        {/* Cursor pointer inside */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M1 1L11 6L6 7L4 11L1 1Z" fill="white" className="drop-shadow-sm" />
          </svg>
        </div>
      </motion.div>

      {/* Floating Name */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-lg"
        animate={{
          y: isMoving ? -5 : 0,
          opacity: isMoving ? 1 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        UTKARSH DEV
        {/* Arrow pointing down */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-green-500" />
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 w-8 h-8 bg-green-400 rounded-full blur-md opacity-50 animate-pulse" />
    </div>
  )
}

export function SmoothCursor({
  cursor = <UtkarshCursor isMoving={false} velocity={{ x: 0, y: 0 }} />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const [isMoving, setIsMoving] = useState(false)
  const [cursorType, setCursorType] = useState<"utkarshcursor" | "morphing">("utkarshcursor")
  const lastMousePos = useRef<Position>({ x: 0, y: 0 })
  const velocity = useRef<Position>({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const previousAngle = useRef(0)
  const accumulatedRotation = useRef(0)

  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  })
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  })

  // Cursor selection based on current type
  const getCursor = () => {
    switch (cursorType) {
      case "utkarshcursor":
        return <UtkarshCursor isMoving={isMoving} velocity={velocity.current} />
      case "morphing":
        return <MorphingBlobCursor isMoving={isMoving} velocity={velocity.current} />
      default:
        return <UtkarshCursor isMoving={isMoving} velocity={velocity.current} />
    }
  }

  useEffect(() => {
    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastUpdateTime.current
      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        }
      }
      lastUpdateTime.current = currentTime
      lastMousePos.current = currentPos
    }

    const smoothMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY }
      updateVelocity(currentPos)

      const speed = Math.sqrt(Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2))

      cursorX.set(currentPos.x)
      cursorY.set(currentPos.y)

      if (speed > 0.1) {
        const currentAngle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90

        let angleDiff = currentAngle - previousAngle.current
        if (angleDiff > 180) angleDiff -= 360
        if (angleDiff < -180) angleDiff += 360

        accumulatedRotation.current += angleDiff
        rotation.set(accumulatedRotation.current)
        previousAngle.current = currentAngle

        scale.set(0.95)
        setIsMoving(true)

        const timeout = setTimeout(() => {
          scale.set(1)
          setIsMoving(false)
        }, 150)

        return () => clearTimeout(timeout)
      }
    }

    let rafId: number
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e)
        rafId = 0
      })
    }

    // Hide default cursor on entire document
    document.documentElement.style.cursor = "none"
    document.body.style.cursor = "none"

    // Also hide cursor on all elements
    const style = document.createElement('style')
    style.textContent = `
      * {
        cursor: none !important;
      }
      a, button, input, textarea, select, [role="button"] {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    window.addEventListener("mousemove", throttledMouseMove)

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      document.documentElement.style.cursor = "auto"
      document.body.style.cursor = "auto"
      document.head.removeChild(style)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY, rotation, scale])

  // Keyboard shortcuts to switch cursor types
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Prevent space bar from scrolling the page
      if (e.code === "Space") {
        e.preventDefault()
      }

      switch (e.code) {
        case "Space":
          setCursorType(prev => prev === "utkarshcursor" ? "morphing" : "utkarshcursor")
          console.log("Cursor switched to:", cursorType === "utkarshcursor" ? "morphing" : "utkarshcursor")
          break
        case "Digit1":
          setCursorType("utkarshcursor")
          break
        case "Digit4":
          setCursorType("morphing")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [cursorType])

  return (
    <>
      {/* Cursor Type Indicator */}
      <div className="fixed top-4 left-4 z-[9998] bg-black/80 text-white p-2 rounded-lg text-xs font-mono">
        Cursor: {cursorType} (Press SPACE to switch)
      </div>

      {/* Main Cursor */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: 0,
          scale: scale,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {getCursor()}
      </motion.div>
    </>
  )
}

