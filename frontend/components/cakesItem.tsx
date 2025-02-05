export interface CakesItem {
    title: string;
    img: string;
    price: string;
    ingredients: string;
    intro: string
    id: number;
  }
  
  export interface Cake {
    id: number;
    category: string;
    title: string;
    price: number;
    intro: string;
    ingredients: string;

  }

  const list: CakesItem[] = [
    {
      title: "hazelnut cookie cupcake",
      img: "/images/cakesImages/cookieCake.jpg",
      price: "$4.00",
      id: 0,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "a hazelnut cupcake served with thin cookies and hazelnut cream",
    },
    
    {
      title: "oreo cupcake",
      img: "/images/cakesImages/oreocupCake.jpg",
      price: "$4.00",
      id: 1,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "an oreo cupcake served with oreo crem, chocolate souce and an oreo",
    },
    {
      title: "red velvet cupcake",
      img: "/images/cakesImages/redvelvet.jpg",
      price: "$4.00",
      id: 2,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "a redvelvet cupcake served with heavy vanilla cream",
    },
    {
      title: "croquant cupcake",
      img: "/images/cakesImages/croquant.jpg",
      price: "$4.00",
      id: 3,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "a caramel and croquant cupcake served with caramel and vanilla cream and also caramel and croquant souce",
    },
    {
      title: "chocolate cupcake",
      img: "/images/cakesImages/chocolateCake.jpg",
      price: "$4.00",
      id: 4,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "a coconat cupcake served with chocolate cream and banana shaped cookies",
    },
    
    {
      title: "butter cupcake",
      img: "/images/cakesImages/butterCake.jpg",
      price: "$4.00",
      id: 5,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "a buttery cupcake served with heavy and caramel cream, caramel souce",
    },
    {
      title: "pistachio cupcake",
      img: "/images/cakesImages/pistachioCake2.jpg",
      price: "$4.00",
      id: 6,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "a pistachio cupcake served with heavy vanilla and pistachio cream",
    },
    {
      title: "blueberry cupcake",
      img: "/images/cakesImages/blueberry.jpg",
      price: "$4.00",
      id: 7,
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorem omnis delectus nulla nihil quod est necessitatibus soluta ad aperiam ipsa dolores, dolorum amet, impedit, minus tempora eaque modi ut." ,
      ingredients: "a vanilla and blueberry cupcake served with blueberry cream and also consantrated blueberry souce and cherry",
    },
    
    
  ];


  export default list