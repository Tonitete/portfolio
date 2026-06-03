'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
  twinklePhase: number
  twinkleSpeed: number
  color: string
}

interface NeutronStar {
  x: number
  y: number
  speed: number
  rotation: number
}

const STAR_COUNT = 220
const CONE_LENGTH = 60
const CONE_HALF_ANGLE = Math.PI / 7 // ~26° each side = 52° wide cone

// Stellar spectral colors with visual weights.
// Weights calibrated to visible night-sky distribution
// (biased toward brighter blue/white, not the real ~76% red M-class).
const STAR_COLORS: Array<{ color: string; weight: number }> = [
  { color: '#9BB0FF', weight: 5 }, // O/B — blue
  { color: '#CAD7FF', weight: 15 }, // A   — blue-white
  { color: '#F8F7FF', weight: 35 }, // F   — white
  { color: '#FFFDE7', weight: 30 }, // G   — yellow-white (sun-like)
  { color: '#FFE082', weight: 8 }, // K   — yellow
  { color: '#FFCC6F', weight: 5 }, // K/M — orange
  { color: '#FF7043', weight: 2 }, // M   — red
  { color: '#1a1a2e', weight: 0.3 } // ☞  — "black hole" (extremely rare)
]

const TOTAL_WEIGHT = STAR_COLORS.reduce((sum, c) => sum + c.weight, 0)

function pickColor (): string {
  let r = Math.random() * TOTAL_WEIGHT
  for (const { color, weight } of STAR_COLORS) {
    r -= weight
    if (r <= 0) return color
  }
  return STAR_COLORS[STAR_COLORS.length - 1].color
}

function makeStar (width: number, height: number, randomX = true): Star {
  return {
    x: randomX ? Math.random() * width : width + Math.random() * 80,
    y: Math.random() * height,
    radius: Math.random() * 1.0 + 0.5,
    speed: Math.random() * 0.25 + 0.05,
    opacity: Math.random() * 0.5 + 0.4,
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 0.003 + 0.001,
    color: pickColor()
  }
}

function makeNeutronStar (width: number, height: number, randomX = true): NeutronStar {
  return {
    x: randomX ? Math.random() * width : width + CONE_LENGTH + 10,
    y: Math.random() * height,
    speed: 0.18,
    rotation: Math.random() * Math.PI * 2
  }
}

function drawNeutronStar (
  ctx: CanvasRenderingContext2D,
  ns: NeutronStar,
  factor: number
) {
  const { x, y } = ns

  ns.rotation += 0.001 * factor

  // Two opposite cones (pulsar jets)
  for (let i = 0; i < 2; i++) {
    const angle = ns.rotation + i * Math.PI
    const tipX = x + Math.cos(angle) * CONE_LENGTH
    const tipY = y + Math.sin(angle) * CONE_LENGTH

    const grad = ctx.createRadialGradient(x, y, 0, tipX, tipY, CONE_LENGTH * 0.5)
    grad.addColorStop(0, 'rgba(210, 230, 255, 0.55)')
    grad.addColorStop(0.4, 'rgba(180, 210, 255, 0.2)')
    grad.addColorStop(1, 'rgba(150, 190, 255, 0)')

    ctx.save()
    ctx.globalAlpha = 1
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x, y, CONE_LENGTH, angle - CONE_HALF_ANGLE, angle + CONE_HALF_ANGLE)
    ctx.closePath()
    ctx.fillStyle = grad
    ctx.fill()
    ctx.restore()
  }

  // Outer glow
  const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, 14)
  outerGlow.addColorStop(0, 'rgba(220, 235, 255, 0.35)')
  outerGlow.addColorStop(0.5, 'rgba(200, 220, 255, 0.1)')
  outerGlow.addColorStop(1, 'rgba(200, 220, 255, 0)')
  ctx.save()
  ctx.globalAlpha = 1
  ctx.beginPath()
  ctx.arc(x, y, 14, 0, Math.PI * 2)
  ctx.fillStyle = outerGlow
  ctx.fill()
  ctx.restore()

  // Bright core
  const coreGlow = ctx.createRadialGradient(x, y, 0, x, y, 4)
  coreGlow.addColorStop(0, 'rgba(255, 255, 255, 1)')
  coreGlow.addColorStop(0.4, 'rgba(220, 235, 255, 0.9)')
  coreGlow.addColorStop(1, 'rgba(180, 210, 255, 0)')
  ctx.save()
  ctx.globalAlpha = 1
  ctx.beginPath()
  ctx.arc(x, y, 4, 0, Math.PI * 2)
  ctx.fillStyle = coreGlow
  ctx.fill()
  ctx.restore()
}

export function StarField () {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    if (!canvas) return
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    if (!context) return

    let animId: number
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () =>
      makeStar(width, height)
    )

    const neutronStar: NeutronStar = makeNeutronStar(width, height)

    let lastTime = 0

    function draw (timestamp: number) {
      const delta = lastTime === 0 ? 16.67 : Math.min(timestamp - lastTime, 50)
      lastTime = timestamp
      const factor = delta / 16.67

      context.clearRect(0, 0, width, height)

      for (const star of stars) {
        star.twinklePhase += star.twinkleSpeed * factor
        const twinkle = 0.07 * Math.sin(star.twinklePhase)
        const alpha = Math.max(0.25, Math.min(1, star.opacity + twinkle))

        context.globalAlpha = alpha
        context.fillStyle = star.color
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fill()

        star.x -= star.speed * factor
        if (star.x < -2) {
          const s = makeStar(width, height, false)
          Object.assign(star, s)
        }
      }

      context.globalAlpha = 1

      drawNeutronStar(context, neutronStar, factor)
      neutronStar.x -= neutronStar.speed * factor
      if (neutronStar.x < -(CONE_LENGTH + 10)) {
        neutronStar.x = width + CONE_LENGTH + 10
        neutronStar.y = Math.random() * height
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    function onResize () {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
