import {Component} from "react";
import {controlStore} from "../controlStore";
import {Button} from "./Button";

type PropsType = {
    onClick: (value: string) => void
    clearAll: () => void
}
type StateType = {}

export class Panel extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className="panel">
                <div className="panel__items panel__items--clear">
                    {controlStore.clear.map((button) => {
                        if (button.image) {
                            return <Button value={button.value} image={button.image} onClick={this.props.onClick} key={button.value}/>
                        } else {
                            return <Button value={button.value} onClick={this.props.onClick} key={button.value}/>
                        }
                    })}
                </div>
                <div className="panel__items panel__items--operation panel__items--operation-1">
                    {controlStore.operations.slice(0, 4).map((button, index) => <Button value={button.value} onClick={this.props.onClick} key={index}/>)}
                </div>
                <div className="panel__list">
                    <div className="panel__items">
                        {controlStore.numbers.map((button, index) => <Button value={button.value} onClick={this.props.onClick} key={index}/>)}
                    </div>
                    <div className="panel__items panel__items--operation panel__items--operation-2">
                        {controlStore.operations.slice(5).map((button, index) => <Button value={button.value} onClick={this.props.onClick} key={index}/>)}
                    </div>
                </div>
            </div>
        )
    }
}