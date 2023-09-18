
import PropTypes from 'prop-types';

const Link = ({routeInfo}) => {
  return (
    <li className='mr-10 hover:bg-red-400 px-6 '>
      <a href="">{routeInfo.name}</a>
    </li>
  );
};

Link.propTypes = {
  routeInfo:PropTypes.object,
};

export default Link;




