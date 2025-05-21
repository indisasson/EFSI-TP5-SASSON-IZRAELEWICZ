import { useActionState, useState } from "react";
import PedidoEmpanada from "./PedidoEmpanada.jsx"


function Formulario ({pedido}){
    
    
    
    const [gustosEmpanadas, setGustosEmpanadas] = useState([{}]);

    const agregarPedido = (e) => {
        e.preventDefault();
    
        pedido ({
            nombre: e.target.nombre.value,
            sector: e.target.sector.value,
            gustos: [...gustosEmpanadas],
        });  
        
    }

    const agregarEmpanada  = () =>{
        setGustosEmpanadas([...gustosEmpanadas, {}])
       
    }

    /* SEGUIR CON LO DE  LAS LISTAS Y MAS ADELANTE VEMOS LO DEL USE STATE CON FLECHA :)*/
    
    /*  
        VA AL FINAL PARA VER SI ANDA, ADENTRO DEL RETURN:
            <div>
                Pedido actual de: { pedido.nombre}
                sector: {pedido.sector}
                gustos: {console.log(gustosEmpanadas)}
            </div>
            
    */
    
    return(
        <>
            <div> 
                <h2>Realizar Pedido</h2>
                <form onSubmit={agregarPedido}>
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Fernando" />

                    <label>Sector</label>
                    <select name="sector" id="sector">
                        <option value="Sistemas">Sistemas</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Soporte">Soporte</option>
                        <option value="Depósito">Depósito</option>
                    </select>
                    
                    { gustosEmpanadas.map((g, index) => (<PedidoEmpanada empa={g} i={index} />))} 
                    

                    <input type="button" onClick={agregarEmpanada} value="Otra empanada" />
                    <button type="submit"> Enviar Pedido</button>

                </form>
                
            </div>
            
            
           
        </>
    )
}

export default Formulario