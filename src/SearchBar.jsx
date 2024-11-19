import { useState, useEffect } from 'react';
import censysLogo from '/censys-2022.svg';
import './global.css';

function NavBar({
  value,
  setValue,
  searchCensys,
  query,
  setQuery,
  url,
  setUrl,
}) {
  useEffect(() => {
    setValue(value);
    setQuery(`?q=${value}`);
    setUrl(`https://search.censys.io/api/v2/hosts/search${query}`);
  }, [value]);

  useEffect(() => {
    setQuery(`?q=${value}`);
    setUrl(`https://search.censys.io/api/v2/hosts/search${query}`);
  }, [query]);

  return (
    <>
      <div className='navBar'>
        <img src={censysLogo} className='logo' alt='Censys logo' />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchCensys();
            }}
          >
            <input
              className='searchInput'
              placeholder='Search'
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setQuery(`?q=${value}`);
                setUrl(`https://search.censys.io/api/v2/hosts/search${query}`);
              }}
            />
            <button className='button'>
              <b>Search</b>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NavBar;
