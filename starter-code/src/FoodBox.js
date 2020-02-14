import React, { Component } from 'react';

// let searchval = this.props.foodSearch.indexOf(([e.target.name]:e.target.value) =>{
    
//     return console.log(searchval)

// })    

// }
class FoodBox extends Component {

    state = {
        showTheForm: false,
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMeal(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    foodHandler = () => {
        let foodlist = this.props.foodItems.map((eachFood, i) =>{
            return <div key={i} className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={eachFood.image} alt={eachFood.name}/>
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{eachFood.name}</strong> <br />
                            <small>{eachFood.calories}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input 
                                className="input"
                                type="number" 
                                value="1"
                                onChange={this.handleChange}
                            />
                            </div>
                            <div className="control">
                            <button className="button is-info">
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                    </div>  
        })
        return foodlist
    }

    showform = () => {
        if(this.state.showTheForm) {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input name="name" onChange={this.handleChange} type="text" placeholder="Food"/>
            <input name="calories" onChange={this.handleChange} type="number" placeholder="Calories"/>
            <input name="image" onChange={this.handleChange} type="url" placeholder="Image Url"/>
            <input type="submit" />
            </form>
            </div>
        )} else {
            return " "
        }
    }

    toggleFoodState = () => {
        console.log("hello")
        this.setState({
            showTheForm:!this.state.showTheForm
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggleFoodState}>Add Food</button>
                {this.showform()}
                {this.foodHandler()}
            </div>
        );
    }
}

export default FoodBox;