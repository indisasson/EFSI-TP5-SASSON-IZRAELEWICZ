import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from '../components/Formulario.jsx'
import Listado from '../components/Listado.jsx'

function App() {
  
  const [pedido, setPedido] = useState(/*{
    nombre: "",
    sector: "",
    gustos: [{
        gusto: "",
        cantidad: 0
    }]
  }*/ []);


  console.log(pedido)

 let recibopedido = (ped)=>{
  setPedido(prev => [...prev, ped]);
 }

 console.log(pedido)


 return (
  <div className="app-container">
    <Formulario pedido={recibopedido} />
    <Listado mipedido={pedido} />
  </div>
)

}

export default App
