import axios from "axios";

export const getCoins = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        return response
    } catch (error) {
        console.log(error);
    }
    
}


export const getMarket = async (id = 'bitcoin') => {
    try {
        const response =  await axios.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=zar&days=14&interval=hourly`),
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
        ])
        return response
    } catch (error) {
        console.log(error);
    }
} 