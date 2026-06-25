import React, { useState } from 'react'
import './IncomeData.css'
import dollar from '../../img/icon-dollar.svg'
import persom from '../../img/icon-person.svg'

const IncomeData = () => {

  const [messErrorBill, setMessErrorBill] = useState(false);
  const [messErrorPeople, setMessErrorPeople] = useState(false);
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState(0)
  

  const checkValidAmount = (e) => {
    const value = e.target.value
    setBill(value)

    if(value === '0'){
      setMessErrorBill(true)
    }else{
      setMessErrorBill(false)
    }
  }

  const checkValidPeople = (e) => {
    const value = e.target.value;
    setPeople(value);

    if(value === '0'){
      setMessErrorPeople(true)
    }else{
      setMessErrorPeople(false)
    }
  }

  return (
    <div className='IncomeData-wrapper'>
      <div className='IncomeData-bill'>
        <div className='IncomeData-bill-blockMess'>
          <div className='IncomeData-bill-title'>Bill</div>
          <div className='IncomeData-bill-text-errMess'>{messErrorBill ? `Enter amount bill` : '' }</div>
        </div>
        <div className={messErrorBill ? 'IncomeData-bill-blockInputData-error' : 'IncomeData-bill-blockInputData'}>
          <div className='IncomeData-bill-blockInputData-blockImg'>
            <img className='IncomeData-bill-blockInputData-blockImg-img' src={dollar}></img>
          </div>
          <div>
            <input
              value={bill}
              type='number'
              onChange={checkValidAmount}
              placeholder='0.00'
              className='IncomeData-bill-blockInputData-input'
            ></input>
          </div>
        </div>
      </div>
      <div className='IncomeData-tip'>
        <div className='IncomeData-tip-text'>Select Tip %</div>
        <div className='IncomeData-tip-text-blockTip'>
          <div className='IncomeData-tip-text-blockTip-tips'>
            <div className='IncomeData-tip-text-blockTip-tips-buttons'>5%</div>
            <div className='IncomeData-tip-text-blockTip-tips-buttons'>10%</div>
            <div className='IncomeData-tip-text-blockTip-tips-buttons'>15%</div>
          </div>
          <div className='IncomeData-tip-text-blockTip-tips'>
            <div className='IncomeData-tip-text-blockTip-tips-buttonsSecondLine'>25%</div>
            <div className='IncomeData-tip-text-blockTip-tips-buttonsSecondLine'>50%</div>
            <div className='IncomeData-tip-text-blockTip-tips-inputTip'>
              <input
                className='IncomeData-tip-text-blockTip-tips-inputTip-input'
                placeholder='Tip'
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className='IncomeData-numOfPeople'>
        <div className='IncomeData-numOfPeople-blockMess'>
          <div className='IncomeData-numOfPeople-text'>Number of People</div>
          <div className='IncomeData-numOfPeople-text-errMess'>{messErrorPeople ? `Can't be zero` : '' }</div>
        </div>
        <div className={messErrorPeople ? 'IncomeData-numOfPeople-blockInputData-error' : 'IncomeData-numOfPeople-blockInputData'}>
          <div className='IncomeData-numOfPeople-blockInputData-blockImg'>
            <img className='IncomeData-numOfPeople-blockInputData-blockImg-img' src={persom}></img>
          </div>
          <div>
            <input
              value={people}
              type='number'
              onChange={checkValidPeople}
              placeholder='0'
              className='IncomeData-numOfPeople-blockInputData-input'
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeData