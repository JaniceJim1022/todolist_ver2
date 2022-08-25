import { doesNotMatch } from 'assert';
import React, { useState } from 'react'
import { Item } from './model';

export default function ToDoItem(props: {
    task2: Item;
    onToggleComplete?: () => void;
    }) {
        

  return (
    <>
    {
      <div>
      <span>{props.task2.task}</span>
      {props.task2.completed?"": <button onClick={props.onToggleComplete}>Complete</button>}
    </div>  
    }
    
    </>
  )
}
