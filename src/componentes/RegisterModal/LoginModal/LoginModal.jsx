import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginModal = ({ toggleLogin, loginOpen, login }) => {

    return (
        <>
            <button className='btn m-1' onClick={toggleLogin} >Login</button>

            {loginOpen && (
                <div className='modal'>
                    <div onClick={toggleLogin} className='overlay' ></div>
                    <div className='modalContenido'>
                        <button className='cerrarBoton' onClick={toggleLogin}>X</button>
                        <h2>Login</h2>
                        <hr />
                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            onSubmit={login}
                        //validationSchema={schema}
                        >
                            <Form className='fromStilo'>

                                <label htmlFor="">Email</label>
                                <Field name="email" className="form-control my-2" type="email" />

                                <label htmlFor="">Password</label>
                                <Field name="password" className="form-control my-2" type="password" />

                                <button className='btn' type="submit">Aceptar</button>

                            </Form>
                        </Formik>
                    </div>
                </div>
            )}
        </>
    )
}

export default LoginModal;