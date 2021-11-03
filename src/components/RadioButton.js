import React from 'react'
import {field, ErrorMessage} from 'formik'

function RadioButton() {
    const {label, name, options, ...rest} = props
  return (
    <div className='form-control'>
        <label>{label}</label>
        <Field name={name} {...rest}>
            {
               ({field}) => {

               }
            }
        </Field>
      
    </div>
  )
}

export default RadioButton
