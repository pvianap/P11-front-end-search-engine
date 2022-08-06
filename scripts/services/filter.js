import { recipes } from '../data/data.js';

var tags = ['coco', 'Blender'];

function checkTags(tags, recipe) {
  let total = 0;
  tags.forEach((e, i) => {
    if (recipe.includes(e)) {
      total++;
      console.log(recipe.includes(e));
      console.log(total);
    }
  });
  return total === tags.length;
}

const recipe = recipes.getRecipes();
const recipeOne = JSON.stringify(recipe[0]);
console.log(recipeOne);

let result = checkTags(tags, recipeOne);
console.log(result);

const allRecipes = JSON.stringify(recipe);

filteredRecipes(data){
data.forEach((e,i)=>{
console.log(checkTags(tags,e))
    })
}
    
       
    

filteredRecipes(allRecipes)


