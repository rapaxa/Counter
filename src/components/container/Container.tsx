import s from './container.module.css'
import {ReactNode} from "react";
import {Button} from "../Button/Button.tsx";

type ButtonProps = {
    id: string,
    title: string,
    click?: () => void,
    isDisabled: boolean,
}
type ContainerProps = {
    children: ReactNode
    buttons?: ButtonProps[];

}
export const Container = ({children, buttons}: ContainerProps) => {


    return (
        <div className={s.wrapper}>
            <div className={s.screenOfInf}>
                {children}
            </div>
            <div className={s.buttons}>
                {buttons?.map(i =>
                    <Button isDisabled={i.isDisabled} key={i.title} title={i.title} click={i.click}/>
                )}

            </div>
        </div>
    )
}