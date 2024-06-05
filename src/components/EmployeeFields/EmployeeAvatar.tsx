interface EmployeeAvatarProps {
  avatarUrl: string | null
}

export default function EmployeeAvatar({ avatarUrl }: EmployeeAvatarProps ) {
  const srcImage = avatarUrl ?? 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  return (
    <>
      <img src={ srcImage} alt="Card image" className="h-full rounded object-cover" />
    </>
  )
}
