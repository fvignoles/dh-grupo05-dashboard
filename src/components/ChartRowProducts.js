import React from 'react';


function ChartRowProducts(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.size}</td>
                    <td>{props.dough}</td>         
                </tr>
            )
    }       

export default ChartRowProducts;