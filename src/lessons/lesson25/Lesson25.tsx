import Input from "components/Input";
import { Lesson25Wrapper, LoginForm, Text } from "./styles";
import Button from "components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function Lesson25() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Поле email обязательно")
      .email("Неправильный формат email"),
    password: Yup.string()
      .min(3, "Минимальное количество символов: 3")
      .max(10, "Максимальное кол-во симолов: 10"),
  });
  // Создаем объект formik, который включает в себя все необходимые
  // функции и свойства для управления данными из форм
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      actions.resetForm();
      console.log(values);
    },
  });
  return (
    <Lesson25Wrapper>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Text>Login form</Text>
        <Input
          error={formik.errors.email}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          labelName="Email"
          placeholder="Enter email"
        ></Input>
        <Input
          labelName="Password"
          placeholder="Enter password"
          name="password"
          error={formik.errors.password}
          onChange={formik.handleChange}
          value={formik.values.password}
        ></Input>
        <Button name="Login" type="submit"></Button>
      </LoginForm>
    </Lesson25Wrapper>
  );
}

export default Lesson25;
