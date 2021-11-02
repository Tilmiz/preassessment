import { useState } from "react";

const LandingPage = (props) => {

    const [recipeFormVisible, displayRecipeFormVisible] = useState(false);
    const [addRecipeButtonVisible, displayAddRecipeButtonVisible] = useState(true);
    const [recipeList, setRecipeList] = useState([]);

    const addToList = (e) => {
        e.preventDefault();
        displayRecipeFormVisible(false);
        displayAddRecipeButtonVisible(true);
        let list = [...recipeList];
        let recipeName = document.getElementsByName("recipe-name");
        //console.log(recipeName[0].value);
        list.push(recipeName[0].value);
        //console.log("List: ", list);
        setRecipeList(list);
    }

    const recipeForm = () => {
        return (
            <form onSubmit={(e)=> addToList(e)}>
                <input type="text" name="recipe-name"/>
                <input type="text" name="recipe-instructions"/>
                <button type="submit"  >Submit</button>
            </form>
        )
    }

    const handleFormAndButton = () => {
        displayRecipeFormVisible(true);
        displayAddRecipeButtonVisible(false);
    }

    const displaySavedRecipe = () => {

        return(
            <>
                <ul>

                
                {
                    
                    recipeList.map(recipe => {                        
                        return <li key={recipe}>{recipe}</li> 
                    })
                }
                </ul>

            </>
        ); 
    }

    return (
        <>
            <h1>My Recipes</h1>

            {
                addRecipeButtonVisible && <button onClick={()=> handleFormAndButton()}>Add Recipe</button>
            }            

            {
                recipeFormVisible && recipeForm()                
            }

            {
                recipeList.length === 0 ? <p>There are no recipes to list</p> : displaySavedRecipe()
            }          

        </>    
    );
}

export default LandingPage;