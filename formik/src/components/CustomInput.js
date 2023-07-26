import React from 'react'
import { useField } from 'formik';


function CustomInput({label,...props}) {
  const [field,meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input/>
    </>
  )
}

export default CustomInput