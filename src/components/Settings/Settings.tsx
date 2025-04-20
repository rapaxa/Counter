import s from './settings.module.css';

type SettingsProps = {
    size: { min: number; max: number };
    onChangeSize: (size: { min: number; max: number }) => void;
    onSetDisabled: (disabled: boolean) => void;
    errorCallback: (error: boolean) => void;
    isEdit: (isEdit: boolean) => void;
};

export const Settings = ({onChangeSize, onSetDisabled, size, errorCallback, isEdit}: SettingsProps) => {
    const validateAndSet = (min: number, max: number) => {
        const hasError = min < 0 || max < 0 || min >= max;
        onSetDisabled(hasError);
        errorCallback(hasError);
    };

    const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = Number(e.target.value);
        const currentMax = size.max;
        onChangeSize({...size, min: newMin});
        isEdit(true);
        validateAndSet(newMin, currentMax);
    };

    const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = Number(e.target.value);
        const currentMin = size.min;
        onChangeSize({...size, max: newMax});
        isEdit(true);
        validateAndSet(currentMin, newMax);
    };

    return (
        <div className={s.wrapper}>
            <label>
                Min: <input value={size.min} onChange={handleChangeMin} type="number"/>
            </label>
            <label>
                Max: <input value={size.max} onChange={handleChangeMax} type="number"/>
            </label>
        </div>
    );
};
