import PedidoEmpanada from "./PedidoEmpanada.jsx"


function Formulario (){
    
    const [empanada, setempanada] = useState([{ id: 1, gusto: '', cantidad: 1 }])
    const agregarEmpanada () => {
        
    }
    
    return(
        <>
            <div> 
                <h2>Realizar Pedido</h2>
                <form>
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Fernando" />

                    <label>Sector</label>
                    <select name="sector" id="sector">
                        <option value="Sistemas" selected>Sistemas</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Soporte">Soporte</option>
                        <option value="Depósito">Depósito</option>
                    </select>
                    
                    { pedido.gustos.map( g => <PedidoEmpanada />) }
                    
                    
                    <button onClick={agregarEmpanada}>Otra empanada</button>

                </form>
            </div>
        </>
    )

}

export default Formulario