import { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { servicesUser } from "../../../services/users";
import { SignUpForm } from "../../../types";

const Signup = () => {
  const { register, handleSubmit } = useForm<SignUpForm>();

  const onSubmit = (data: SignUpForm) => {
    servicesUser.add({ ...data, birthdate: new Date(data.birthdate) });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar Email"
            {...register("email")}
          />
          <Form.Text className="text-danger">Datos incorrectos</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar Contraseña"
            {...register("password")}
          />
          <Form.Text className="text-danger">Datos incorrectos</Form.Text>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar Nombre"
            {...register("name")}
          />
          <Form.Text className="text-danger">Datos incorrectos</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar Apellido"
            {...register("lastname")}
          />
          <Form.Text className="text-danger">Datos incorrectos</Form.Text>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Col sm={6}>
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingresar Fecha de Nacimiento"
            {...register("birthdate")}
          />
          <Form.Text className="text-danger">Datos incorrectos</Form.Text>
        </Col>
      </Row>

      <Button variant="outline-dark" type="submit">
        Crear Cuenta
      </Button>
    </Form>
  );
};
export { Signup };
