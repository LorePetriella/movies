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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-4 " controlId="formBasicEmail">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar email"
            {...register("email")}
            className=" rounded-pill border-0 py-2 px-3 input-sm"
          />
          {/* <Form.Text className="text-danger">Datos incorrectos</Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">
          <Form.Label className="text-light">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar Contraseña"
            {...register("pass")}
            className="rounded-pill border-0 py-2 px-3 input-sm"
          />
          {/* <Form.Text className="text-danger">Contraseña incorrecta</Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            className="text-light"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
};
export { Login };
