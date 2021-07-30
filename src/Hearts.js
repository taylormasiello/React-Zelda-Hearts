import React from 'react';
import {Heart} from './icons';

// Array(maxHearts).fill() - creates a new array with this many members to it, all will start undefined, .fill() parameters is starting value
// .map((_, index)) - We don't need the empty value that comes first in map, which is normally whatever the value of the thing is; we're just interested in the index of which one we're on right now

export default function Hearts({ hearts, maxHearts}) {
  
  const heartIcons = Array(maxHearts).fill().map((_, index) => {
    
    let fill = 0;
    if (hearts >= index+1) {
      fill = 1;
    } else if (index+1 - hearts === 0.5) {
      fill = 0.5;
    }
    
    return (
      <Heart key={index} fill={fill}/>
    )
  })

  return (
    <div className={"HeartsGrid"}>
      {heartIcons}
    </div>
  )
}
