import React, { useReducer, useState } from 'react';

const FormDataComponent = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };


const initialState = {
    name :  "",
    email : "",
    password : ""
};
const reducer = (state, action) => {
    switch(action.type){
        case "FIELD_UPDATE" :
        return {
            ...state,
            [action.payload.field] : action.payload.value
        };
         case "CLEAR" :
        return {
            ...state,
            [action.payload.field] : ""
        };
        case "RESET" :
        return  initialState
        default : 
        state;

    }
}

const [formData, dispatch] = useReducer(reducer, initialState);
console.log(formData);
const handleChange = (e) =>{
    dispatch({
        type : "FIELD_UPDATE",
        payload : {
            field : e.target.name,
            value : e.target.value
        }
    })
   
};
const handleClear = (field) =>{
    dispatch({
        type : "CLEAR",
        payload : {
            field  
             
        }
    })
   
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <button onClick={() =>handleClear("name")}>CLear</button>

      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button  onClick={() =>handleClear("email")}>CLear</button>
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button  onClick={() =>handleClear("password")}>CLear</button>

      </div>

      <button type="submit" onClick={() => dispatch({type : "RESET"})}>RESET</button>
      <button type="submit">Submit</button>

    </form>
  );
};

export default FormDataComponent;
