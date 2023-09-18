
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Price from '../price/Price';

const PriceOption = () => {

  const [prices, setPrices] = useState([]);
  useEffect( ()=>{
    fetch("../../../src/assets/price-option.json")
    .then(response=> response.json())
    .then(data=>setPrices(data))
  },[])
  return (
    <div className='m-12'>
      <h2 className='mt-5 max-w-6xl mx-auto text-5xl mb-5'>price in town</h2>
      <div className=''>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            prices.map(getPrice=> 
            <Price 
              key={getPrice.id} 
              priceInfo={getPrice}
              >
            </Price>)
          }
        </div>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  
};

export default PriceOption;


