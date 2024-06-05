import { DEFAULT_AVATAR_URL } from "@/common/constants";

interface EmployeeAvatarProps {
  active: number
  avatarUrl: string | null
}

export default function EmployeeAvatar({ active, avatarUrl }: EmployeeAvatarProps ) {
  const srcImage = avatarUrl ?? DEFAULT_AVATAR_URL;
  return (
    <>
      { active === 1 && <img src={ srcImage } alt="Employee avatar" className="h-full rounded object-cover" /> }
      { active === 0 && <img src={ srcImage } alt="Employee avatar" className="h-full rounded object-cover grayscale" /> }
    </>
  )
}
