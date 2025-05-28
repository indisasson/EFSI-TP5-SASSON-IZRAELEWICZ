import { useActionState, useState } from "react";
import PedidoEmpanada from "./PedidoEmpanada.jsx"
import './Formulario.css'


function Formulario ({pedido}){
    
    const [nombre, setNombre] = useState("");
    const [sector, setSector] = useState("Sistemas");
    const [gustosEmpanadas, setGustosEmpanadas] = useState([{ gusto: "", cantidad: "" }]);

    const agregarEmpanada = () => {
        setGustosEmpanadas([...gustosEmpanadas, { gusto: "", cantidad: "" }]);
    };

    const actualizarGusto = (index, nuevoGusto) => {
        const nuevosGustos = [...gustosEmpanadas];
        nuevosGustos[index].gusto = nuevoGusto;
        setGustosEmpanadas(nuevosGustos);
    };

    const actualizarCantidad = (index, nuevaCantidad) => {
        const nuevosGustos = [...gustosEmpanadas];
        nuevosGustos[index].cantidad = nuevaCantidad;
        setGustosEmpanadas(nuevosGustos);
    };

    const agregarPedido = (e) => {
        e.preventDefault();

        pedido({
        nombre,
        sector,
        gustos: [...gustosEmpanadas.map(g => ({ ...g }))]
        });

        setNombre("");
        setSector("Sistemas");
        setGustosEmpanadas([{ gusto: "", cantidad: "" }]);
    };

    
    
    return (
        <div>
          <h2>Realizar Pedido</h2>
          <form onSubmit={agregarPedido}>
            <label>Nombre</label>
            <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Fernando" required />
    
            <label>Sector</label>
            <select name="sector" value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value="Sistemas">Sistemas</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Ventas">Ventas</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Soporte">Soporte</option>
              <option value="Depósito">Depósito</option>
            </select>
    
            {gustosEmpanadas.map((g, index) => (
              <PedidoEmpanada
                key={index}
                gusto={g.gusto}
                cantidad={g.cantidad}
                onGustoChange={(nuevoGusto) => actualizarGusto(index, nuevoGusto)}
                onCantidadChange={(nuevaCantidad) => actualizarCantidad(index, nuevaCantidad)}
              />
            ))}
    
            <input type="button" onClick={agregarEmpanada} value="Otra empanada" />
            <button type="submit">Enviar Pedido</button>
          </form>
        </div>
      );    
}

export default Formulario