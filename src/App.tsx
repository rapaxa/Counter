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
    const [sizeOfValue, setSizeOfValue] = useState({min: 1, max: 10});
    const [counter, setCounter] = useState(sizeOfValue.min);
    const [isDisabled, setIsDisabled] = useState(false);
    const [newValueOfSize, setNewValueOfSize] = useState({min: 10, max: 10});
    const handleIncrement = () => {
        if (counter < sizeOfValue.max) {
            setCounter(counter + 1)
        } else if (counter === sizeOfValue.max) {
            buttons?.map(i => i.title === 'Inc' ? i.isDisabled = true : false);
            console.log(buttons)
        }

    }
    const handleDecrement = () => {
        if (counter > sizeOfValue.min)
            setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(sizeOfValue.min)
    }
    const handleClick = () => {
        if (newValueOfSize.min < newValueOfSize.max) {
            setSizeOfValue({min: newValueOfSize.min, max: newValueOfSize.max})
            setCounter(newValueOfSize.min)
            setIsDisabled(true)
        } else {
            console.log("Max < Min")
        }

    }
    const buttons: ButtonProps[] = [
        {id: '1', isDisabled: false, title: "Inc", click: handleIncrement},
        {id: '2', isDisabled: false, title: "Dec", click: handleDecrement},
        {id: '3', isDisabled: false, title: "Res", click: handleReset}
    ];
    const btnOfSettings: ButtonProps[] = [{id: '4', isDisabled: isDisabled, title: 'Set', click: handleClick}];


    return (
        <div style={{display: "flex"}}>
            <Container buttons={btnOfSettings}>
                <Settings
                    size={newValueOfSize}
                    isDisabled={setIsDisabled}
                    onChangeSize={setNewValueOfSize}/>
            </Container>
            <Container buttons={buttons}>
                <Counter size={sizeOfValue} value={counter}/>
            </Container>
        </div>
    )
}

export default App
