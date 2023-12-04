import { CSSProperties } from "react";

import { Lesson22Wrapper, LoginCard } from "./styles";
import Button from "components/Button";

function Lesson22() {
  // Union type
  type WordOrNumber = string | number;
  let wordOrNumber: WordOrNumber = 3;
  console.log(wordOrNumber);

  // Interface vs type
  interface Person {
    name: string;
    age: number;
  }
  //   type PersonType = {
  //     name: string;
  //     age: number;
  //   };
  const person: Person = {
    name: "John",
    age: 25,
  };
  console.log(person);

  // Generic
  type Car<T> = {
    name: string;
    color: string;
    params: T;
  };
  const car: Car<number[]> = {
    name: "Porsche",
    color: "Red",
    params: [2, 3, 4],
  };
  console.log(car);

  // STYLES
  // 1 способ стилизации: создать файл styles.css, импортировать его и добавлять классы
  // 2 способ стилизации: inline - мы передаем объект в атрибут тега style
  // - если 2 слова: camelCase
  // - значения пишем в строке

  // Представим, что это пропса, которая пришла от родительского компонента
  const isRed = true;

  const paragraphStyles: CSSProperties = {
    fontSize: "20px",
    color: isRed ? "red" : "blue",
  };

  return (
    <Lesson22Wrapper>
      <p style={paragraphStyles}>Lesson 22</p>
      <LoginCard>
        <Button name="Login" onClick={() => {}} disabled={true} />
      </LoginCard>
    </Lesson22Wrapper>
  );
}

export default Lesson22;
