/* eslint-disable react/prop-types */
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer'
import logo from '../../assets/logo-monaterio.png'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 10

  },
  conteniner: {
    marginTop: 10,
    marginHorizontal: 25,
    flexGrow: 1
    // border: '1px solid #000' // Añadir un borde alrededor del recuadro
    // backgroundColor: 'red'
    // maxHeight: "100vh"
  },

  // header presupuesto
  headerPresupuesto: {
    height: '15%',
    // borderBottom: '1px solid #000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'

  },

  comprobantesCancelados: {
    maxHeight: '220px',
    minHeight: '220px'
    // backgroundColor: 'yellow'
  },

  titleComproCancelados: {
    marginTop: '30px',
    border: '1.5px solid black',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '39px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tablaComprobantes: {
    // aqui va el codigo de la tabla
  },

  formaDePagoSection: {
    maxHeight: '250px',
    minHeight: '250px'
    // backgroundColor: 'yellow'
  },

  titleFormaDePago: {
    marginTop: '30px',
    border: '1.5px solid black',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '39px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Firma estilos

  firma: {
    marginLeft: 'auto',
    marginRight: '30px',
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Fotter

  footer: {
    marginTop: '50px',
    borderTop: '1.5px solid black'
  },

  // lo viejo de aqui pa abajo ----------------------------------------------------------------------------------------------

  // parte izquierda
  logoPresu: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    height: '100%',
    width: '50vh',
    marginBottom: '4px'

  },
  datosEmpresa: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '50vh',
    textAlign: 'left',
    gap: 5
  },

  // DATOS CLIENTES
  dataCliente: {
    height: '10%',
    borderBottom: '1px solid #000',
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },

  content: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },

  // item main

  body: {
    margin: 'auto',
    flexDirection: 'row'
  },

  // Total y subtotal
  totalSubtotal: {
    height: '15%',
    borderTop: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10',
    gap: 15
  },

  itemTotal: {
    fontSize: 10
  },

  itemFinalTotal: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold'
  },

  // prueba nueva tabla

  table: {
    display: 'table',
    width: '85%',
    borderCollapse: 'collapse',
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15px'
  },
  tableRow: {
    flexDirection: 'row',
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
    borderStyle: 'solid',
    fontFamily: 'Helvetica-Bold'
    // backgroundColor: 'blue'
  },
  tableCell: {
    width: '28%',
    padding: 8,
    textAlign: 'left',
    fontSize: '8px'
    // backgroundColor: 'red'
  },
  tableRowBody: {
    flexDirection: 'row',
    // backgroundColor: 'purple',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  tableCellBody: {
    width: '28%',
    height: '15px',
    paddingTop: '2',
    textAlign: 'left',
    fontSize: '9px',
    backgroundColor: 'red'
    // backgroundColor: 'orange'

  }

})

