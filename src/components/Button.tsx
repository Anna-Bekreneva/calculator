import {Component} from "react";

type PropsType = {
    value: string
    image?: { backgroundImage: string }
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
        const result = this.props.image
            ? <button className="panel__button panel__button--image" onClick={() => (this.onClickHandler())} style={this.props.image} type="button">
                <span className="sr-only">{this.props.value}</span>
        </button>
            : <button className="panel__button" onClick={() => (this.onClickHandler())} type="button">{this.props.value}</button>
        return (
            result
        )
    }

}