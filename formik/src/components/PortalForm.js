import React from 'react'
import {  Form, Formik } from 'formik';
import CustomInput from './CustomInput';


const onSubmit = async(values,actions) => {
await new Promise((resolve)=>{
    setTimeout(resolve, 1000);
});
     actions.resetForm();
};


function PortalForm() {
  return (
    <>
    <Formik
       initialValues={{ username: '', universty: '', isAccepted: false,}}
       onSubmit={onSubmit}
     >
       {()=> (
         <Form>
         <CustomInput
         label="Kullanıcı Adı"
         name="username"
         type="text"
         placeholder="Kullanıcı Adınızı Giriniz"
         />
         </Form>
       )}
     </Formik>
     </>
  )
}

export default PortalForm