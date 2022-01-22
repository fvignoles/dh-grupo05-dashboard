import React from "react";
import { useEffect, useState} from 'react';

function SizesInDb() {

  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/products`)
        .then(response => response.json())
        .then(data => {
            setSizes(Object.keys(data.countByCategory.sizes));
            setQuantity(Object.keys(data.countByCategory.sizes).map(key => data.countByCategory.sizes[key]));
            })

        .catch(error => console.error(error))
}, [])

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800" width="100%">
            Tamaños de pizzas
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          {
							sizes.length > 0 && sizes.map((size, i) => {
							
              	return (
                  <div className="col-lg-6 mb-4" key={i}>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{size} : {quantity[i]} pizzas</div>
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

export default SizesInDb;
