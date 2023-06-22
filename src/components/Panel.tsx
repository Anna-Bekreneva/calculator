import {Component} from "react";
import {controlStore} from "../controlStore";
import {Button} from "./Button";

type PropsType = {}
type StateType = {}

export class Panel extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className="panel">
                {controlStore.clear.map((button, index) => <Button value={button.value} key={index}/>)}
                {controlStore.operations.map((button, index) => <Button value={button.value} key={index}/>)}
                {controlStore.numbers.map((button, index) => <Button value={button.value} key={index}/>)}
            </div>
        )
    }
}