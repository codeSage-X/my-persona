import Image, { StaticImageData } from "next/image"

interface SkillIconProps {
  name: string,
  icon: string | StaticImageData;
}

export default function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#02FFBD] rounded-lg p-3 flex items-center justify-center border border-[#00ff9d]">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </div>
      <span className="mt-2 text-sm text-center">{name}</span>
    </div>
  )
}
