import React, {useState} from "react";
import Banner from './components/Banner/Banner';

function App() {
  const [counter, setcounter] = useState(0);
  
  return (
    <div>
      <Banner bURL="https://img-lcwaikiki.mncdn.com/Resource/Images/Other/_web_banner_ust_bant.gif" bAlt="top banner" />
      <Banner bURL="https://dummyimage.com/1833x802" bAlt="Slider" />
      <div>
        {counter}
      </div>
      <button
      onClick={() => {setcounter(counter + 1)}}>
        add
      </button>
      <hr/>
      <a href="/privacy">GIZLILIK</a>
    </div>
  )
}

export default App;
