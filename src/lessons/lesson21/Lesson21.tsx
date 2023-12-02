import { useState } from "react";
import Counter from "../../components/Counter";
import "./styles.css";

function Lesson21() {
  // Создаем useState для управления состоянием счетчика
  // Передаем стейт в useState как generic - тип number
  const [count, setCount] = useState<number>(0);

  // Создаем функцию onPlus
  const onPlus = (): void => {
    setCount((prevValue: number) => prevValue + 1);
  };

  // Создаем функцию onMinus
  const onMinus = (): void => {
    setCount((prevValue: number) => prevValue - 1);
  };

  // null и undefined
  let emptyContainer: null = null;
  console.log(emptyContainer);
  let undefinedContainer: undefined = undefined;
  console.log(undefinedContainer);

  // тип tupel - позволяет нам хранить массив фиксированной длины с разными типами данных в нем
  let tupelArray: [string, number, string] = ["apple", 3, "cherry"];
  console.log(tupelArray);

  // тип void - когда фукнция ничего не возвращает
  function helloWorld(): void {
    console.log("hello");
  }
  helloWorld();

  const sum = (a: number, b: number): number => {
    return a + b;
  };
  console.log(sum(1, 3));

  // тип any - когда типизация не строгая и мы не знаем, что там может лежать
  let anyType: any = 3;
  anyType = "4";
  console.log(anyType);

  // enum - тип перечисляемых констант
  enum SEASONS {
    WINTER = "Winter",
    SPRING = "Spring",
    SUMMER = "Summer",
    AUTUMN = "Autumn",
  }

  let spring: SEASONS = SEASONS.SPRING;
  console.log(SEASONS.SUMMER === "Summer");
  console.log(spring);

  interface Persons {
    pets: string[];
  }

  interface Person2 {
    cat?: string;
  }

  // Типизация объектов
  interface Person extends Persons, Person2 {
    name: string;
    lastName: string;
    age: number;
    hairColor: string;
    // ? - обозначает, что свойство необязательное
    isMarried?: boolean;
  }
  const person: Person = {
    name: "John",
    lastName: "Smith",
    age: 35,
    hairColor: "Black",
    isMarried: false,
    pets: ["Cat"],
  };
  console.log(person);

  // Несколько типов одной переменной
  let some: string | undefined = undefined;
  some = "hello";
  console.log(some);

  return (
    <div className="lesson21-wrapper">
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
    </div>
  );
}

export default Lesson21;
