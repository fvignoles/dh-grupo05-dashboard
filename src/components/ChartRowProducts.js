import React from 'react';


function ChartRowProducts(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                 {/*   <td>{props.sizes.size_name}</td>
                    <td>{props.doughs}</td> */}
                   
                </tr>
            )
    }       

export default ChartRowProducts;