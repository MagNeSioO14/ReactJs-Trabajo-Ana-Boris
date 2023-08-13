import { CartWidget } from "../CartWidget/CartWidget";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {logoZeuz} from '../../assets/logoZeuz.png'
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai"
import RegisterModal from "../RegisterModal/RegisterModal/RegisterModal";
import UserMenu from "../RegisterModal/UserMenu";




export const Header = () => {


    return (
        <header className="header">
            <div className="headerContainer">
                <nav className="headerDiv">

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <div className="headerLogo">
                        <a href="">
                            <img className="logo" src="../../LogoZeuz.png" alt="" />
                        </a>
                    </div>
                    {/* <AiOutlineUser color="white" size="2rem"/> */}
                    {/* <RegisterModal/> */}
                    <UserMenu/>
                </nav>
            </div>
        </header>

    )
}
