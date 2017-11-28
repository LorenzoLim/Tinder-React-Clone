import React from 'react';

function Form({ firstName, lastName, imageURL, onChange}){
  return(
    <form>
      First name:
      <input value={ firstName } onChange={ onChange } name="firstName"/><br />
      Last name:
      <input value={ lastName } onChange={ onChange } name="lastName" /><br />
      Image URL:
      <input value={ imageURL } onChange={ onChange } name="imageURL" /><br />
    </form>
  )
}

export default Form;
