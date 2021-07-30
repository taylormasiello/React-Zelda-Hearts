import React from 'react'

export default function ({ label, increment, value, maxValue, minValue=0, onNewValue, renderIcon }) {

  return (
    <div className={"MinMaxButton"}>
      {renderIcon()}
      <span>
        <button onClick={() => {
          const newValue = value - increment;
          onNewValue( newValue < minValue ? minValue : newValue )
        }}>
          {MinusIcon}
        </button>
        <button onClick={() => {
          const newValue = value + increment;
          onNewValue(newValue > maxValue ? maxValue : newValue)
        }}>
          {PlusIcon}
        </button>
      </span>
    </div>
  )
}


//FROM: https://icomoon.io/app
const PlusIcon = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512">
    <path d="M496 192h-176v-176c0-8.836-7.164-16-16-16h-96c-8.836 0-16 7.164-16 16v176h-176c-8.836 0-16 7.164-16 16v96c0 8.836 7.164 16 16 16h176v176c0 8.836 7.164 16 16 16h96c8.836 0 16-7.164 16-16v-176h176c8.836 0 16-7.164 16-16v-96c0-8.836-7.164-16-16-16z"/>
  </svg>
);
const MinusIcon = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512">
    <path d="M0 208v96c0 8.836 7.164 16 16 16h480c8.836 0 16-7.164 16-16v-96c0-8.836-7.164-16-16-16h-480c-8.836 0-16 7.164-16 16z" />
  </svg>
);