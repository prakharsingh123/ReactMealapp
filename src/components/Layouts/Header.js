import React ,{Fragment} from 'react'
import classes from './Header.module.css'
import CartButton from './CartButton'

const Header=props=>{
  return (
   <Fragment>
    <div className={classes.header}>
        <h1>React Meals</h1>
       <CartButton onClick={props.onShown}></CartButton>
    </div>
    <div className={classes['main-image']}>
        <img src='https://images.pexels.com/photos/7239448/pexels-photo-7239448.jpeg?auto=compress&cs=tinysrgb&w=600' alt='dining meal'/>
    </div>

   </Fragment>
  )
}

export default Header
