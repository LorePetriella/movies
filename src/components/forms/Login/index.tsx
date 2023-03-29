import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMe } from "../../../hooks";
import { LoginForm } from "../../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomButton } from "../../common";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Debe ingresar un email válido")
    .required("El email es requerido"),
  pass: yup
    .string()
    .required("La contraseña es requerida")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número."
    ),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });
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
        <Form.Group className=" " controlId="formBasicEmail">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar email"
            {...register("email")}
            className={` ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email?.type && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Label className="text-light">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar Contraseña"
            {...register("pass")}
            className={`${errors.pass ? "is-invalid" : ""}`}
          />
          {errors.pass?.type && (
            <Form.Text className="text-danger">{errors.pass.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div className="d-flex justify-content-evenly">
          <Button variant="dark" type="submit" className="border-light">
            Ingresar
          </Button>

          <CustomButton
            variant={"dark"}
            onClick={() => navigate(`/signup`)}
            label={"Registro"}
            className="border-light"
          ></CustomButton>
        </div>
      </Form>
    </div>
  );
};
export { Login };
