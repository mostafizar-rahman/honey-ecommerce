import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const SectionTItle = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <h1 className={cn("lg:text-[74px] md:text-6xl text-5xl font-medium lg:tracking-[7.5px] md:tracking-[5px] tracking-[3px] text-[#74888C] text-center", className)}>{children}</h1>
    )
}

export default SectionTItle