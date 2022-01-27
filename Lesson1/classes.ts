interface IRectangle {
    width: number;
    height: number;
    borderWidth: number;
}


class shape {
    private id: number;
    public background: string;

    protected test(): void {
        this.id = 10;
    }
}

class Rectangle extends shape implements IRectangle {
    width: number;
    height: number;
    borderWidth: number;

    anotherTest(): void {
        this.test();
    }
}

const rect: Rectangle = new Rectangle();

class Circle extends shape {
    constructor(public radius: number) {
        super();
    }
}

let circle: Circle = new Circle(56);
