import React from 'react'
import classes from './AvaliableMeals.module.css'
import Card from '../UI/Card';
import MealItems from './MealItems/MealItems';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99 
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99
    },
  ];



const AvailableMeals= ()=> {

    const mealItems = DUMMY_MEALS.map((meal)=> <MealItems id = {meal.id} 
    name= {meal.name} 
    description= {meal.description}
    price= {meal.price}>
  

    </MealItems> )
  return (
   <section id='meal-1' className={classes.meals}>
    <Card>
    <ul>
        {mealItems}
    </ul>
    </Card>
   
   </section>
  )
}

export default AvailableMeals
