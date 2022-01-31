function logInfo(params: any): void {
    console.log(params);
}

logInfo({});


interface IShape {
    borderWidth: number;
    backgroundColor: string;
    logSelf: () => void;
    getBorderWidth: () => number;
}


class shape implements IShape {
    borderWidth: number;
    backgroundColor: string;

    logSelf(): void {
        console.log("borderWidth: " + this.borderWidth + ", backgroundColor: " + this.backgroundColor);
    }

    getBorderWidth = () => this.borderWidth;
}


// function add(firstValue: number = 4, secondValue: number = 5, thirdValue?: number): number {
//     return firstValue + secondValue + thirdValue;
// }

// add();






// function add(firstValue: number, secondValue: number): number;
// function add(firstValue: number, secondValue: number, thirdValue: number): number;
// function add(firstValue: number, secondValue: number, thirdValue: number, forthValue: number): number;

// function add(firstValue: number, secondValue: number, thirdValue?: number, forthValue?: number): number{
//     let summ = firstValue + secondValue;

//     if (thirdValue) {
//         summ += thirdValue;
//     }

//     if (forthValue) {
//         summ += forthValue;
//     }

//     return summ;
// }

// add(3, 4, 5);



function add(firstValue: number, ...args: number[]): number {
    let summ = firstValue;

    for (let index = 0; index < args.length; index++) {
        summ += args[index];
    }

    return summ;
}

add(4, 5, 6, 7, 8);


add(4);



function logShape({ borderWidth, backgroundColor }: IShape): void {

    console.log("borderWidth: " + borderWidth);
    console.log("backgroundColor: " + backgroundColor);

}

function logShape2(shape: IShape): void {

    console.log("borderWidth: " + shape.borderWidth);
    console.log("backgroundColor: " + shape.backgroundColor);

}

function deconstructArray([, secondElement]: number[]) {
    console.log(secondElement)
}

const someArray = [3, 4, 5, 6, 7];

const [three, four] = someArray;

