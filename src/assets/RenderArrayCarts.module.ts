import { Cart, Carts } from "./Interfaces/Carts.interface";

const rand = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const temp = ["asda", "assdc", "cjked", 'ppld']

export const RenderCarts = (length: number): Cart[] => {
    return Array.from({ length: length }, () => ({
        img: "https://i.pinimg.com/originals/fc/06/61/fc0661102c02495be896a4fdef51c94e.jpg",
        price: rand(10000,100000),
        title: `Name ${temp[rand(0, temp.length - 1)]}`,
        desc: `Desc ${temp[rand(0, temp.length - 1)]} `.repeat(rand(0, 10)),
    }))
}