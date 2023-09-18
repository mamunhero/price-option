import { AiFillCheckCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Feature = ({featureInfo}) => {
  return (
    <div>
      <p className='flex items-center'> 
        <AiFillCheckCircle className='text-green-400 mr-2'></AiFillCheckCircle>
        {featureInfo}
      </p>
    </div>
  );
};

Feature.propTypes = {
  
};

export default Feature;