function Recibo ({ fecha, destinatario, comprobanteCancelados, selectForm, formPago }) {
  function FormSelect () {
    switch (selectForm) {
      case 'CHEQUE':
        return (
          <>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>CHEQUE</Text>
              <Text style={styles.tableCell}>SUCURSAL</Text>
              {/* <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '8px', marginTop: '3px' }}>Número</Text> */}
              <Text style={styles.tableCell}>NUMERO</Text>
              <Text style={styles.tableCell}>P/</Text>
              <Text style={styles.tableCell}>Monto pago</Text>
            </View>
            {
               formPago.lenght <= 0
                 ? 'no datos'
                 : formPago.map(ele =>
                <View key={'sdasdas'} style={styles.tableRowBody}>
                  <Text style={styles.tableCellBody}>{ele.cheque}</Text>
                  <Text style={styles.tableCellBody}>{ele.sucursal}</Text>
                  <Text style={styles.tableCellBody}>{ele.numero}</Text>
                  <Text style={styles.tableCellBody}>{ele.pe}</Text>
                  <Text style={styles.tableCellBody}>{ele.montoPagar}</Text>
                </View>)
            }
          </>
        )
      case 'TRANSFERENCIA':
        return (

          <>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>TRANFERENCIA A BANCO</Text>
              <Text style={styles.tableCell}>SUCURSAL</Text>
              <Text style={styles.tableCell}>NUMERO</Text>
              <Text style={styles.tableCell}>CUENTA N°</Text>
              <Text style={styles.tableCell}>MONTO PAGO</Text>
            </View>
            {
               formPago.lenght <= 0
                 ? 'no datos'
                 : formPago.map(ele =>
                <View key={'sdasdas'} style={styles.tableRowBody}>
                  <Text style={styles.tableCellBody}>{ele.tranferenciaBanco}</Text>
                  <Text style={styles.tableCellBody}>{ele.sucursal}</Text>
                  <Text style={styles.tableCellBody}>{ele.cuentaNro}</Text>
                  <Text style={styles.tableCellBody}>{ele.montoPago}</Text>
                </View>)
            }
          </>
        )
      case 'EFECTIVO':
        return (
            <>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>EFECTIVO</Text>
            <Text style={styles.tableCell}>TIPO MONEDA</Text>
            <Text style={styles.tableCell}>COTIZACION</Text>
            <Text style={styles.tableCell}>MONTO DE PAGO</Text>
          </View>
          {
            formPago.lenght <= 0
              ? 'no datos'
              : formPago.map(ele =>
             <View key={'sdasdas'} style={styles.tableRowBody}>
               <Text style={styles.tableCellBody}>{ele.efectivo}</Text>
               <Text style={styles.tableCellBody}>{ele.tipoMoneda}</Text>
               <Text style={styles.tableCellBody}>{ele.cotizacion}</Text>
               <Text style={styles.tableCellBody}>{ele.montoPago}</Text>
             </View>)
         }
         </>
        )
      case 'OTROS':
        return (
          <>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>DESCRIPCION</Text>
              <Text style={styles.tableCell}>MONTO PAGAR</Text>
            </View>

            {
              formPago.lenght <= 0
                ? 'no datos'
                : formPago.map(ele =>
                  <View key={'sdasdas'} style={styles.tableRowBody}>
                    <Text style={styles.tableCellBody}>{ele.descripcion}</Text>
                    <Text style={styles.tableCellBody}>{ele.montoPago}</Text>
                  </View>)
            }

          </>
        )
      default:
        return ''
    }
  }

  return (
    <Document style={styles.page}>
      <Page size="A4">
        <View style={styles.conteniner}>
          {/* header presupuesto */}
          <View style={styles.headerPresupuesto}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={logo} style={{ width: 190, marginLeft: '25px', height: '71px' }} />
              <Text style={{ fontSize: '9px', fontWeight: 'bold' }}>MONASTERIO NEUMATICOS S.A.S</Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', marginTop: '10px', marginRight: '60px' }}>
              <View style={{ border: '1px solid black', width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', marginTop: 2, fontSize: '32px' }}>X</Text>
              </View>
              <Text style={{ fontSize: '10px' }}>Documento </Text>
              <Text style={{ fontSize: '10px' }} >No válido</Text>
              <Text style={{ fontSize: '10px' }}>como factura</Text>
            </View>
            <View style={{ marginRight: '25px' }}>
              <Text style={{ fontSize: '15px' }} >RECIBO</Text>
              <Text style={{ fontSize: '12px' }}>N°: 0000-00026931</Text>
              <Text style={{ fontSize: '12px' }} >Fecha: {fecha}</Text>
            </View>
          </View>
          {/* COMPROBANTES CANCELADOS */}
          <View style={styles.comprobantesCancelados}>
            <Text style={{ fontSize: '9px' }}>Sres:{destinatario}</Text>
            <View style={styles.titleComproCancelados}>
              <Text style={{}}>COMPROBANTES CANCELADOS</Text>
            </View>
            <View style={styles.tablaComprobantesCancelados}>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Fecha</Text>
                  <Text style={styles.tableCell}>TIPO</Text>
                  <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '8px', marginTop: '3px' }}>Número</Text>
                  <Text style={styles.tableCell}>Total</Text>
                  <Text style={styles.tableCell}>Monto pago</Text>

                </View>
                 {
                  comprobanteCancelados.lenght <= 0
                    ? 'no datos'
                    : comprobanteCancelados.map(ele =>
                    <View key={'sdasdas'} style={styles.tableRowBody}>
                  <Text style={styles.tableCellBody}>{ele.fecha}</Text>
                  <Text style={styles.tableCellBody}>{ele.montoPago}</Text>
                  <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '9px' }}>{ele.numero}</Text>
                  <Text style={styles.tableCellBody}>{ele.total}</Text>
                  <Text style={styles.tableCellBody}>{ele.montoPago}</Text>
                </View>
                    )}
                {/* <View key={'sdasdas'} style={styles.tableRowBody}>
                  <Text style={styles.tableCellBody}>{comprobanteCancelados[0] ? comprobanteCancelados[0].fecha : 'nada' }</Text>
                  <Text style={styles.tableCellBody}>FA</Text>
                  <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '9px' }}>0001-00043513</Text>
                  <Text style={styles.tableCellBody}>$431.032,00</Text>
                  <Text style={styles.tableCellBody}>$431.032,00</Text>
                </View> */}

              </View>
            </View>
            <Text style={{ fontSize: '10px', marginLeft: 'auto', marginRight: '45px' }}>TOTAL : 568.093,66</Text>
          </View>
          {/* FORMA DE PAGO */}
          <View>
            <View style={styles.formaDePagoSection}>
              <View style={styles.titleFormaDePago}>
                <Text>FORMA DE PAGO</Text>
              </View>
              <View style={{ marginTop: '15px' }}>
                <View style={styles.table}>

                    {FormSelect()}

                  {/* <View key={'sdasdas'} style={styles.tableRowBody}>
                    <Text style={styles.tableCellBody}>28/10/2023</Text>
                    <Text style={styles.tableCellBody}>FA</Text>
                    <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '9px' }}>0001-00043513</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>

                  </View> */}
                  {/* <View key={'sdasdasasdas'} style={styles.tableRowBody}>
                    <Text style={styles.tableCellBody}>28/10/2023</Text>
                    <Text style={styles.tableCellBody}>FA</Text>
                    <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '9px' }}>0001-00043513</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>

                  </View> */}
                  {/* <View key={'sdasdasasdas'} style={styles.tableRowBody}>
                    <Text style={styles.tableCellBody}>28/10/2023</Text>
                    <Text style={styles.tableCellBody}>FA</Text>
                    <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '9px' }}>0001-00043513</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>

                  </View> */}
                  {/* <View key={'sdasdasasdas'} style={styles.tableRowBody}>
                    <Text style={styles.tableCellBody}>28/10/2023</Text>
                    <Text style={styles.tableCellBody}>FA</Text>
                    <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '9px' }}>0001-00043513</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>

                  </View> */}
                  {/* <View key={'sdasdasasdas'} style={styles.tableRowBody}>
                    <Text style={styles.tableCellBody}>28/10/2023</Text>
                    <Text style={styles.tableCellBody}>FA</Text>
                    <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: '9px' }}>0001-00043513</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>
                    <Text style={styles.tableCellBody}>$431.032,00</Text>

                  </View> */}
                </View>
              </View>
              <Text style={{ fontSize: '10px', marginLeft: 'auto', marginRight: '45px' }}>TOTAL : 568.093,66</Text>
            </View>
          </View>
          {/* MONTO EN PESOS ESCRITO */}
          <View style={{ marginTop: '60px' }}>
            <Text style={{ fontSize: '9px', textAlign: 'center' }}>SON PESOS: un millón ochenta y dos mil setecientos treinta y cinco pesos con setenta y cuatro centavos</Text>
          </View>
          {/* FIRMA */}
          <View style={styles.firma}>
            <View style={{ border: '1px solid black', width: '100px' }}></View>
            <Text style={{ fontSize: '9px' }}>Firma Autoridades</Text>
          </View>
          {/* FOTER */}
          <View style={styles.footer}>
              <Text style={{ fontSize: '9px', textAlign: 'center', marginTop: '20px' }}>CASA CENTRAL: RN9 Km 1301, San Miguel de Tucumán, Tucumán.</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Recibo
