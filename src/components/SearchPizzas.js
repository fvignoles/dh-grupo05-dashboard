import React from 'react';
import { useEffect, useState, useRef } from 'react';
//import noPoster from '../assets/images/mandalorian.jpg';

// Credenciales de API
const apiKey = 'e24ea09d';

function SearchPizzas(){

const [keyword, setKeyword] = useState('');

const [pizzas, setPizzas] = useState([]) ;

	useEffect(() => {
		fetch(`http://localhost:8080/api/products`)
		.then(response => response.json())
		.then(data => {	
			setPizzas(data.products.filter(pizza => pizza.name.toLowerCase().includes(keyword.toLowerCase())))
			})
		.catch(error => console.error(error))
	}, [keyword])

	const inputTag = useRef();

	const searchPizza = async e => {
		e.preventDefault();
		const inputValue = inputTag.current.value;
		setKeyword(inputValue);
		inputTag.current.value = '';
	}

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchPizza}>
								<div className="form-group">
									<label htmlFor="">Buscar Pizza:</label>
									<input type="text" className="form-control" ref={inputTag} />
								</div>
								<button className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Nombre de la pizza : {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							pizzas.length > 0 && pizzas.map((pizza, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{pizza.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={pizza.image}
														alt={pizza.name} 
														style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
													/>
												</div>
												<p>{pizza.description}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ pizzas.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchPizzas;
