interface SectionHeadingProps {
  children: string
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl font-archivo-black font-bold lowercase tracking-tight text-[#F3F3F3] mb-8 text-left">
      {children}
      <span className="text-[#E8753A]">.</span>
    </h2>
  )
}
