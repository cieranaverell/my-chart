import React from 'react';
// import React, { Component} from 'react;'
import {useFormik} from 'formik';

export function BehaviourChart (){

    const validate = values => {
        const errors = {}

        if(!values.HealthAndCareNo){
            errors.HealthAndCareNo = 'Required'
        }else if(values.HealthAndCareNo.length < 4){
            errors.HealthAndCareNo = 'Must be 5 characters or more'
        }

       

        return errors
    }
    

    const formik = useFormik({
    initialValues:{
        Id: '',
        HealthAndCareNo: '',
        Before: "settled", 
        during:"hitting", 
        intervention: "singing", 
        after: "settled", 
    }, 
    validate,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
    }

    })

    return (
        <div>
            <h1>Behaviour Chart</h1>
            <div className="BehaviourChart">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="Id">Form Id</label>
                <input onChange={formik.handleChange} value={formik.values.Id} onBlur={formik.handleBlur} id='Id' name='Id'/>

                <label htmlFor="HealthAndCareNo">Health and Care Number</label>
                <input onChange={formik.handleChange} value={formik.values.HealthAndCareNo} onBlur={formik.handleBlur} id='HealthAndCareNo' name='HealthAndCareNo'/>


                {/* <input onChange={formik.handleChange} value={formik.values.Before} onBlur={formik.handleBlur} id='Before' name='Before'/>  */}
                <label htmlFor="Before">What happened before event? Please select One.</label>
                {/* <input onChange={formik.handleChange} value={formik.values.Before} onBlur={formik.handleBlur} id='Before' name='Before'/>  */}
                <select className="form-style">
                    <option value="settled">Patient was settled</option>
                    <option value="afterTea">Patient had just had tea</option>
                    <option value="assistedToDress">Patient had just been assisted to wash and dress</option>
                    <option value="assistedForBed">Patient had just been assisted to bed</option>
                 </select>   

                
                <label htmlFor="during">What happened during the event? Please select One.</label>
                {/* <input onChange={formik.handleChange} value={formik.values.during} onBlur={formik.handleBlur} id='during' name='during'/> */}
                <select className="Form-style">
                    <option value="hitting">Patient was hitting out</option>
                    <option value="screaming">Patient was Screaming</option>
                    <option value="crying">Patient was crying</option>
                    <option value="agitated">Patient was agitated</option>
                 </select> 
               
                <label htmlFor="intervention">What intervention was used? Please select One.</label>
                {/* <input onChange={formik.handleChange} value={formik.values.intervention} onBlur={formik.handleBlur} id='intervention' name='intervention'/> */}
                <select className="Form-style">
                    <option value="singing">Sang favorite song</option>
                    <option value="distractionFamily">Spoke about family to distract</option>
                    <option value="drawing">Encouraged patient to draw or read</option>
                    <option value="tvOrRadio">Turned on TV or radio</option>
                 </select> 
               
               <label htmlFor="after">How was the patient after the intervention? Please select One.</label>
                {/* <input onChange={formik.handleChange} value={formik.values.after} onBlur={formik.handleBlur} id='after' name='after'/> */}
               <select className="Form-style">
                    <option value="settled">Patient was settled</option>
                    <option value="noChange">Patient's demeanor was unchanged</option>
                    <option value="lessAgitated">Patient was less Agitated</option>
                    <option value="tearful">Patient was tearful</option>
                 </select> 

                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}
export default BehaviourChart;
