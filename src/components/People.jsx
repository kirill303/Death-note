import React from 'react';

export default function People(props) {
   return (
      <li className="people">
         <div className="people__name" >
            {props.name}
         </div>
      </li>
   )
}