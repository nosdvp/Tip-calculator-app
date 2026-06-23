import './App.css';
import titleIMG from './img/logo.svg'
import IncomeData from './component/IncomeData/IncomeData'
import { CulcData } from './component/CulcData/CulcData'

function App() {

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='titleImg'>
          <img src={titleIMG}/>
        </div>
        <div className='contentBlock'>

          <div className='content-IncomeData'>
            <IncomeData/>
          </div>
            
          <div className='content-BlockCulc'>
            <CulcData/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
