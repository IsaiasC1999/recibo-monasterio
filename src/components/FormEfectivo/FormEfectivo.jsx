import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
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
      <>
          <form onSubmit={hanglerSubmit}>
              <div className="input-group">
                  <label>Efectivo</label>
                  <input name="efectivo" type="text" />
              </div>
              <div className="input-group">
                  <label>Tipo de moneda</label>
                  <input name="tipoMoneda" type="text" />
              </div>
              <div className="input-group">
                  <label>Cotizacion</label>
                  <input name="cotizacion" type="text" />
              </div>
              <div className="input-group">
                  <label>Monto pago</label>
                  <input name='montoPago' type="text" />
              </div>
              <button>AGREGAR ITEM</button>
          </form>
          <p>Total: 123123</p>
      </>
  )
}

export default FormEfectivo
