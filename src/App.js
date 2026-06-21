import './App.css';
import { useState } from 'react';
import { ReactComponent as DollarIcon } from './img/icon-dollar.svg';
import imgHuman from './img/icon-person.svg'

function App() {

  const [bill, setBill] = useState();
  const [selectTipn, setSelectTip] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const culc = () =>{
    
  }

  return (
    <div className="App">
      <div className='mainContainer'>
        <div className='mainContainer_title'></div>
        <div className='mainContainer_filling'>
          <div className='mainContainer_filling_content'>
            <div className='mainContainer_filling_content_data'></div>
            <div className='mainContainer_filling_content_calc'>
              <div className='mainContainer_filling_content_calc_finalRes'>
                <div className='mainContainer_filling_content_calc_finalRes_tipAmount'>
                  <div className='mainContainer_filling_content_calc_finalRes_tipAmount_description'>
                    <div style={{color:'white', fontSize: '20px', fontWeight: 'bold'}}>Tip Amount</div>
                    <div style={{color:'hsl(184, 14%, 56%)', fontSize: '16px', fontWeight: 'bold'}}>/ person</div>
                  </div>
                  <div className='mainContainer_filling_content_calc_finalRes_tipAmount_amount'>
                    <span style={{fontSize:'55px', color:'#24c7b0', fontWeight:'bold'}}>$</span> <span style={{fontWeight:'bold', fontSize: '50px', color: '#24c7b0'}}>{tipAmount.toFixed(2)}</span>
                  </div>
                </div>
                <div className='mainContainer_filling_content_calc_finalRes_total'>
                  <div className='mainContainer_filling_content_calc_finalRes_total_description'>
                    <div style={{color:'white', fontSize: '20px', fontWeight: 'bold'}}>Total</div>
                    <div style={{color:'hsl(184, 14%, 56%)', fontSize: '16px', fontWeight: 'bold'}}>/ person</div>
                  </div>
                  <div className='mainContainer_filling_content_calc_finalRes_total_amount'>
                    <span style={{fontSize:'55px', color:'#24c7b0', fontWeight:'bold', marginTop:'5px'}}>$</span> <span style={{fontWeight:'bold', fontSize: '50px', color: '#24c7b0', marginTop:'10px'}}>{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className='mainContainer_filling_content_calc_button'>
                <button className='resetButton' onClick={culc}>RESET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
