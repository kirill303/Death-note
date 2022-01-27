import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import dn from './img/dn.jpg'
import People from "./components/People";
import Peoples from "./components/Peoples";
import AddPeople from "./components/AddPeople";
function App() {
  const [peoples, setPeoples] = useState([]);
  return (
    <>
      <main className="container note">
        <div className="dn__logo"><img src={dn} alt="#" /></div>
        <AddPeople/>
        <Peoples peoples={peoples} />
      </main>
    </>
  );
}

export default App;
