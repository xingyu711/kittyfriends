import React from 'react';

const SearchBox = ( {searchChange} ) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 bg-transparent ba bw1 b--black-10' 
        type='search' 
        placeholder='search kitties' 
        onChange={searchChange} 
      />
    </div>
  );
}

export default SearchBox;