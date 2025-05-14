

function PedidoEmpanada (){

    return(
        <>
                    <label>Gusto de Empanada</label>
                    <select name="gusto" id="1">
                        <option value="Carne" selected>Carne</option>
                        <option value="Jamón y queso">Jamon y queso</option>
                        <option value="Verdura">Verdura</option>
                        <option value="Humita">Humita</option>
                        <option value="Pollo">Pollo</option>
                        <option value="Queso y cebolla">Queso y cebolla</option>
                    </select>

                    <label>Cantidad</label>
                    <input type="number" max="999" min="1" step={1}/>
        </>
    )
}

export default PedidoEmpanada;