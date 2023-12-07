import Input from "components/Input";
import {
  Homework25Wrapper,
  LoginForm,
  ProductInfoContainer,
  ProductParBig,
  ProductParSmall,
  Text,
} from "./styles";
import { useFormik } from "formik";
import Button from "components/Button";
import * as Yup from "yup";
import { useState } from "react";

interface FormValues {
  productName: string;
  productPrice: string;
  productDescription: string;
  termsOfUse: string;
}

interface Product {
  productName: string;
  productPrice: string;
  productDescription: string;
}

function Homework25() {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .required("Необходимо ввести название товара")
      .min(2, "Минимальное количество символов: 2")
      .max(50, "Максимальное количество символов: 50"),
    productPrice: Yup.number()
      .required("Необходимо ввести цену товара")
      // max в number работает по-другому, 15 - не максимальное количество символов,
      // а максимальное число
      .max(1500, "Максимальная цена: 1500"),
    productDescription: Yup.string().max(
      150,
      "Максимальное количество символов: 150"
    ),
    termsOfUse: Yup.boolean().required('Необходимо поставить "галочку"'),
  });
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productDescription: "",
      termsOfUse: "",
    } as FormValues,
    validationSchema,
    onSubmit: (values) => {
      setProduct({
        productName: values.productName,
        productPrice: values.productPrice,
        productDescription: values.productDescription,
      });
    },
  });

  return (
    <Homework25Wrapper>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Text>Создание товара</Text>
        <Input
          labelName="Название товара*"
          placeholder="Введите название товара"
          name="productName"
          value={formik.values.productName}
          onChange={formik.handleChange}
          error={formik.errors.productName}
        />
        <Input
          labelName="Цена товара*"
          placeholder="Введите цену товара"
          name="productPrice"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          error={formik.errors.productPrice}
        />
        <Input
          labelName="Описание товара"
          placeholder="Введите описание товара"
          name="productDescription"
          type="text"
          value={formik.values.productDescription}
          onChange={formik.handleChange}
          error={formik.errors.productDescription}
        />
        <Input
          labelName="Правило использования*"
          name="termsOfUse"
          type="checkbox"
          value={formik.values.termsOfUse}
          onChange={formik.handleChange}
          error={formik.errors.termsOfUse}
        />
        <Button name="Создать товар" type="submit"></Button>
        <Text>* - обязательное поле</Text>
      </LoginForm>
      {product && (
        <LoginForm>
          <ProductInfoContainer>
            <ProductParSmall>Название товара</ProductParSmall>
            <ProductParBig>{product?.productName}</ProductParBig>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ProductParSmall>Цена товара</ProductParSmall>
            <ProductParBig>{product?.productPrice}</ProductParBig>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ProductParSmall>Описание товара</ProductParSmall>
            <ProductParBig>{product?.productDescription}</ProductParBig>
          </ProductInfoContainer>
        </LoginForm>
      )}
    </Homework25Wrapper>
  );
}

export default Homework25;
