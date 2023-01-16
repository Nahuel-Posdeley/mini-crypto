import React from 'react'

const ButtonCoin = ({
    id,
    name,
    image,
    market_cap_rank,
    handleClick,
}) => {
  return (
    <button
        onClick={() => handleClick(id)}
        className='bg-white text-sm text-slate-900 py-3 rounded-lg flex items-center justify-center w-32 focus:bg-slate-400'
        >
        {market_cap_rank} -
        <img
            src={image}
            className='w-4 mx-1'
            alt=''
            />
        {name}
      </button>
  )
}

export default ButtonCoin
