import s from './counter.module.css'

type CounterProps = {
    value: number
    size: { min: number, max: number },
    errorMessage: boolean,
    isEdit: boolean
}
export const Counter = ({value, size, errorMessage, isEdit}: CounterProps) => {


    return (
        <>
            {errorMessage ?

                <div className={s.error}>Incorrect min value</div>

                :
                isEdit ?
                   <span className={s.wrapper}>Enter your values and press set</span> :
                    <div className={value === size.max ? s.active : s.wrapper}>
                        {value}
                    </div>
            }


        </>

    )
}