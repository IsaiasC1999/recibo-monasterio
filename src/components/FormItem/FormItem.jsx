import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
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
      <div className="form-item-wrapper">
          <div className="form-item-wrapper__title">
              <p>COMPROBANTES CANCELADOS</p>
          </div>
          <form onSubmit={hanglerSubmit}>
              <div className="input-group">
                  <label>Fecha</label>
                  <input name='fecha' type="text" />
              </div>
              <div className="input-group">
                  <label>TIPO</label>
                  <input name='tipo' type="text" />
              </div>
              <div className="input-group">
                  <label>Numero</label>
                  <input name='numero' type="text" />
              </div>
              <div className="input-group">
                  <label>Total</label>
                  <input name='total' type="text" />
              </div>
              <div className="input-group">
                  <label>Monto pago</label>
                  <input name="montoPago" type="text" />
              </div>
              <button>AGREGAR ITEM</button>
          </form>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             {comprobanteCancelados.length === 0 ? null : <TableComprobantes/>}
          </div>
      </div>
  )
}

export default FormItem
