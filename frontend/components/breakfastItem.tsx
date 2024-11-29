export interface BreakfastItem {
    id: number,
    title: string;
    img: string;
    price: string;
    ingredients: string;
    intro: string;
}

const list: BreakfastItem[] = [
    {
        id: 0,
        title: "all in plate",
        img: "/images/breakfastImages/breakfast-plate.jpg",
        price: "$5.50",
        ingredients: "a plate with: two toasts with your choice of ingredients, served with seasonal fruits",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
    },
    {
        id: 1,
        title: "avacatoast",
        img: "/images/breakfastImages/avacadoBread.jpg",
        price: "$3.40",
        ingredients: "two toasts with avacado, boiled and fried eggs and shrimp",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
    },
    {
        id: 2,
        title: "full toast",
        img: "/images/breakfastImages/toast.jpg",
        price: "$3.00",
        ingredients: "two toasts with fried egg, cheddar cheese, mashed avacado, bacon and smoked turkey",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
    },
    {
        id: 3,
        title: "all on bread",
        img: "/images/breakfastImages/onBread.jpg",
        price: "$3.30",
        ingredients: "a slice of bread with cheddar cheese, seasonal greens, bacon and sliced boiled egg",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
    },
];

export default list