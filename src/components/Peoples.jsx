import React from 'react';
import People from './People';
import ruck from '../img/ruck.gif'
export default function Peoples(props) {
   const peoples = props.peoples;
   return (
      <ul className="peoples fs-5 badge ">
         {peoples[0] ? peoples.map((e, i) => {
            return <People name={e.name} key={`people ${i}`} deletePeople={props.deletePeople} id={`people_${i}`} />
         }) :
            <div>
               <p>У вас пока ничего нет, запишите сюда человека:)</p>
               <div className="loading">
                  <img src={ruck} alt="" />
               </div>
            </div>}
      </ul>
   )
}