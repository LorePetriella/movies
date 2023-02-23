import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" />
        <Form.Text className="text-danger">Datos incorrectos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresar Contraseña" />
        <Form.Text className="text-danger">Contraseña incorrecta</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-dark" type="submit">
        Ingresar
      </Button>
    </Form>
  );
};
export { Login };
