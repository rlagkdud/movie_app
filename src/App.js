import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"kimchi",
    img:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name:"samgiopsal",
    img:"https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.9
  },
  {
    id:3,
    name:"dongas",
    img:"https://s3-media4.fl.yelpcdn.com/bphoto/anesu6IAyAj2d6r19eFqEg/o.jpg",
    rating:3.2
  },
  {
    id:4,
    name:"icecream",
    img:"https://laurenslatest.com/wp-content/uploads/2020/08/vanilla-ice-cream-5-copy.jpg",
    rating:2.2
  },
  {
    id:5,
    name:"chocolate",
    img:"https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/fwx-melted-chocolate.jpg?itok=9NqasBcf",
    rating:4.3
  }
]

function Food({name,picture,rating}){
  return <div>
    <h2>I like {name}.</h2> 
    <h4>{rating} / 5</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    {foodILike.map(dish=>
        <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating}/>
      )}
    </div>
    );
}

export default App;
