import React, { useState } from 'react'
import './CulcData.css'

export const CulcData = ({
  reset, 
  tipAmount, 
  total
}) => {

  return (
    <div className='dataWrapper'>
        <div className='dataWrapper-blocks'>
            <div className='dataWrapper-blocks-dataInfo'>
                <div className='dataWrapper-blocks-dataInfo-tipAmount'>
                    <div>
                        <div className='dataWrapper-blocks-dataInfo-tipAmount-firstLine'>Tip Amount</div>
                        <div className='dataWrapper-blocks-dataInfo-tipAmount-secondLine'>/ person</div>
                    </div>
                    <div>
                        <span>${tipAmount.toFixed(2)}</span> 
                    </div>
                </div>
                <div className='dataWrapper-blocks-dataInfo-totalAmount'>
                    <div>
                        <div className='dataWrapper-blocks-dataInfo-totalAmount-firstLine'>Total</div>
                        <div className='dataWrapper-blocks-dataInfo-totalAmount-secondLine'>/ person</div>
                    </div>
                    <div>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className='dataWrapper-blocks-button'>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    </div>
  )
}


