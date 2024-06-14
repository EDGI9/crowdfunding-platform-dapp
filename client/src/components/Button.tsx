import React from 'react'
import {ButtonProps} from '../interfaces/index.js'

const Button: React.FC<ButtonProps> = ({ btnType = 'button', title, handleClick, classes }: ButtonProps) => {
  return (
    <button
      data-testid="qa-button"
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${classes}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default Button