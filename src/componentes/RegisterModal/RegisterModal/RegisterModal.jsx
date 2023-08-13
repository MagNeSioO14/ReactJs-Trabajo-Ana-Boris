import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const schema = Yup.object().shape({
    userName: Yup.string()
        .min(4, "El nombre es muy corto")
        .max(20, "Maximo 20 caracteres")
        .required("Este campo es obligatorio")
        .lowercase(),
    email: Yup.string()
        .email("Ingrese un correo valido")
        .required("Este campo es obligatorio")
        .lowercase(),
    password: Yup.string()
        .min(8, "El Password es muy corto")
        .max(20, "Maximo 20 caracteres")
        .required("Este campo es obligatorio")
        .lowercase(),
    confirmedPassword: Yup.string()
        .min(8, "El Password es muy corto")
        .max(20, "Maximo 20 caracteres")
        .required("Este campo es obligatorio")
        .lowercase()
        .oneOf([Yup.ref('password'), null], "Las contraseñas deben coincidir")

});

const RegisterModal = ({ toggleModal, modalOpen, register }) => {


    return (
        <div>
            <button className='btn m-1' onClick={toggleModal} >Register</button>

            {modalOpen && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay' ></div>
                    <div className='modalContenido'>
                        <button className='cerrarBoton' onClick={toggleModal}>X</button>
                        <h2>Register</h2>
                        <hr />
                        <Formik
                            initialValues={{
                                userName: "",
                                email: "",
                                password: "",
                                confirmedPassword: ""
                            }}
                            onSubmit={register}
                            validationSchema={schema}
                        >
                            <Form className='fromStilo'>

                                <label htmlFor="">User Name</label>
                                <ErrorMessage className="errorStyle" name="userName" component="p"/>
                                <Field name="userName" className="form-control my-2" tipe="text" />

                                <label htmlFor="">Email</label>
                                <ErrorMessage className="errorStyle" name="email" component="p"/>
                                <Field name="email" className="form-control my-2" type="email" />

                                <label htmlFor="">Password</label>
                                <ErrorMessage className="errorStyle" name="password" component="p"/>
                                <Field name="password" className="form-control my-2" type="password" />

                                <label htmlFor="">Confirmed Password</label>
                                <ErrorMessage className="errorStyle" name="confirmedPassword" component="p"/>
                                <Field name="confirmedPassword" className="form-control my-2" type="password" />

                                <button className='btn' type="submit">Aceptar</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RegisterModal;
