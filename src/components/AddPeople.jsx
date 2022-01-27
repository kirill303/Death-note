import React from 'react';

export default function AddPeople(props) {
   return (
      <div className="input-group mb-3">
         <input type="text" className="form-control add-input" placeholder="Добавьте нового:)" aria-label="Recipient's username" aria-describedby="basic-addon2" />
         <button type="button" class="btn btn-dark">Добавить</button>
      </div>
   )
}