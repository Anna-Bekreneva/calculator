import {Component} from "react";
import {Display} from "../components/Display";
import {Panel} from "../components/Panel";
import {clear} from "../utils/variables";

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
        // Кликаем по любой кнопке, кроме точки, а значение в инпуте != 0
        if (this.state.value === "0" && value !== ".") {
            this.setState({...this.state, value})
        }

        // Кликаем на удаление одного символа
        if (value === "⌫") {
            this.setState(prevState => {
                return prevState.value.length < 2 ? {value: "0"} : {value: prevState.value.slice(0, -1)}
            })
        }

        if (value === "=") {
            this.setState(prevState => ({value: eval(prevState.value)}))
        }

        else {
            // Клик на очистку всего
            if (value === clear.clearAll) {
                this.setState({...this.state, value: "0"})
            }

            // Клиик на любую кнопку кроме любой очистки
             else if (value !== clear.clearAll && value !== clear.backspace) {
                this.setState(prevState => ({value: prevState.value + value}))
            }
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