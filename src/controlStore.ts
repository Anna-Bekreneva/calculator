export const controlStore: ControlStoreType = {
    numbers: [
        {value: "7"},
        {value: "8"},
        {value: "9"},
        {value: "4"},
        {value: "5"},
        {value: "6"},
        {value: "1"},
        {value: "2"},
        {value: "3"},
        {value: "+/-"},
        {value: "0"},
        {value: "."},
    ],
    operations: [
        {value: "()"},
        {value: "%"},
        {value: "/"},
        {value: "*"},
        {value: "-"},
        {value: "+"},
        {value: "="},
    ],
    clear: [
        {value: "C"},
        {value: "CE", image: {backgroundImage: `url('/src/assets/img/backspace.svg')`}},
    ]
}

type NumberType = {
    value: string
}

type OperationType = {
    value: string
}

type ClearType = {
    value: string,
    image?: { backgroundImage: string }
}

type ControlStoreType = {
    numbers: NumberType[],
    operations: OperationType[],
    clear: ClearType[]
}