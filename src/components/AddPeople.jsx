import React, { useState } from 'react';

export default function AddPeople(props) {
   const [input, setInput] = useState(localStorage.getItem('input')||'');
   const { peoples, setPeoples } = props;

   function apdateInput(e) {
      setInput(e.target.value);
      localStorage.setItem('input', input);
   }

   function apdatePeoples() {
      input && setPeoples([...peoples, { name: input }]);
   }
   function Enter(e) {
      if(e.keyCode === 13) apdatePeoples();
   }
   return (
      <div className="input-group mb-3">
         <input
            type="text"
            className="form-control add-input"
            placeholder="Добавьте нового:)"
            value={input}
            onChange={apdateInput}
            onKeyDown={Enter}
         />
         <button type="button" className="btn btn-dark" onClick={apdatePeoples}>Добавить</button>
      </div>
   )
}