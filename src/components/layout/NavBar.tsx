import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export const NavBar=()=>{
      return(
            <nav className='navbar  sticky-top mb-5'>
            <Link
                  to='/'
                  className='navbar-brand mb-0 mx-auto poke-font'
                  style={{ fontSize: '30px' }}
            >
                  Pokedex
            </Link>
            {!window.location.pathname.startsWith('/pokemon') && (
                  <form action='' className='form-inline'>
                       <h1>SearchPokemons </h1>
                        <h1>RegionalSelector </h1>
                  </form>
            )}
      </nav>
      )
}
export default withRouter(NavBar);