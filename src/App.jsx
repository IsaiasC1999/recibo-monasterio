import { useContext } from 'react'
import FormInitialWapper from './components/FormInicial/FormInitialWapper'
import FormItem from './components/FormItem/FormItem'
import Header from './components/Header/Header'
import Recibo from './components/ReciboPDF/Recibo'
import WrapperPago from './components/WrapperPago/WrapperPago'
import { ReciboContext } from './context/ReciboContext'
import './styles/App.scss'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import PruebaMap from './components/PruebaMap'
function App () {
  const { destinatario, fecha, comprobanteCancelados, selectForm, formPago } = useContext(ReciboContext)

  return (

    <div className='app-recibo'>
      <Header />
      <div className='app-recibo__content'>
        <FormInitialWapper />
        <FormItem/>
        <WrapperPago/>
        {/* <FormCheque/> */}

        <PDFDownloadLink document={<Recibo destinatario={destinatario} fecha={fecha} formPago={formPago} comprobanteCancelados={comprobanteCancelados} selectForm={selectForm} />} fileName="somename.pdf" style={{ height: '740px', textDecoration:'none', border:'2px solid #172169', backgroundColor:'#172169',color:'white'}}>
          Solicitar PDF
        </PDFDownloadLink>
        {/* <PruebaMap/> */}
      </div>
    </div>

  )
}

export default App
