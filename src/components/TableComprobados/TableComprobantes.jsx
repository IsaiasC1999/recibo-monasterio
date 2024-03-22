import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'

function TableComprobantes () {
  const { comprobanteCancelados } = useContext(ReciboContext)

  return (

        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Numero</th>
                    <th>Total</th>
                    <th>Monto Pago</th>
                </tr>
            </thead>
          <tbody>
              {comprobanteCancelados.map(ele =>

                  <tr key={ele.numero}>
                      <th>Fecha 1</th>
                      <th>Tipo 1</th>
                      <th>Numero 1</th>
                      <th>Total 1</th>
                      <th>Monto Pago 2</th>
                  </tr>
              )}
          </tbody>
        </table>

  )
}

export default TableComprobantes

{ /* <table>
<thead>
   <tr>
       <th>Fecha</th>
       <th>Tipo</th>
       <th>Numero</th>
       <th>Total</th>
       <th>Monto Pago</th>
   </tr>
   </thead>
<tbody>

 <tr>
     <th>Fecha 1</th>
     <th>Tipo 1</th>
     <th>Numero 1</th>
     <th>Total 1</th>
     <th>Monto Pago 2</th>
 </tr>
</tbody>
</table> */ }
