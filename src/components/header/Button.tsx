import React from 'react'

interface ButtonProps {
  text: string
  handleClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ handleClick, text }) => {
  return (
    <button className="px-3 text-base md:text-xl" onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
