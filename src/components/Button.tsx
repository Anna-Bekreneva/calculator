import {Component} from "react";

type PropsType = {
    value: string
    onClick: (value: string) => void
}
type StateType = {}

export class Button extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    onClickHandler() {
        this.props.onClick(this.props.value)
    }

    render() {
        return (
            <button className="panel__button" onClick={() => (this.onClickHandler())} type="button">{this.props.value}</button>
        )
    }

}