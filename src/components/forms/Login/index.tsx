import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMe } from "../../../hooks";
import { LoginForm } from "../../../types";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { login } = useMe();

  const onSubmit = (data: LoginForm) => {
    login(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresar email"
          {...register("email")}
        />
        <Form.Text className="text-danger">Datos incorrectos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresar Contraseña"
          {...register("pass")}
        />
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
