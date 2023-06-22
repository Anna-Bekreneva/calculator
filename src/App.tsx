import {Component} from 'react';
import {Calculator} from "./features/Calculator";

type PropsType = {}
type StateType = {}

export class App extends Component<PropsType, StateType> {
    render() {
        return (
            <Calculator/>
        )
    }
}

export default App
