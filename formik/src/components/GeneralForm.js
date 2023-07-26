import React from 'react'
import {useFormik} from 'formik'
function GeneralForm() {
  return (
    <form>
       <div>
         <label>E-Mail</label>
         <input type="email"
         value={}
         id="email"
         placeholder='Mail Adresinizi Giriniz'
         />

       </div>             
    </form>
  )
}

export default GeneralForm