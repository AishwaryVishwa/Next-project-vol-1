import React from 'react'

export default function CustomInputs({ inputType, name, onChange, label, error={} ,touched ={} }) {
    switch (inputType) {
        case 'formField':
            return <fieldset className='flex flex-col gap-2'>
                <label>{label}</label>
                <input className='border border-cyan-200 h-10 rounded-3xl' name={name} onChange={onChange} />
                {touched[name] && error[name] && <p className='text-red-600  text-sm'>{error[name]}</p>}
            </fieldset>

        default:
            break;
    }
}
