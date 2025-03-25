import s from './settings.module.css'

type SettingsProps = {
    size: { min: number, max: number }
    onChangeSize: (size: { min: number, max: number }) => void;
    isDisabled: (n:boolean)=>void;
}

export const Settings = ({onChangeSize,isDisabled, size}: SettingsProps) => {
    const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) >= 0) {
            onChangeSize({...size,min:Number(e.target.value)});
            isDisabled(false)
        }
    }
    const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) >= 1) {
            onChangeSize({...size,max:Number(e.target.value)});
            isDisabled(false)
        }

    }
    return (
        <div className={s.wrapper}>
            <label>
                Min: <input value={size.min} onChange={handleChangeMin} type="number"/>
            </label>
            <label>
                Max:<input value={size.max} onChange={handleChangeMax} type="number"/>
            </label>

        </div>
    )
}