import React from 'react'

function IdType({fieldName,onChange,placeholder,name}) {
    const handleChange = (event) => {
    onChange(event.target.value);
    };
  return (
    <div className='input_selection'>
        <div className='form-group'>
        <span>{fieldName}</span>
        <input name={name} placeholder={placeholder}  className='input-control' type="number"  onChange={handleChange} />
        </div>
        <p className='input_selection_details'>Dial <spana>*346*3*NIN*1138183#</spana>  to generate your vNIN,Note, you can only use the vNIN generated once.</p>
    </div>
  )
}

export default IdType
