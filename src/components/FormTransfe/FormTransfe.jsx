import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
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
      <>
          <form onSubmit={hanglerSubmit}>
              <div className="input-group">
                  <label>Tranferencia a banco</label>
                  <input name="tranferenciaBanco" type="text" />
              </div>
              <div className="input-group">
                  <label>Sucursal</label>
                  <input name="sucursal" type="text" />
              </div>
              <div className="input-group">
                  <label>Cuenta N°</label>
                  <input name="cuentaNro" type="text" />
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

export default FormTransfe
