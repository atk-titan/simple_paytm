import React from 'react';

const InputBox = (props) => {
  return (
    <div className='w-full m-0.5'>
        <div className={props.for=='dash'?'text-xl font-semibold':'text-sm text-left font-medium pt-1.5'}>{props.label}</div>
        <input className='w-full mt-1 p-1 text-2sm border-1 border-gray-300 rounded-sm' type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
    </div>
  );
}

export default InputBox;