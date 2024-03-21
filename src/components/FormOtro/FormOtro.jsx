import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
function FormOtro () {
  const { formPago, setFormPago } = useContext(ReciboContext)
  function hanglerSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    const data = Object.fromEntries(formData)
    setFormPago([...formPago, data])
  }

  return (
        <form onSubmit={hanglerSubmit}>
             <div className="input-group">
                  <label>Descripcion</label>
                  <textarea name="descripcion" type="text" />
              </div>
              <div className="input-group">
                  <label>Monto Pago</label>
                  <input name="montoPago" type="text" />
              </div>
              <button>AGREGAR ITEM</button>
        </form>
  )
}

export default FormOtro
