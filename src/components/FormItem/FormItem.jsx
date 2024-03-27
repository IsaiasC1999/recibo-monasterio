import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../FormItem/FormItem.scss'
import TableComprobantes from '../TableComprobados/TableComprobantes'

function FormItem () {
  const { comprobanteCancelados, setComprobanteCancelados } = useContext(ReciboContext)

  function hanglerSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    setComprobanteCancelados([...comprobanteCancelados, data])
    console.log(typeof data)
    // setComprobanteCancelados()
    console.log(comprobanteCancelados)
  }

  return (
      <div className="form-item-wrapper cuerpo">
          <div className="form-item-wrapper__title title">
              <h2>COMPROBANTES CANCELADOS</h2>
          </div>
          <form onSubmit={hanglerSubmit} className='formulario'>
            <div className="input-item">
            <div className="input-group input_item">
                  <label>Fecha</label>
                  <input name='fecha' type="date" />
              </div>
              <div className="input-group input_item">
                  <label>TIPO</label>
                  <input name='tipo' type="text" />
              </div>
              <div className="input-group input_item">
                  <label>Numero</label>
                  <input name='numero' type="text" />
              </div>
              <div className="input-group input_item">
                  <label>Total</label>
                  <input name='total' type="number" />
              </div>
            </div>
              <div className="input-group input_pago">
                  <label>Monto pago</label>
                  <input name="montoPago" type="number" />
              </div>
              <button className='button'>AGREGAR ITEM</button>
          </form>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             {comprobanteCancelados.length === 0 ? null : <TableComprobantes/>}
          </div>
      </div>
  )
}

export default FormItem
