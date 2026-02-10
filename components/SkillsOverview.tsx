"use client"

export default function SkillsOverview() {
  return (
    <section className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] py-3 overflow-hidden relative border-t border-[#FFD700]">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 animate-pulse">
          <span className="h-2 w-2 bg-[#FFD700] rounded-full animate-ping" />
          <span className="text-[#FFD700] font-bold text-sm md:text-base">
            🔍 En recherche active | Junior Full Stack Developer (React & Node.js) | Disponible immédiatement
          </span>
          <span className="h-2 w-2 bg-[#FFD700] rounded-full animate-ping" />
        </div>
      </div>
    </section>
  );
}