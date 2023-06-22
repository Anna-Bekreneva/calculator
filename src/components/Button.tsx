import {Component} from "react";

type PropsType = {
    value: string
}
type StateType = {}

export class Button extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <button className="panel__button" type="button">
                {this.props.value}
            </button>
        )
    }

}