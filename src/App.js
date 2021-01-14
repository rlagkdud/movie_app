import React from "react";

function Food({name,picture}){
  return <div>
    <h2>I like {name}.</h2> 
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name:"kimchi",
    img:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name:"samgiopsal",
    img:"https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg"
  },
  {
    name:"dongas",
    img:"https://s3-media4.fl.yelpcdn.com/bphoto/anesu6IAyAj2d6r19eFqEg/o.jpg"
  },
  {
    name:"icecream",
    img:"https://laurenslatest.com/wp-content/uploads/2020/08/vanilla-ice-cream-5-copy.jpg"
  },
  {
    name:"chocolate",
    img:"https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/fwx-melted-chocolate.jpg?itok=9NqasBcf"
  }
]

function renderFood(dish){
  return <Food name={dish.name} picture={dish.img}/>
}

function App() {
  return (
  <div>
    <h1>Hello</h1> 
    {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)}
    </div>
    );
}

export default App;
