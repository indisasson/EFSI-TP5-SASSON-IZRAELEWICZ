import { useActionState, useState } from "react";
import Formulario from "./Formulario.jsx";
import './Listado.css'

function Listado ({mipedido}){
    
    console.log(mipedido)
    
    const calcularTotalesPorGusto = () => {
        const totales = {};
    
        mipedido.forEach((pedido) => {
          pedido.gustos.forEach(({ gusto, cantidad }) => {
            if (gusto) {
              if (!totales[gusto]) {
                totales[gusto] = 0;
              }
              totales[gusto] += Number(cantidad);
            }
          });
        });
    
        return totales;
      };
    
      const totales = calcularTotalesPorGusto();

      return (
        <div className="listado-container">
          <h2>Pedidos por persona</h2>
          {mipedido.map((p, index) => (
            <div key={index} className="card-pedido">
              <p><strong>Nombre:</strong> {p.nombre}</p>
              <p><strong>Sector:</strong> {p.sector}</p>
              <ul>
                {p.gustos.map((g, i) => (
                  <li key={i}>{g.gusto}: {g.cantidad} empanadas</li>
                ))}
              </ul>
            </div>
          ))}
      
          <h2>Total por gusto</h2>
          <div className="card-total">
            <ul>
              {(() => {
                const gustosTotales = [];
                for (let gusto in totales) {
                  gustosTotales.push(
                    <li key={gusto}>{gusto}: {totales[gusto]}</li>
                  );
                }
                return gustosTotales;
              })()}
            </ul>
          </div>
        </div>
      );
}

export default Listado