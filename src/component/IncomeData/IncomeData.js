import React, { useState } from 'react';
import './IncomeData.css';
import dollar from '../../img/icon-dollar.svg';
import persom from '../../img/icon-person.svg';

const IncomeData = ({
  bill,
  setBill,
  people,
  setPeople,
  customTip,
  setCustomTip,
  setTipAmount,
  setTotalAmount
}) => {

  const [messErrorPeople, setMessErrorPeople] = useState(false);
  const [peopleRequired, setPeopleRequired] = useState(false);
  const [messErrorBill, setMessErrorBill] = useState(false);

  const checkValidAmount = (e) => {
    const value = e.target.value;
    setBill(value);

    if (value === '0') {
      setMessErrorBill(true);
    } else {
      setMessErrorBill(false);
    }
  };

  const checkValidPeople = (e) => {
    const value = e.target.value;
    setPeople(value);

    if (value === '0') {
      setMessErrorPeople(true);
    } else {
      setMessErrorPeople(false);
    }

    if (value !== '') {
      setPeopleRequired(false);
    }
  };

  const calcTip = (tip) => {
    if (people === '') {
      setPeopleRequired(true);
      return;
    }

    if (Number(people) === 0) {
      setMessErrorPeople(true);
      return;
    }

    setPeopleRequired(false);
    setMessErrorPeople(false);

    const percent = tip / 100;

    const tipPerPerson =
      (Number(bill) * percent) / Number(people);

    const totalPerPerson =
      Number(bill) / Number(people) + tipPerPerson;

    setTipAmount(tipPerPerson);
    setTotalAmount(totalPerPerson);
  };

  return (
    <div className='IncomeData-wrapper'>
      <div className='IncomeData-bill'>
        <div className='IncomeData-bill-blockMess'>
          <div className='IncomeData-bill-title'>Bill</div>
          <div className='IncomeData-bill-text-errMess'>
            {messErrorBill ? 'Enter amount bill' : ''}
          </div>
        </div>

        <div className={messErrorBill ? 'IncomeData-bill-blockInputData-error' : 'IncomeData-bill-blockInputData'}>
          <div className='IncomeData-bill-blockInputData-blockImg'>
            <img className='IncomeData-bill-blockInputData-blockImg-img' src={dollar} alt=""/>
          </div>

          <div>
            <input
              value={bill}
              type='number'
              onChange={checkValidAmount}
              placeholder='0.00'
              className='IncomeData-bill-blockInputData-input'
            />
          </div>
        </div>
      </div>

      <div className='IncomeData-tip'>
        <div className='IncomeData-tip-text'>Select Tip %</div>

        <div className='IncomeData-tip-text-blockTip'>
          <div className='IncomeData-tip-text-blockTip-tips'>
            <div className='IncomeData-tip-text-blockTip-tips-buttons' onClick={() => calcTip(5)}>5%</div>
            <div className='IncomeData-tip-text-blockTip-tips-buttons' onClick={() => calcTip(10)}>10%</div>
            <div className='IncomeData-tip-text-blockTip-tips-buttons' onClick={() => calcTip(15)}>15%</div>
          </div>

          <div className='IncomeData-tip-text-blockTip-tips'>
            <div className='IncomeData-tip-text-blockTip-tips-buttonsSecondLine' onClick={() => calcTip(25)}>25%</div>
            <div className='IncomeData-tip-text-blockTip-tips-buttonsSecondLine' onClick={() => calcTip(50)}>50%</div>
            <div className='IncomeData-tip-text-blockTip-tips-inputTip'>
              <input
                className='IncomeData-tip-text-blockTip-tips-inputTip-input'
                placeholder='Tip'
                type='number'
                value={customTip}
                onChange={(e) => {
                  const value = e.target.value;
                  setCustomTip(value);
                  calcTip(Number(value));
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='IncomeData-numOfPeople'>
        <div className='IncomeData-numOfPeople-blockMess'>
          <div className='IncomeData-numOfPeople-text'>Number of People</div>
          <div className='IncomeData-numOfPeople-text-errMess'>{messErrorPeople ? "Can't be zero" : peopleRequired ? "First enter count of people" : ""}
</div>
        </div>

        <div className={messErrorPeople || peopleRequired ? 'IncomeData-numOfPeople-blockInputData-error' : 'IncomeData-numOfPeople-blockInputData'}>
          <div className='IncomeData-numOfPeople-blockInputData-blockImg'>
            <img className='IncomeData-numOfPeople-blockInputData-blockImg-img' src={persom} alt=""/>
          </div>
          <div>
            <input
              value={people}
              type='number'
              onChange={checkValidPeople}
              placeholder='0'
              className='IncomeData-numOfPeople-blockInputData-input'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeData;