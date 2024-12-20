import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')({
  position: 'relative',
  borderRadius: '15px', 
  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)', 
    border: ' 1px solid grey ',
  },
  marginLeft: 0,
  width: '5rem',
  '@media (min-width:600px)': { 
    marginLeft: '8px', 
    width: '15rem',
    height:'35px',
  },
});

const SearchIconWrapper = styled('div')({
  padding: '0 16px', 
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});


const StyledInputBase = styled(InputBase)({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '0.6rem 0.6rem 0.6rem 0rem', 
    paddingLeft: '3rem',
    transition: 'width 0.3s',
    fontSize: '1.1rem', 
    width: '13rem', 
    '&:focus': {
      width: '13rem', 
    },
  },
});

function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

export default SearchBar;
