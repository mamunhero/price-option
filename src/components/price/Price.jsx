
import PropTypes from 'prop-types';
import Feature from '../feature/Feature';

const Price = ({priceInfo}) => {
  const {name, price, features} = priceInfo
  return (
    <div className='max-w-6xl mx-auto bg-blue-500 flex flex-col rounded-md p-4 text-white w-80 h-96'>
      
      <h2 className='text-center'>
        <span className='text-4xl font-extrabold'>{price}</span>
        <span className='text-2xl'>/mon</span>
      </h2>
      <h3 className='text-xl text-center my-8'>{name}</h3>
      <div className='ml-6 flex-grow'>
        {
            features.map((getFeature, index) => <Feature key={index} featureInfo={getFeature}></Feature>)
        }
      </div>
      <button className='mt-12 bg-green-600 w-full font-bold py-2 rounded-lg hover:bg-red-500'>Buy Now</button>
    </div>
  );
};

Price.propTypes = {
  
};

export default Price;



