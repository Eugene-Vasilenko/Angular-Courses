export interface User {
    name: string;
    email: string;
    age: number;
    sex: string;
    aggre: boolean;
    address: HomeAddress;
    // cars: Car[]
}

export interface HomeAddress {
    country: string;
    city: string;
    street: string;
    homeNumber: number;
}


export interface Car {

}