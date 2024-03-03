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
    borderBottom: '1px solid #000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'

  },

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
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderStyle: 'solid',
    fontFamily: 'Helvetica-Bold'
  },
  tableCell: {
    width: '28%',
    padding: 8,
    textAlign: 'left',
    fontSize: '8px'
  },
  tableRowBody: {
    flexDirection: 'row'
    // backgroundColor: 'red'

  },
  tableCellBody: {
    width: '28%',
    padding: 5,
    textAlign: 'left',
    fontSize: '9px'
  }

})

function Recibo () {
  return (
      <Document style={styles.page}>
          <Page size="A4">
              <View style={styles.conteniner}>
                  <View style={styles.headerPresupuesto}>
                      <Image src={logo} style={{ width: 170, margin: 15, height: '100px' }} />
                  <View style={{ position: 'absolute', top: 5, right: 265, border: '1px solid black', width: 25, height: 25 }}>
                      <Text style={{ textAlign: 'center', marginTop: 2 }}>X</Text>
                  </View>
                  <View>
                    <Text>RECIBO</Text>
                    <Text>N°: 0000-00026931</Text>
                    <Text>Fecha: 08/11/2023</Text>
                  </View>
                  </View>
              </View>
          </Page>
      </Document>
  )
}

export default Recibo
