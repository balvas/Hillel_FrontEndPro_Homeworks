import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPerson, clearPerson } from './store/slices';

const MyComponent = () => {
   const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/');
   const person = useSelector(state => state.person);
   const dispatch = useDispatch();




   const handleFormSubmit = event => {
      event.preventDefault();
      fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
            dispatch(setPerson(data));
         });
   };



   const handleInputChange = event => {
      setApiUrl(event.target.value);
   };

   const handleClearButtonClick = () => {
      dispatch(clearPerson());
      setApiUrl('https://swapi.dev/api/');
   };



   return (
      <div>


         <form onSubmit={handleFormSubmit} className="input-group mb-3 js--swapi_form">

            <input
               type="text"
               name="url"
               className="form-control js--swapi_input"
               id="basic-url"
               placeholder="/people/1/"
               aria-describedby="basic-addon3"
               value={apiUrl}
               onChange={handleInputChange}
            />
            <button className="btn btn-primary" type="submit" id="button-addon2">Get info</button>
         </form>

         {person ? (
            <div>
               <h2>{person.name}</h2>
               <pre>
                  {JSON.stringify(person, null, 2)}
               </pre>
               <button className="btn btn-primary" onClick={handleClearButtonClick}>Clear</button>

            </div>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default MyComponent;
