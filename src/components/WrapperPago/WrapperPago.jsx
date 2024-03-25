import { useState } from 'react'
import FormCheque from '../FormCheque/FormCheque'
import FormTransfe from '../FormTransfe/FormTransfe'
import FormEfectivo from '../FormEfectivo/FormEfectivo'
import FormOtro from '../FormOtro/FormOtro'
import '../WrapperPago/WrapperPago.scss'

function WrapperPago () {
  const [selectForm, setSelectForm] = useState('')
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
               <div className='title_select'>
                    <h2 className='title'>FORMA DE PAGO</h2>
                    <select name="select-pago" onChange={ (e) => setSelectForm(e.target.value) } value={selectForm} className="select-pago" >
                        <option value="">Seleccionar</option>
                        <option value="CHEQUE">CHEQUE</option>
                        <option value="TRANSFERENCIA">TRANSFERENCIA</option>
                        <option value="EFECTIVO">EFECTIVO</option>
                        <option value="OTROS">OTROS</option>
                    </select>
                </div>
                <div className='div-padre'>
                    {FormSelect()}
                </div>
        </section>
  )
}

export default WrapperPago
