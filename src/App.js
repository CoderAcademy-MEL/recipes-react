import React from 'react';
import Search from './components/search';
import Recipes from './components/recipes';


class App extends React.Component {
  state = {recipes: null}
  searchRecipes = async (search) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${search}&apiKey=2aca7bd010314b9a8b195a12027391a7`);
    const data = await response.json();
    this.setState({recipes: data.results});
  }

  render() {
    return (
      <>
        <Search searchFunc={this.searchRecipes} />
        {this.state.recipes && <Recipes data={this.state.recipes} />}
      </>
    );
  }
}

export default App;
