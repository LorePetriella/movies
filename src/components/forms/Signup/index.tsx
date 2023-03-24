import { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { servicesUser } from "../../../services/users";
import { SignUpForm } from "../../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Debe ingresar un email válido")
    .required("El email es requerido"),

  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número."
    ),
  name: yup.string().required("El nombre es requerido"),
  lastname: yup.string().required("El apellido es requerido"),
  birthdate: yup.date().required("La fecha es requerida"),
});

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignUpForm) => {
    servicesUser.add({ ...data, birthdate: new Date(data.birthdate) });
    navigate("/login");
  };

  // const onSubmit = async (data: SignUpForm) => {
  //   try {
  //     await schema.validate(data, { abortEarly: false });
  //     servicesUser.add({ ...data, birthdate: new Date(data.birthdate) });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-light">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresar Email"
              {...register("email")}
              className={`${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email?.type && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="text-light">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresar Contraseña"
              {...register("password")}
              className={`${errors.password ? "is-invalid" : ""}`}
            />
            {errors.password?.type && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label className="text-light">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Nombre"
              {...register("name")}
              className={`${errors.name ? "is-invalid" : ""}`}
            />
            {/* <Form.Text className="text-danger">
              El nombre es requerido
            </Form.Text> */}
            {errors.name && (
              <Form.Text className="text-danger">
                {errors.name.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSurname">
            <Form.Label className="text-light">Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Apellido"
              {...register("lastname")}
              className={`${errors.lastname ? "is-invalid" : ""} `}
            />
            {/* <Form.Text className="text-danger">
              El apellido es requerido
            </Form.Text> */}
            {errors.lastname && (
              <Form.Text className="text-danger">
                {errors.lastname.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col sm={6}>
            <Form.Label className="text-light">Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingresar Fecha de Nacimiento"
              {...register("birthdate")}
              className={`${errors.birthdate ? "is-invalid" : ""}`}
            />

            {errors.birthdate && (
              <Form.Text className="text-danger">
                {errors.birthdate.message}
              </Form.Text>
            )}
          </Col>
        </Row>

        <Button variant="dark" type="submit" className=" border-light">
          Crear Cuenta
        </Button>
      </Form>
    </div>
  );
};
export { Signup };
