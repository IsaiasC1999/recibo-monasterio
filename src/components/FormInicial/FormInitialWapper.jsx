import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'
import '../FormInicial/FormInicial.scss'

function FormInitialWapper () {
  const { destinario, fecha, setDestinatario, setFecha } = useContext(ReciboContext)

  return (
        <div className="form-wapper-initial cabeza">
          <div className="center">
              <div className="form-wapper-initial__title title" >
                  <h1>Datos para el recibo</h1>
                  <p>completar todos los datos</p>
              </div>
              <div className='div-datos-iniciales form-inicial'>
                <div className="input-group">
                    <label>Sres.</label>
                    <input value={destinario} onChange={(e) => setDestinatario(e.target.value)} type="text" />
                </div>
                <div className="input-group">
                    <label>Fecha</label>
                    <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" />
                </div>
            </div>
          </div>
        </div>
  )
}

export default FormInitialWapper
