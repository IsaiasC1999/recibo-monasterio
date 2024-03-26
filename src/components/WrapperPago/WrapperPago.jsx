import { useContext } from 'react'
import FormCheque from '../FormCheque/FormCheque'
import FormTransfe from '../FormTransfe/FormTransfe'
import FormEfectivo from '../FormEfectivo/FormEfectivo'
import FormOtro from '../FormOtro/FormOtro'
import { ReciboContext } from '../../context/ReciboContext'
import TableFormaPago from '../TableFormaPago/TableFormaPago'

function WrapperPago () {
  const { selectForm, setSelectForm, formPago } = useContext(ReciboContext)

  console.log(selectForm)

  function FormSelect () {
    switch (selectForm) {
      case 'CHEQUE':
        return <FormCheque/>
      case 'TRANSFERENCIA':
        return <FormTransfe/>
      case 'EFECTIVO':
        return <FormEfectivo/>
      case 'OTROS':
        return <FormOtro/>
      default:
        return ''
    }
  }

  return (
        <section className="wrapper-pago">
               <div>
                    <p>FORMA DE PAGO</p>
                    <select name="select-pago" onChange={ (e) => setSelectForm(e.target.value) } value={selectForm} className="select-pago" >
                        <option value="">Seleccionar</option>
                        <option value="CHEQUE">CHEQUE</option>
                        <option value="TRANSFERENCIA">TRASNFERENCIA</option>
                        <option value="EFECTIVO">EFECTIVO</option>
                        <option value="OTROS">OTROS</option>
                    </select>
                </div>
                <div>
                    {FormSelect()}
                </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {formPago.length === 0 ? null : <TableFormaPago />}
      </div>
        </section>
  )
}

export default WrapperPago
