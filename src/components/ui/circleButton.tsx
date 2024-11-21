interface ButtonProps {
  icon: React.ReactNode,
  onClick?: () => void
}

const CircleButton: React.FC<ButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="w-[60px] h-[60px] borderNewYellow rounded-full border-[2px] flex justify-center items-center hover:[&>svg]:text-[#FFB800]">
      {icon}
    </button>
  )
}

export default CircleButton