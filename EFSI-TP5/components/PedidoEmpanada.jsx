function PedidoEmpanada({ gusto, cantidad, onGustoChange, onCantidadChange }) {
  return (
    <>
      <label>Gusto de Empanada</label>
      <select value={gusto} onChange={(e) => onGustoChange(e.target.value)}>
        <option value="">Seleccione una opción...</option>
        <option value="Carne">Carne</option>
        <option value="Jamón y queso">Jamón y queso</option>
        <option value="Verdura">Verdura</option>
        <option value="Humita">Humita</option>
        <option value="Pollo">Pollo</option>
        <option value="Queso y cebolla">Queso y cebolla</option>
      </select>

      <label>Cantidad</label>
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => onCantidadChange(e.target.value)}
      />
    </>
  );
}

export default PedidoEmpanada;
