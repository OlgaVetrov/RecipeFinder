import mark from  './assets/checked.png';


function MyRecipesComponents ({label, image, cuisine, ingredients, diet}) {
    return(<div className="recipe">
    <div className="container"> 
        <h2>{label}</h2>
    </div> 

    <div className="container"> 
        <img src={image} alt="dish"/>
    </div> 

    <div className="container"> 
        <p>Cuisine: {cuisine} </p>
    </div>

    <div className="container"> 
        <p>Diet: {diet} </p>
    </div>

    <ul className="container list">
{ingredients.map((ingredient, index) => (
<li key={index}>
<img src={mark} className="icon" alt="icon"/>
{ingredient}</li>
))}
</ul>

</div>
)
}

export default MyRecipesComponents;