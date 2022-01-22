import React from 'react';
import ChartRowProducts from './ChartRowProducts';
import { useEffect, useState} from 'react';

function ChartProducts (){

    const [pizzas, setPizzas] = useState([]) ;

	useEffect(() => {
		fetch(`http://localhost:8080/api/products`)
		.then(response => response.json())
		.then(data => {	
			setPizzas(data.products)})
		.catch(error => console.error(error))
	}, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Tamaño</th>
                                <th>Masas</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Tamaño</th>
                                <th>Masas</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            pizzas.map( ( row , i) => {
                                return <ChartRowProducts { ...row} key={i}/>
                            
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}


export default ChartProducts;