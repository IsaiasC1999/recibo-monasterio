import { useState, createContext } from 'react'
export const ReciboContext = createContext()

// eslint-disable-next-line react/prop-types
export function ReciboProvider ({ children }) {
  const [destinatario, setDestinatario] = useState('')
  const [fecha, setFecha] = useState('')
  const [comprobanteCancelados, setComprobanteCancelados] = useState([])
  const [formPago, setFormPago] = useState([])
  const [selectForm, setSelectForm] = useState('')

  return (
        <ReciboContext.Provider value={{ destinatario, fecha, comprobanteCancelados, formPago, selectForm, setDestinatario, setSelectForm, setFecha, setFormPago, setComprobanteCancelados }}>
            {children}
        </ReciboContext.Provider>
  )
}
