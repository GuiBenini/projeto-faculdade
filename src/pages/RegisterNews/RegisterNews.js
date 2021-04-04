import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const RegisterProvider = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/news', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/news')
                }
            })
    }

    const validations = yup.object().shape({
        titulo: yup.string().required(),
        subtitulo: yup.string().required(),
        texto: yup.string().required(),
        link: yup.string().required(),
        foto: yup.string().required()
    })
    return (
        <>
            <h1>Cadastrar Notícias</h1>
            <p>Preencha os campos para se cadastrar uma nova notícia</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >

                <Form className="Login">
                    <div className="Login-Group">
                        <p>Titulo</p>
                        <Field
                            name="titulo"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="titulo"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <p>Subtitulo</p>
                        <Field
                            name="subtitulo"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="subtitulo"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <p>Texto</p>
                        <Field
                            name="texto"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="texto"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <p>Link</p>
                        <Field
                            name="link"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="link"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <p>Foto</p>
                        <Field
                            name="foto"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="foto"
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
