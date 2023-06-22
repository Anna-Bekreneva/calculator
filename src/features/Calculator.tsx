import {Component} from "react";
import {Tablo} from "../components/Tablo";
import {Panel} from "../components/Panel";

type PropsType = {}
type StateType = {}

export class Calculator extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render () {
        return (
            <div className="calculator">
                <Tablo/>
                <Panel/>
            </div>
        )
    }
}