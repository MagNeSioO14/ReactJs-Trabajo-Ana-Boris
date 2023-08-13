import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
                    <UserMenu/>
                </nav>
            </div>
        </header>

    )
}
