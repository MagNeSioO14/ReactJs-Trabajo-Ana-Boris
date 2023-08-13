import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const schema = Yup.object().shape({
    // Define las validaciones aquí
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
                        //validationSchema={schema}
                        >
                            <Form className='fromStilo'>

                                <label htmlFor="">User Name</label>
                                <Field name="userName" className="form-control my-2" tipe="text" />

                                <label htmlFor="">Email</label>
                                <Field name="email" className="form-control my-2" type="email" />

                                <label htmlFor="">Password</label>
                                <Field name="password" className="form-control my-2" type="password" />

                                <label htmlFor="">Confirmed Password</label>
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
