interface EmployeeAvatarProps {
  active: number
  avatarUrl: string | null
}

export default function EmployeeAvatar({ active, avatarUrl }: EmployeeAvatarProps ) {
  const srcImage = avatarUrl ?? 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  return (
    <>
      { active === 1 && <img src={ srcImage } alt="Employee avatar" className="h-full rounded object-cover" /> }
      { active === 0 && <img src={ srcImage } alt="Employee avatar" className="h-full rounded object-cover grayscale" /> }
    </>
  )
}
