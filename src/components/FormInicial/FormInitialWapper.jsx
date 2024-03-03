import { useContext } from 'react'
import { ReciboContext } from '../../context/ReciboContext'

function FormInitialWapper () {
  const { destinario, fecha, setDestinatario, setFecha } = useContext(ReciboContext)

  return (
        <div className="form-wapper-initial">
            <div className="form-wapper-initial__title" >
                <h2>Datos para el recibo</h2>
                <h5>completar todos los datos</h5>
            </div>
            <div className='div-datos-iniciales'>
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
  )
}

export default FormInitialWapper
