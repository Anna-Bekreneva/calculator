export const controlStore: ControlStoreType = {
    numbers: [
        {value: "+/-"},
        {value: "0"},
        {value: "."},
        {value: "1"},
        {value: "2"},
        {value: "3"},
        {value: "4"},
        {value: "5"},
        {value: "6"},
        {value: "7"},
        {value: "8"},
        {value: "9"},
    ],
    operations: [
        {value: "="},
        {value: "+"},
        {value: "-"},
        {value: "*"},
        {value: "/"},
        {value: "%"},
        {value: "()"},
    ],
    clear: [
        {value: "C"},
        {value: "CE"},
    ]
}

type NumberType = {value: string}
type OperationType = {value: string}
type ClearType = {value: string}

type ControlStoreType = {
    numbers: NumberType[],
    operations: OperationType[],
    clear: ClearType[]
}