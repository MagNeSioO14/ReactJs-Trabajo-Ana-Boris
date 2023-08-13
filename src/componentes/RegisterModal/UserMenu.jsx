import { useState } from 'react';
import './UserMenu.scss'
import { useAuth } from '../../context/AuthContext';
import LoginModal from './LoginModal/LoginModal';
import RegisterModal from './RegisterModal/RegisterModal';

const UserMenu = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [loginOpen, setLoginlOpen] = useState(false);
    const auth = useAuth()
    const { usuario } = useAuth()

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }
    const toggleLogin = () => {
        setLoginlOpen(!loginOpen)
    }

    const handleRegister = async (values) => {
        const { userName, email, password } = values;
        try {
            await auth.registrar(email, password, userName);
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = (values) => {
        const { email, password } = values;
        try {
            auth.login(email, password)
            toggleLogin();
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = () => {
        auth.logout();
    }

    return (
        <div className='loginestilos'>
            {usuario
                ? <h1>{usuario}</h1>
                : <RegisterModal toggleModal={toggleModal} modalOpen={modalOpen} register={handleRegister} />
            }
            {usuario
                ? <button className='btn m-1' onClick={handleLogout} >Login</button>
                : <LoginModal toggleLogin={toggleLogin} loginOpen={loginOpen} login={handleLogin} />             
            }
        </div>
    )
}

export default UserMenu