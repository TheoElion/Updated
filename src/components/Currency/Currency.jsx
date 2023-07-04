import axios from 'axios'

import { MdCurrencyExchange } from 'react-icons/md'

import { useState, useEffect } from 'react'

const Currency = () => {

    const urlApi = 'https://economia.awesomeapi.com.br/last/'
    const coins = 'USD-BRL'
    const [price, setPrice] = useState(false)

    useEffect(() => {
      getPrice()
    }, [price]) // Empty dependency array to ensure the effect runs only once on component mount
  
    const getPrice = async () => {
      try {
        const res = await axios.get(urlApi + coins)
        setPrice(parseFloat(res.data.USDBRL.bid).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }))
      } catch (error) {
        console.error('Error:', error)
      }
    }
    
  return (
    <main className='currency-main'>
      <h3>Cotação de hoje <MdCurrencyExchange/></h3>
      <p>$1</p>
      <h4>{price}</h4>
    </main>
  )
}

export default Currency