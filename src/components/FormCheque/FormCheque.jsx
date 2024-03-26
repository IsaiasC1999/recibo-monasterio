import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'

function FormCheque () {
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
                  <label>Cheque</label>
                  <input name="cheque" type="text" />
              </div>
              <div className="input-group">
                  <label>Sucursal</label>
                  <input name="sucursal" type="text" />
              </div>
              <div className="input-group">
                  <label>Numero</label>
                  <input name="numero" type="text" />
              </div>
              <div className="input-group">
                  <label>P/</label>
                  <input name="pe" type="text" />
              </div>
              <div className="input-group">
                  <label>Monto pago</label>
                  <input name="montoPagar" type="text" />
              </div>

              <button>AGREGAR ITEM</button>
          </form>
          <p>Total: pepito</p>
      </>
  )
}

export default FormCheque
