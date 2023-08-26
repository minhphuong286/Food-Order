import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

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

export const sample_tags: Tag[] = [
    { name: 'All', count: 8},
    { name: 'FastFood', count: 4},
    { name: 'Pizza', count: 3},
    { name: 'Lunch', count: 3},
    { name: 'SlowFood', count: 2},
    { name: 'Hambuger', count: 2},
    { name: 'Fry', count: 1},
    { name: 'Soup', count: 1}
]

