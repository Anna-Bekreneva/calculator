import {Component} from "react";
import {Display} from "../components/Display";
import {Panel} from "../components/Panel";

type PropsType = {}
type StateType = {
    value: string
}

export class Calculator extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            value: "0"
        }
    }

    changeValue = (value: string) => {
        if (this.state.value === "0" && value !== ".") {
            this.setState({...this.state, value})
        } else {
            this.setState(prevState => ({value: prevState.value + value}))
        }
    }

    clearAll = () => this.setState({...this.state, value: "0"})

    render () {
        return (
            <div className="calculator">
                <Display value={this.state.value} changeValue={this.changeValue}/>
                <Panel onClick={this.changeValue} clearAll={this.clearAll}/>
            </div>
        )
    }
}