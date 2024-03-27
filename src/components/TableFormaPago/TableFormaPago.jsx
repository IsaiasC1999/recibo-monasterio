import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../TableFormaPago/TableFormaPago.scss'

function TableFormaPago () {
  const { formPago } = useContext(ReciboContext)

  const arrayTableFormPago = formPago.map(ele => {
    switch (ele.tipe) {
      case 'CHEQUE':
        return (
                    <tr key={'sdasdas'} >
                        <th >CHEQUE {ele.cheque}</th>
                        <th >Suc {ele.sucursal}</th>
                        <th >N° {ele.numero}</th>
                        <th >p/ {ele.pe}</th>
                        <th >{ele.montoPagar}</th>
                        <th><button>Eliminar</button></th>
                    </tr>
        )
      case 'TRANSFERENCIA':
        return (
                    <tr key={'sdasdas12312'} >
                        <th >TRASF.BANCO {ele.tranferenciaBanco}</th>
                        <th >Suc {ele.sucursal}</th>
                        <th >cuenta N° {ele.cuentaNro}</th>
                        <th>{ele.montoPago}</th>
                        <th><button>Eliminar</button></th>
                    </tr>
        )
      case 'EFECTIVO':
        return (
                    <tr key={'sdasdas'} >
                        <th>EFECTIVO {ele.efectivo}</th>
                        <th> tipo moneda {ele.tipoMoneda}</th>
                        <th> cotizacion {ele.cotizacion}</th>
                        <th>monto pago {ele.montoPago}</th>
                        <th><button>Eliminar</button></th>

                    </tr>
        )
      default:
        return (
                    <tr key={'asdgfg32423'}>
                        <th>Número {ele.tipe}</th>
                        <th>Sin coincidencia</th>
                    </tr>
        )
    }
  })

  return (
        <table>
            {arrayTableFormPago}
        </table>
  )
}

export default TableFormaPago
