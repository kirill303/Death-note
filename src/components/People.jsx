import React from 'react';
import cross from '../img/cross.svg'
export default function People(props) {
   return (
      <li className="people">
         <div className="people__name" >
            {props.name}
         </div>
         <div className="people__delete" id = {props.id}onClick={props.deletePeople}>
            Удалить
         </div>
      </li>
   )
}