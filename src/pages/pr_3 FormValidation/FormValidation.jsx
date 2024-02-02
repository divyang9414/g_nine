import React, { useState } from 'react'

const FormValidation = () => {
    const [input, setInput] = useState()
    const [display, setDisplay] = useState()
    const [errors, setError] = useState()
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setDisplay(input)
        setError(validateForm())
    }

    const validateForm = () => {
        let error = {}
        console.log(input.name);
        if (input.name === "" || input.name === null || input.name === undefined) {
            error.name = "Bhai, Name kon dalega, Name add kar"
        }
        if (input.email === "" || input.email === null || input.email === undefined) {
            error.email = "Bhai, Email bhi add kar de"
        }
        if (input.password === "" || input.password === null || input.password === undefined) {
            error.password = "Yarrrrr, Password bhi daaalllll *****"
        }
        return error
    }

    return (
        <div className='bg-secondary py-5'>
            <center>
                <div className="w-50 bg-white py-5 rounded-4 shadow">
                    <h1>Form Validation</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder='Enter your name' onChange={handleChange} /> <br />
                        <label htmlFor="">{errors ? errors.name : ''}</label><br />
                        <input type="email" name="email" placeholder='Enter your Email_ID' onChange={handleChange} /> <br />
                        <label htmlFor="">{errors ? errors.email : ''}</label><br />
                        <input type="password" name="password" placeholder='Enter your Password' onChange={handleChange} /> <br />
                        <label htmlFor="">{errors ? errors.password : ''}</label><br />
                        <button className='btn btn-primary btn-lg w-75'>Submit Data</button>
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>: &nbsp;&nbsp; {display ? display.name : ''}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>: &nbsp;&nbsp; {display ? display.email : ''}</td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td>: &nbsp;&nbsp; {display ? display.password : ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    )
}

export default FormValidation
