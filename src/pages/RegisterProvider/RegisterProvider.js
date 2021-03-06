import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const RegisterProvider = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/provider', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/provider')
                }
            })
    }

    const validations = yup.object().shape({
        name: yup.string().required(),
        cnpj: yup.string().required(),
        endereco: yup.string().required(),
        telefone: yup.string().required(),
    })
    return (
        <>
            <h1>Register</h1>
            <p>Preencha os campos para se registrar</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >

                <Form className="Login">
                    <div className="Login-Group">
                        <p>Nome</p>
                        <Field
                            name="name"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="name"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <p>CNPJ</p>
                        <Field
                            name="cnpj"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="cnpj"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <p>Endereço</p>
                        <Field
                            name="endereco"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="endereco"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <p>Telefone</p>
                        <Field
                            name="telefone"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="telefone"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Register</button>
                </Form>
            </Formik>
        </>
    )
}

export default RegisterProvider
