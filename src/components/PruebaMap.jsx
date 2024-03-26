function PruebaMap () {
  const numbers = [1, 2, 3, 4, 5]

  const processedNumbers = numbers.map(num => {
    switch (num) {
      case 'CHEQUE':
        return (
                    <div key={num}>
                        <p>Número {num}</p>
                        <p>Caso 1</p>
                    </div>
        )
      case 'TRANSFERENCIA':
        return (
                    <div key={num}>
                        <p>Número {num}</p>
                        <p>Caso 2</p>
                    </div>
        )
      case '':
        return (
                    <div key={num}>
                        <p>Número {num}</p>
                        <p>Caso 3</p>
                    </div>
        )
      default:
        return (
                    <div key={num}>
                        <p>Número {num}</p>
                        <p>Sin coincidencia</p>
                    </div>
        )
    }
  })

  //   console.log(processedNumbers)

  return (
      <div>
          {processedNumbers}
      </div>
  )
}

export default PruebaMap
