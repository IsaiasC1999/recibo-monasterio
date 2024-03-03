import FormInitialWapper from './components/FormInicial/FormInitialWapper'
import FormItem from './components/FormItem/FormItem'
import Header from './components/Header/Header'
import Recibo from './components/ReciboPDF/Recibo'
import WrapperPago from './components/WrapperPago/WrapperPago'
import { ReciboProvider } from './context/ReciboContext'
import './styles/App.scss'
import { PDFViewer } from '@react-pdf/renderer'
function App () {
  return (
    <ReciboProvider>

    <div className='app-recibo'>
      <Header/>
      <div className='app-recibo__content'>
          {/* <FormInitialWapper/> */}
          {/* <FormItem/>
          <WrapperPago/> */}
          {/* <FormCheque/> */}
          <PDFViewer style={{ width: '800px', height: '740px' }}>
            <Recibo/>
        </PDFViewer>
      </div>
    </div>
    </ReciboProvider>

  )
}

export default App
