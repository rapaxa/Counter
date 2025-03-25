type ButtonProps = {
    click?: () => void
    title?: string
    isDisabled:boolean

}

export const Button = ({click,isDisabled,title}:ButtonProps) =>{
    return (
        <button disabled={isDisabled} className="button" onClick={click}>{title}</button>
    )
}