import s from './settings.module.css';

type SettingsProps = {
    size: { min: number; max: number };
    onChangeSize: (size: { min: number; max: number }) => void;
    onSetDisabled: (disabled: boolean) => void;
};

export const Settings = ({ onChangeSize, onSetDisabled, size }: SettingsProps) => {
    const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = Number(e.target.value);
        if (newMin >= 0) {
            onChangeSize({ ...size, min: newMin });
            onSetDisabled(false);
        }
    };

    const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = Number(e.target.value);
        if (newMax >= 1) {
            onChangeSize({ ...size, max: newMax });
            onSetDisabled(false); // разблокируем кнопку Set
        }
    };

    return (
        <div className={s.wrapper}>
            <label>
                Min: <input value={size.min} onChange={handleChangeMin} type="number" />
            </label>
            <label>
                Max: <input value={size.max} onChange={handleChangeMax} type="number" />
            </label>
        </div>
    );
};
