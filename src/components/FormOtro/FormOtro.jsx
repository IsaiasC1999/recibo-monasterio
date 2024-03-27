import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../FormOtro/FormOtro.scss'
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
        <form onSubmit={hanglerSubmit} className='formulario-otro'>
             <div className="group-otro">
                  <label>Descripcion</label>
                  <textarea name="descripcion" type="text" />
              </div>
              <div className='group-monto'>
                  <label>Monto de pago</label>
                  <input type="text" />
              </div>
              <a href="">Agregar item</a>
              <div className="input-group">
                  <label>Monto Pago</label>
                  <input name="montoPago" type="text" />
              </div>
              <button>AGREGAR ITEM</button>
        </form>
  )
}

export default FormOtro
