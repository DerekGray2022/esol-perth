import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../scss/Register.scss";

const Register = () => {
    return (
        <>
            <Form className='registerForm' id='form' action='#form'>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Full Name:" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Enter Email:" autoComplete='off' />
                    <Form.Text className="text-muted">
                        We'll never share your details with anyone else.
                    </Form.Text>
                </Form.Group>
                
                    <Button className='registerButton' type="submit">
                    Submit
                    </Button>
            </Form>
        </>
    );
};

export default Register;