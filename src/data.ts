import { Food } from "./app/shared/models/Food";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/media/img/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
        id: '2',
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['china'],
        stars: 4.7,
        imageUrl: 'assets/media/img/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
    }
]