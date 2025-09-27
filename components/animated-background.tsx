"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="absolute inset-0">
        {/* Large circle - more visible */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float-slow opacity-60" />

        {/* Medium circle */}
        <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-accent/15 rounded-full animate-float-medium opacity-50" />

        {/* Triangle shapes */}
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-accent/20 rotate-45 animate-float-medium opacity-40" />
        <div className="absolute top-1/6 left-2/3 w-24 h-24 bg-primary/15 rotate-12 animate-float-fast opacity-50" />

        {/* Square shapes */}
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-secondary/25 rotate-12 animate-float-fast opacity-45" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/20 rounded-lg animate-float-slow opacity-55" />
        <div className="absolute top-4/5 left-1/5 w-12 h-12 bg-accent/25 rotate-45 animate-float-medium opacity-40" />

        {/* Dots - more visible */}
        <div className="absolute top-2/3 left-1/6 w-10 h-10 bg-accent/30 rounded-full animate-float-medium opacity-60" />
        <div className="absolute top-1/6 right-1/6 w-8 h-8 bg-primary/25 rounded-full animate-float-fast opacity-50" />
        <div className="absolute top-1/2 right-1/5 w-6 h-6 bg-secondary/35 rounded-full animate-float-slow opacity-65" />

        {/* Lines and rectangles */}
        <div className="absolute top-1/2 left-1/2 w-2 h-32 bg-gradient-to-b from-primary/20 to-transparent rotate-45 animate-float-slow opacity-40" />
        <div className="absolute top-3/4 left-1/3 w-28 h-2 bg-gradient-to-r from-accent/25 to-transparent animate-float-medium opacity-45" />
        <div className="absolute top-1/5 left-1/2 w-20 h-1 bg-gradient-to-r from-primary/20 to-transparent rotate-12 animate-float-fast opacity-50" />
      </div>

      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </div>
  )
}
