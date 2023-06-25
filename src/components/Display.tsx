import {ChangeEventHandler, Component} from "react";
import history from "../assets/img/history.svg"

type PropsType = {
    value: string
    changeValue: (value: string) => void
}

type StateType = {}

export class Display extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => this.props.changeValue(event.currentTarget.value)

    render() {
        const historyStyle = {
            backgroundImage: `url('${history}')`
        }

        return (
            <div className="display">
                <div className="display__field">
                    <input type="text" value={this.props.value} onChange={this.onChangeHandler}/>
                </div>
                <span className="display__result">4</span>
                <button className="display__history" style={historyStyle} type="button">
                    <span className="sr-only">История</span>
                </button>
            </div>
        )
    }
}