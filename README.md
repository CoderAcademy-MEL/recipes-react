1. Create a new react app
2. Make the app component return <h1>hello world</h1>
3. Add two new components, <Search /> and <Recipes />, just return an h1 in both for now with "on search" and "on recipes"
4. Add these components to to <App />, remove the "hello world"
5. Create a new component <Form />, it should render a form with 1 input:text for searching and an input:submit
6. Render the <Form /> in the <Search /> component, remove the "on search"
7. Add an onChange event handler to the search input in the form, ensure that the state for search is set every time something is typed
8. Add an onSubmit event handler for the form, this event handler should be defined in <Form /> and preventDefault()
9. Add a new function in <App /> named searchRecipes() it should take a search as a parameter, you then need to pass this function as a prop through <Search /> and <Form />
10. Invoke the searchRecipes function you passed as a prop in the onSubmit event handler in <Form />, it should take the search state as an argument
11. console.log the search parameter in searchRecipes, you have now successfully lifted state!
12. Sign up to the https://spoonacular.com/food-api food api
13. We'll need to use the search recipes endpoint https:spoonacular.com/food-api/docs#Search-Recipes, test this endpoint out in postman, it needs an apiKey in the query string
14. In searchRecipes() make a fetch request to the search recipes endpoint https://spoonacular.com/food-api/docs#Search-Recipes
15. Get back the response and setState (should be an array of recipes)
16. Pass the array of recipes as a prop to <Recipes />
17. Map through the props passed and render jsx in <Recipes />
