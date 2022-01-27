type numberOrString = number | string

type simpleObject = {
    name: string,
    age: number
}

type float = number

function myFunc(params: simpleObject) {

}

myFunc({ age: 5, name: "Ralf" });

type dimention = "width" | "height";

let dim: dimention;

// dim = "thirdDim";

