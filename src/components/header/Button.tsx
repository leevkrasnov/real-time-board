import React from 'react'

interface ButtonProps {
  text: string
  handleClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ handleClick, text }) => {
  return (
    <button className="px-3 text-4xl md:text-4xl" onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
