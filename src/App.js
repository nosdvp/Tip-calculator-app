import './App.css';
import titleIMG from './img/logo.svg'
import IncomeData from './component/IncomeData/IncomeData'
import { CulcData } from './component/CulcData/CulcData'
import { useState } from 'react';

function App() {

  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [customTip, setCustomTip] = useState('');

  const reset = () => {
  setBill('');
  setPeople('');
  setCustomTip('');
  setTipAmount(0);
  setTotalAmount(0);
};

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='titleImg'>
          <img src={titleIMG}/>
        </div>
        <div className='contentBlock'>

          <div className='content-IncomeData'>
            <IncomeData
              bill={bill}
              setBill={setBill}
              people={people}
              setPeople={setPeople}
              customTip={customTip}
              setCustomTip={setCustomTip}
              setTipAmount={setTipAmount}
              setTotalAmount={setTotalAmount}
            />
          </div>
            
          <div className='content-BlockCulc'>
            <CulcData
              tipAmount={tipAmount}
              total={totalAmount}
              reset={reset}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
