import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import dn from './img/dn.jpg'
import Peoples from "./components/Peoples";
import AddPeople from "./components/AddPeople";
function App() {
  const [peoples, setPeoples] = useState(
    JSON.parse(localStorage.getItem('peoples')) || []
  );

  function deletePeople(e) {
    let index = e.target.id.split('_')[1];
    let g = peoples;
    g = g.filter((e, i) => i !== +index);
    setPeoples(g);
  }

  useEffect(() => {
    localStorage.setItem('peoples', JSON.stringify(peoples));
  }, [peoples])

  return (
    <>
      <main className="container note">
        <div className="dn__logo"><img src={dn} alt="#" /></div>
        <AddPeople setPeoples={setPeoples} peoples={peoples} />
        <Peoples peoples={peoples} deletePeople={deletePeople} />
      </main>
    </>
  );
}

export default App;
