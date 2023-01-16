import { useEffect, useState } from 'react';
import { getCoins, getMarket } from './api/fechCoins';
import './App.css';
import ButtonCoin from './components/Button';
import LineGraph from './components/Line';


function App() {
  const [dataCoins,setDataCoins] = useState([])
  const [price,setPrice] = useState([])
  const [name,setName] = useState([])
  const [coins,setCoins] = useState({
    prices: [],
    dates: [],
    caps: [],
  })
  const fechData = async () => {
   const res = await getCoins();
   setDataCoins(res.data)
  }

const fechCoinsMarketChart = async (id = 'bitcoin') => {
        const res = await getMarket(id);
        const newDates = [];
        const newPrices = [];
        const newCaps = [];
        const data = res[0].data;
        const dataPrice = res[1].data;
        setName(Object.keys(dataPrice)[0])
        setPrice([Object.values(dataPrice)][0][0].usd)
        data.prices.map((arr) => {
        newDates.push(new Date(arr[0]).getDate())
        newPrices.push(arr[1])
        })
      setCoins({...coins,prices: newPrices,dates: newDates,caps: newCaps})      
}

  useEffect(()=> {
    fechData()
    fechCoinsMarketChart()
  },[])
  return (
    <div className="bg-cyan-900 min-h-screen shadow-xl py-10 px-5">
      <h1 className='text-white text-4xl py-3 text-center font-bold'>Las 10 principales criptomonedas del mercado</h1>
      <p className='text-white text-sm text-center'>
      En este sitio web encontrará los precios actaules de las 10 criptomonedas más importantes del mercado.
      </p>
      <div className='flex py-2 gap-1 flex-wrap justify-center mt-10'>
      {dataCoins && dataCoins.map(item => {
        return <ButtonCoin key={item.id} id={item.id} price={item.current_price} market_cap_rank={item.market_cap_rank} name={item.name} image={item.image} handleClick={fechCoinsMarketChart} />
})}
      </div>
      <div className='py-10 pb-20 m-auto max-w-2xl'>
        <div className='bg-white border rounded-sm items-center px-5'>
        <h2 className='let font-mono py-5 text-2xl font-bold'>{name && name} Precio</h2>
        <h4 className='font-semibold text-slate-500 text-xl '>$ {price && price} USD</h4>
        <LineGraph label={'Price Performance'} labels={coins?.dates} values={coins?.prices} />
        </div>
      </div>
    </div>
  );
}

export default App;
