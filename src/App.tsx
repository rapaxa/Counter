import './App.css';
import {Container} from "./components/container/Container.tsx";
import {Settings} from "./components/settings/Settings.tsx";
import {Counter} from "./components/counter/Counter.tsx";
import {useState} from "react";

import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {useAppDispatch} from "./common/hooks/useAppDispatch.ts";
import {decrement, increment} from "./model/counter-reducer.ts";

type Size = { min: number; max: number };

type ButtonProps = {
    id: string;
    title: string;
    isDisabled: boolean;
    click: () => void;
};

const getFromLocalStorage = <T, >(key: string, fallback: T): T => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
};

function App() {
    const dispatch = useAppDispatch();
    const initialSize = getFromLocalStorage<Size>('size', {min: 0, max: 10});
    // const initialCounter = getFromLocalStorage<number>('counter', initialSize.min);
    const initialIsEdit = getFromLocalStorage<boolean>('isEdit', true);
    const initialIsDisabled = getFromLocalStorage<boolean>('isDisabled', false);

    const [sizeOfValue, setSizeOfValue] = useState(initialSize);
    // const [counter, setCounter] = useState(initialCounter);
    const counter = useAppSelector(state => state.counter.value);
    const [newValueOfSize, setNewValueOfSize] = useState(initialSize);
    const [errorMessage, setErrorMessage] = useState(false);
    const [isEdit, setIsEdit] = useState(initialIsEdit);
    const [isSetDisabled, setIsSetDisabled] = useState(initialIsDisabled);

    const saveToLocalStorage = (size: Size, counterValue: number, isEditValue: boolean, isDisabled: boolean) => {
        localStorage.setItem('size', JSON.stringify(size));
        localStorage.setItem('counter', JSON.stringify(counterValue));
        localStorage.setItem('isEdit', JSON.stringify(isEditValue));
        localStorage.setItem('isDisabled', JSON.stringify(isDisabled));
    };

    const handleIncrement = () => {
        if (counter < sizeOfValue.max) {
            // const newValue = counter + 1;
            // setCounter(newValue);
            dispatch(increment())
            // localStorage.setItem('counter', JSON.stringify(newValue));
        }
    };

    const handleDecrement = () => {
        if (counter > sizeOfValue.min) {
            // const newValue = counter - 1;
            // setCounter(newValue);
            dispatch(decrement())
            // localStorage.setItem('counter', JSON.stringify(newValue));
        }
    };

    const handleReset = () => {
        // setCounter(sizeOfValue.min);
        // localStorage.setItem('counter', JSON.stringify(sizeOfValue.min));
    };

    const handleSetClick = () => {
        setIsSetDisabled(true)
        setErrorMessage(false);
        setIsEdit(false);
        setSizeOfValue({...newValueOfSize});
        // setCounter(newValueOfSize.min);
        saveToLocalStorage(newValueOfSize, newValueOfSize.min, false, true);
    };

    const counterButtons: ButtonProps[] = [
        {id: '1', title: "Inc", isDisabled: counter >= sizeOfValue.max, click: handleIncrement},
        {id: '2', title: "Dec", isDisabled: counter <= sizeOfValue.min, click: handleDecrement},
        {id: '3', title: "Res", isDisabled: false, click: handleReset}
    ];

    const settingsButton: ButtonProps[] = [
        {id: '4', title: 'Set', isDisabled: isSetDisabled, click: handleSetClick}
    ];

    return (
        <div style={{display: "flex"}}>
            <Container buttons={settingsButton}>
                <Settings
                    isEdit={setIsEdit}
                    errorCallback={setErrorMessage}
                    size={newValueOfSize}
                    onSetDisabled={setIsSetDisabled}
                    onChangeSize={setNewValueOfSize}
                />
            </Container>
            <Container buttons={counterButtons}>
                <Counter
                    isEdit={isEdit}
                    errorMessage={errorMessage}
                    size={sizeOfValue}
                    value={counter}
                />
            </Container>
        </div>
    );
}

export default App;
