import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import PropTypes from 'prop-types';
import Link from '../link/Link';
import { useState } from 'react';

const Navbar = () => {

  const routes = [
    { path: '/', name: 'Home', id: 'home' },
    { path: '/about', name: 'About', id: 'about' },
    { path: '/contact', name: 'Contact', id: 'contact' },
    { path: '/products/:id', name: 'ProductDetail', id: 'product-detail' },
    { path: '/404', name: 'NotFound', id: 'not-found' }
  ];
  
  const [open, setOpen] = useState(false);

  return (
    <nav className='mt-5 max-w-6xl mx-auto text-black bg-yellow-500 p-6'>
     <div className='md:hidden text-2xl' onClick={()=>setOpen(!open)}>
        {
          open === true ? 
          <AiOutlineClose></AiOutlineClose> 
          : <AiOutlineMenu></AiOutlineMenu>
        }
     </div>
      <ul className={`md:flex absolute  duration-1000 md:static bg-yellow-200 px-6 
          
          ${open ? " top-16 " : "-top-60"}`}>
          {
            routes.map(getRoute => 
            <Link
              key={getRoute.id}
              routeInfo={getRoute}>
            </Link>)
          }
      </ul>
    </nav>
    
  
    

    
  );
};

Navbar.propTypes = {
  
};

export default Navbar;








