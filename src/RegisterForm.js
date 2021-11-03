import React from 'react';
import {useFormik} from 'formik';




export function RegisterForm (){

    const validate = values => {
        const errors = {}

        if(!values.email){
            errors.email = 'Required'
        }else if(values.email.length < 4){
            errors.email = 'Must be 5 characters or more'
        }

        if(!values.password){
            errors.password = 'Required'
        }else if(values.password.length < 8){
            errors.password = 'Must be at least 8 characters or more'
        }else if (values.password === '12345678'){
            errors.password = 'Must not be 12345678 !!!'
        }

        if(!values.repassword){
            errors.repassword = 'Required'
        }else if(values.repassword !== values.password){
            errors.repassword ='Second password does not match password'
        }

        return errors
    }
    
    const formik = useFormik({
    initialValues:{
        email: '', 
        password: '', 
        repassword: ''
    }, 
    validate,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
    }
})
    return (
        <div>
            <h1>Register </h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id='email' name='email'/>
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>: null}
                <label htmlFor="password">Password</label>
                <input type="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} id='password' name='password'/>
                {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>: null}
                <label htmlFor="repassword">Password Again</label>
                <input type="password" onChange={formik.handleChange} value={formik.values.repassword} onBlur={formik.handleBlur} id='repassword' name='repassword'/>
                {formik.touched.repassword && formik.errors.repassword ? <div className="error">{formik.errors.repassword}</div>: null}

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;