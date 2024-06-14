interface FormFieldProps {
    labelName?: string 
    placeholder?: string 
    inputType?: string 
    isTextArea?: boolean
    value?: string
    handleChange?: () => void
}

interface SidebarProps {
    classes?: string 
    name?: string 
    imgUrl?: string 
    isActive?: string
    disabled?: boolean
    handleClick?: () => void
}

interface ButtonProps {
    btnType: string
    title?: string
    classes?: string
    handleClick?: () => void
}