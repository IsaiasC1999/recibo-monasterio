import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../FormTransfe/FormTransfe.scss'

function FormTransfe () {
  const { formPago, setFormPago, selectForm } = useContext(ReciboContext)

  function hanglerSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    const data = Object.fromEntries(formData)
    data.tipe = selectForm
    setFormPago([...formPago, data])
  }

  return (
      <div className="cuerpo-transfer">
          <form onSubmit={hanglerSubmit} className='formulario-transfer'>
            <div className="input-transfer">
              <div className="group-transfer">
                  <label>Tranferencia a banco</label>
                  <input name="tranferenciaBanco" type="text" />
              </div>
              <div className="group-transfer">
                  <label>Sucursal</label>
                  <input name="sucursal" type="text" />
              </div>
              <div className="group-transfer">
                  <label>Cuenta N°</label>
                  <input name="cuentaNro" type="text" />
              </div>
            </div>
              <div className="pago-transfer">
                  <label>Monto pago</label>
                  <input name='montoPago' type="text" />
              </div>
              <button className='button'>AGREGAR ITEM</button>
          </form>
        </div>
  )
}

export default FormTransfe
