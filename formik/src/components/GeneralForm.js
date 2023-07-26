import React from 'react'
import {useFormik} from 'formik'
import { basicSchema } from '../schemas';

const onSubmit = async(values,actions) => {
     await new Promise((resolve)=>{
        setTimeout(resolve, 1000);
     });
     actions.resetForm();
};
function GeneralForm() {
    const {values,errors,isSubmitting,handleChange,handleSubmit} = useFormik({
    initialValues: {
     email: '',
     age:'',
     password: '',
     confirmPassword:'',
   },
   validationSchema:basicSchema,
   onSubmit,
    });
    
  return (
    <form onSubmit={handleSubmit}>
       <div>
         <label>E-Mail</label>
         <input type="email"
         value={values.email}
         onChange={handleChange}
         id="email"
         placeholder='Mail Adresinizi Giriniz'
         className={errors.email ? 'input-error' : ''}
         />
        {errors.email && <p className='error'>{errors.email}</p>}
       </div> 
       <div>
         <label>Yaş</label>
         <input type="number"
         value={values.age}
         onChange={handleChange}
         id="age"
         placeholder='Yaşınızı Giriniz'
         className={errors.age ? 'input-error' : ''}
         />
         {errors.age && <p className='error'>{errors.age}</p>}           
       </div>       
       <div>
         <label>Şifre</label>
         <input type="password"
         value={values.password}
         onChange={handleChange}
         id="password"
         placeholder='Şifrenizi  Giriniz'
         className={errors.password ? 'input-error' : ''}
         />
         {errors.password && <p className='error'>{errors.password}</p>}
       </div>       
       <div>
         <label>Şifre Tekrar</label>
         <input type="password"
         value={values.confirmPassword}
         onChange={handleChange}
         id="confirmPassword"
         placeholder='Şifrenizi Tekrar Giriniz'
         className={errors.confirmPassword ? 'input-error' : ''}
         />
         {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
       </div>
         <button disabled={isSubmitting} type='submit'>Kaydet</button>                
    </form>
  )
}

export default GeneralForm