import React from "react";

const foodILike = [
  {
    id:1,
    name:"kimchi",
    img:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name:"samgiopsal",
    img:"https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg"
  },
  {
    id:3,
    name:"dongas",
    img:"https://s3-media4.fl.yelpcdn.com/bphoto/anesu6IAyAj2d6r19eFqEg/o.jpg"
  },
  {
    id:4,
    name:"icecream",
    img:"https://laurenslatest.com/wp-content/uploads/2020/08/vanilla-ice-cream-5-copy.jpg"
  },
  {
    id:5,
    name:"chocolate",
    img:"https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/fwx-melted-chocolate.jpg?itok=9NqasBcf"
  }
]

function Food({name,picture}){
  return <div>
    <h2>I like {name}.</h2> 
    <img src={picture} alt={name}/>
  </div>
}

function App() {
  return (
  <div>
    <h1>Hello</h1> \
    {foodILike.map(dish=>
        <Food key={dish.id} name={dish.name} picture={dish.img}/>
      )}
    </div>
    );
}

export default App;
