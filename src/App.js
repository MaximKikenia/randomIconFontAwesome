
import { useState, useRef } from 'react';
import './App.css';
import { iconsNames } from './iconsNames';


function App() {
  const [icon, setIcon] = useState(false);
  const refStatus = useRef();


  function getRandomInt() {
    let min = 2
    let max = 1558
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createIcon() {
    refStatus.current.innerHTML = "Загружается...";
    setTimeout(() => {
      setIcon(getRandomInt());
      refStatus.current.innerHTML = "";
    }, 3000);
  }


  return (
    <div className="AppWrapper">
      <div className="App">
        <h1>Генератор иконок FontAwesome</h1>
        <p ref={refStatus}></p>
        <i className={!icon ? iconsNames[getRandomInt()] : iconsNames[icon]}></i><br />
        <button onClick={createIcon} type='button'>Загрузить</button>
      </div>
    </div>
  );
}

export default App;
