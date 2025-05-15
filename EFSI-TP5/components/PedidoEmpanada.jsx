import { useState } from "react";


function PedidoEmpanada ({empa}) {
    //const [gusto, setGusto] = useState();
    //const [cantidad, setCantidad] = useState(0);

    return(
        <>
                    <label>Gusto de Empanada</label>
                    <select onChange={ (e) => empa.gusto = e.target.value } id="1">
                        <option value="">Seleccione una opcion...</option>
                        <option value="Carne">Carne</option>
                        <option value="Jamón y queso">Jamon y queso</option>
                        <option value="Verdura">Verdura</option>
                        <option value="Humita">Humita</option>
                        <option value="Pollo">Pollo</option>
                        <option value="Queso y cebolla">Queso y cebolla</option>
                    </select>

                    <label>Cantidad</label>
                    <input onKeyUp={(e) => empa.cantidad = e.target.value} type="number" max="999" min="1" step={1}/>
        </>
    )
}

export default PedidoEmpanada;