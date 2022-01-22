import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState, /*useRef*/ } from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Pizzas in DB --> */

// const quantityPizzas = undefined;

function ContentRowApp(){

    const [pizzas, setPizzas] = useState([]) ;

	useEffect(() => {
		fetch(`http://localhost:8080/api/products`)
		.then(response => response.json())
		.then(data => {	
			setPizzas(data)
			})
		.catch(error => console.error(error))
	}, [])

    
let pizzasInDB = {
    title: 'Pizzas en la base de datos',
    color: 'primary', 
    cuantity: pizzas.count?? 'no llega',	
    icon: 'fa-clipboard-list'
    }
    
    const [users, setUsers] = useState([]) ;

	useEffect(() => {
		fetch(`http://localhost:8080/api/users`)
		.then(response => response.json())
		.then(data => {	
			setUsers(data.count)
			})
		.catch(error => console.error(error))
	}, [])

    
    /* <!-- Users quantity --> */
    
    let usersQuantity = {
    title:'Cantidad de usuarios' ,
    color:'warning',
    cuantity: users,
    icon:'fa-user-check'
    }
  
    let cartProps = [pizzasInDB, usersQuantity];
    

    return (
    
        <div className="row">
            
            {cartProps.map( (element, i) => {

                return <SmallCard {...element} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowApp;