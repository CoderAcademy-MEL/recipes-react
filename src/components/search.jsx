import React from 'react';
import Form from './form';

const Search = (props) => {
  return (
    <Form searchFunc={props.searchFunc} />
  );
};

export default Search;