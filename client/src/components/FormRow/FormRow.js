import React from 'react'
import { Div, FormLabel, Input } from "./FormRowStyle"
const FormRow = ({ labelText, htmlFor, ...otherProps }) => {
 return (
  <Div>
   <Input {...otherProps} />
   <FormLabel htmlFor={htmlFor} shrink={otherProps.value.length
   }>{labelText}</FormLabel>
  </Div>
 )
}

export default FormRow