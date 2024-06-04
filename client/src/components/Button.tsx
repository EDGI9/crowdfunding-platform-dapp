const Button = ({ btnType, title, handleClick, classes }) => {
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