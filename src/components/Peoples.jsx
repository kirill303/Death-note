import React from 'react';
import People from './People';

export default function Peoples(props) {
   const peoples = props.peoples;
   return (
      <ul className="peoples fs-5 badge ">
         {peoples[0] ? peoples.map(e => {
            return <People name={e.name} />
         }) : <p>Вы можете добавить нового :)</p>}
      </ul>
   )
}