import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../FormCheque/FormCheque.scss'

function FormCheque () {
  const { formPago, setFormPago } = useContext(ReciboContext)

  function hanglerSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    const data = Object.fromEntries(formData)
    setFormPago([...formPago, data])
  }

  return (
        <section className='cuerpo-cheque'>
          <form onSubmit={hanglerSubmit} className='form-cheque'>
            <div className="form_cheque">
              <div className="input-group item">
                  <label>Cheque</label>
                  <input name="cheque" type="text" />
              </div>
              <div className="input-group item">
                  <label>Sucursal</label>
                  <input name="sucursal" type="text" />
              </div>
              <div className="input-group item">
                  <label>Numero</label>
                  <input name="numero" type="text" />
              </div>
              <div className="input-group item">
                  <label>P/</label>
                  <input name="P/" type="text" />
              </div>
            </div>
              <div className="input-group form_monto">
                  <label>Monto pago</label>
                  <input name="montoPagar" type="text" />
              </div>

              <button>AGREGAR ITEM</button>
          </form>
        </section>
  )
}

export default FormCheque
