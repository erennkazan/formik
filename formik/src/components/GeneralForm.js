import React from 'react'
import {useFormik} from 'formik'
function GeneralForm() {
    const {values,errors,handleChange,handleSubmit} = useFormik({
    initialValues: {
     email: '',
     age:'',
     password: '',
     confirmPassword:'',
   },
    });
    
  return (
    <form>
       <div>
         <label>E-Mail</label>
         <input type="email"
         value={values.email}
         onChange={handleChange}
         id="email"
         placeholder='Mail Adresinizi Giriniz'
         />

       </div> 
       <div>
         <label>Yaş</label>
         <input type="number"
         value={values.age}
         onChange={handleChange}
         id="age"
         placeholder='Yaşınızı Giriniz'
         />

       </div>       
       <div>
         <label>Şifre</label>
         <input type="password"
         value={values.password}
         onChange={handleChange}
         id="password"
         placeholder='Şifrenizi  Giriniz'
         />

       </div>       
       <div>
         <label>Şifre Tekrar</label>
         <input type="password"
         value={values.confirmPassword}
         onChange={handleChange}
         id="confirmPassword"
         placeholder='Şifrenizi Tekrar Giriniz'
         />

       </div>
         <button type='submit'>Kaydet</button>                
    </form>
  )
}

export default GeneralForm