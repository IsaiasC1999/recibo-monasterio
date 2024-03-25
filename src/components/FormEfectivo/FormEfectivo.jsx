import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../FormEfectivo/FormEfectivo.scss'
// eslint-disable-next-line padded-blocks
function FormEfectivo () {

  const { formPago, setFormPago } = useContext(ReciboContext)

  function hanglerSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    const data = Object.fromEntries(formData)
    setFormPago([...formPago, data])
  }

  return (
          <form onSubmit={hanglerSubmit} className='formulario-cash'>
            <div className="input-cash">
              <div className="input-group group-cash">
                  <label>Efectivo</label>
                  <input name="efectivo" type="text" />
              </div>
              <div className="input-group group-cash">
                  <label>Tipo de moneda</label>
                  <input name="tipoMoneda" type="text" />
              </div>
              <div className="input-group group-cash">
                  <label>Cotizacion</label>
                  <input name="cotizacion" type="text" />
              </div>
              </div>
              <div className="input-group pago-cash">
                  <label>Monto pago</label>
                  <input name='montoPago' type="text" />
              </div>
              <button className='button'>AGREGAR ITEM</button>
          </form>
  )
}

export default FormEfectivo
