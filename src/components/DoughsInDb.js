import React from "react";
import { useEffect, useState} from 'react';

function DoughsInDb() {

  const [doughs, setDoughs] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/products`)
        .then(response => response.json())
        .then(data => {
            setDoughs(Object.keys(data.countByCategory.doughs));
            setQuantity(Object.keys(data.countByCategory.doughs).map(key => data.countByCategory.doughs[key]));
            })

        .catch(error => console.error(error))
}, [])

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800" width="100%">
            Tipos de Masa
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          {
							doughs.length > 0 && doughs.map((dough, i) => {
							
              	return (
                  <div className="col-lg-6 mb-4" key={i}>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{dough} : {quantity[i]} pizzas</div>
              </div>
            </div>

								)
							})
						}          
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughsInDb;
