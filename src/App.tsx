import React from 'react';
import s from './App.module.css';
import {Button} from './Components/Button'

function App() {
    let a = {
        name: "Denis",
        age: 29,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    };
    console.log(a.address.city);
  return (
      <div className={s.start}>
        <div className={s.container}>
            Hello, samurai! Let's go!
            <Button/>
        </div>
      </div>
  );
}

export default App;
