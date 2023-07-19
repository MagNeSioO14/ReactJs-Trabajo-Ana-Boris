import { CartWidget } from "../CartWidget/CartWidget";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logoZeuz from '../../assets/logoZeuz.png'
import { Link } from "react-router-dom";



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
                            <img className="logo" src={logoZeuz} alt="" />
                        </a>
                    </div>

                    <CartWidget />

                </nav>

                <nav className="headerNav">
                    <Link className="navLink" to="/">Home</Link>
                    <a className="navLink" href="">Catalogo</a>
                    <a className="navLink" href="">Nosotros</a>
                </nav>
            </div>
        </header>

    )
}
