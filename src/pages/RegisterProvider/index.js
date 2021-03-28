import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const RegisterProvider = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/provider/register', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <h1>Registrar Fornecedores</h1>
            <p>Preencha os campos para registrar o fornecedor</p>
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
                            name="endereço"
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
                    <button className="Login-Btn" type="submit">Guardar</button>
                </Form>
            </Formik>
        </>
    )
}

export default RegisterProvider