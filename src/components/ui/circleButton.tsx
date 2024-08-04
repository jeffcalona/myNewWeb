interface ButtonProps {
    icon: React.ReactNode,
    onClick?: () => void
}

const CircleButton: React.FC<ButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="w-[55px] h-[55px] borderNewYellow rounded-full border-[2px] flex justify-center items-center">
        {icon}
    </button>
  )
}

export default CircleButton