import './App.css'
import {Container} from "./components/container/Container.tsx";
import {Settings} from "./components/Settings/Settings.tsx";
import {Counter} from "./components/counter/Counter.tsx";
import {useState} from "react";


type ButtonProps = {
    id: string,
    title: string,
    isDisabled: boolean,
    click: () => void,
}

function App() {
    const [sizeOfValue, setSizeOfValue] = useState({ min: 1, max: 10 });
    const [counter, setCounter] = useState(sizeOfValue.min);


    const [isSetDisabled, setIsSetDisabled] = useState(false);
    const [newValueOfSize, setNewValueOfSize] = useState({ min: 0, max: 10 });


    const handleIncrement = () => {
        if (counter < sizeOfValue.max) {
            setCounter(counter + 1);
        }
    };

    const handleDecrement = () => {
        if (counter > sizeOfValue.min) {
            setCounter(counter - 1);
        }
    };

    const handleReset = () => {
        setCounter(sizeOfValue.min);
    };

    const handleClick = () => {
        if (newValueOfSize.min < newValueOfSize.max) {
            setSizeOfValue({ ...newValueOfSize });
            setCounter(newValueOfSize.min);
            setIsSetDisabled(true); // блокируем кнопку Set
        } else {
            console.log("Max должен быть больше Min");
        }
    };

    const counterButtons: ButtonProps[] = [
        {
            id: '1',
            title: "Inc",
            isDisabled: counter >= sizeOfValue.max,
            click: handleIncrement
        },
        {
            id: '2',
            title: "Dec",
            isDisabled: counter <= sizeOfValue.min,
            click: handleDecrement
        },
        {
            id: '3',
            title: "Res",
            isDisabled: false,
            click: handleReset
        }
    ];

    const settingsButton: ButtonProps[] = [
        {
            id: '4',
            title: 'Set',
            isDisabled: isSetDisabled,
            click: handleClick
        }
    ];

    return (
        <div style={{ display: "flex" }}>
            <Container buttons={settingsButton}>
                <Settings
                    size={newValueOfSize}
                    onSetDisabled={setIsSetDisabled}
                    onChangeSize={setNewValueOfSize}
                />
            </Container>
            <Container buttons={counterButtons}>
                <Counter size={sizeOfValue} value={counter} />
            </Container>
        </div>
    );
}

export default App;