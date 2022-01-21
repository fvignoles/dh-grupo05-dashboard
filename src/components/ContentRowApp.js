import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Pizzas in DB --> */

let pizzasInDB = {
    title: 'Pizzas en la base de datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total doughs --> */

let totalDoughs = {
    title:' Total de masas', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Users quantity --> */

let usersQuantity = {
    title:'Cantidad de usuarios' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [pizzasInDB, totalDoughs, usersQuantity];

function ContentRowApp(){
    return (
    
        <div className="row">
            
            {cartProps.map( (element, i) => {

                return <SmallCard {...[element]} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowApp;