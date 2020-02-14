import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'

class App extends Component {

  state = {
    foods: foods,
    menuArray: [...foods],
  }

  addFood = (meal) => {
    let foodCopy = [...this.state.menuArray]
    foodCopy.unshift(meal)
    this.setState({
      menuArray:foodCopy
    })
  }

  searchFood = (e) => {
    console.log(e.target.value, )
    let searchVal = e.target.value
    let searchArr = [...this.state.menuArray]
    let filteredfoods = searchArr.filter(eachFood=>{
      return eachFood.name.toLowerCase().includes(searchVal.toLowerCase())
    })
    this.setState({
      menuArray:filteredfoods
    })
  }


  render() {
    return (
      <div>
        <h1 className="title">Iron Nutrition</h1>
        <form onChange={this.handleSearch}>
              <input name="name" onChange={this.searchFood} type="text" placeholder="Search"/>
        </form>
        <FoodBox
          addMeal={this.addFood}
          foodItems={this.state.menuArray}
        />

      </div>
    );
  }
}

export default App;
