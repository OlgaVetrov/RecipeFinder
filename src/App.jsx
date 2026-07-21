import{ useEffect, useState} from 'react';
import video from './assets/food.mp4';
import img from './assets/pot-of-food-48.png';
import './App.css';
import MyRecipesComponents from './MyCookComponent';

function App() {
 
  const MY_ID = "4ac1f8e3";
  const MY_KEY = "7503917f226e320f9d00fcd6999b12a7";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("chicken")

  useEffect(()=> {
    const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
    }
    getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
  }

  return ( <div className="App">
  
  <div className="container">
  <video autoPlay muted loop>
  <source src={video} type="video/mp4"/>
  </video>
  <h1>Find a Recipe</h1>
  </div>

  <div className='container'>
   
  <form onSubmit={finalSearch}>
  <input className='search' 
        placeholder='Search...' 
        onChange={myRecipeSearch} 
        value={mySearch}/>
  </form>
  </div>

  <div className='container'>
  <button onClick={finalSearch}>
  <img src={img} alt="icon"/>
  </button>
  </div>

  {myRecipes.map((element, index) => (
    <MyRecipesComponents key={index}
    label={element.recipe.label} 
    image={element.recipe.image} 
    cuisine={element.recipe.cuisineType}
    ingredients={element.recipe.ingredientLines}
    diet={element.recipe.dietLabels}/>
  ))}

  </div>
)
}

export default App;

