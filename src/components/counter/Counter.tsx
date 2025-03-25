import s from './counter.module.css'
type CounterProps = {
    value: number
    size:{min: number, max: number}
}
export const Counter = ({value,size}:CounterProps) => {

    return (
        <div className={value ===size.max? s.active:s.wrapper}>
            {value}
        </div>
    )
}