import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../TableComprobados/TableComprobantes.scss'

function TableComprobantes () {
  const { comprobanteCancelados, setComprobanteCancelados } = useContext(ReciboContext)

  function DeleteItem (numero) {
    const newItem = comprobanteCancelados.filter(ele => ele.numero !== numero)
    console.log(newItem)
    setComprobanteCancelados(newItem)
  }

  return (

        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Numero</th>
                    <th>Total</th>
                    <th>Monto Pago</th>
                    <th>Opciones</th>
                </tr>
            </thead>
          <tbody>
              {comprobanteCancelados.map(ele =>

                  <tr key={ele.numero}>
                      <th>{ele.fecha}</th>
                      <th>{ele.tipo}</th>
                      <th>{ele.numero}</th>
                      <th>{ele.total}</th>
                      <th>{ele.montoPago}</th>
                      <th><button onClick={() => DeleteItem(ele.numero)}>Borrar</button></th>
                  </tr>
              )}
          </tbody>
        </table>

  )
}

export default TableComprobantes
