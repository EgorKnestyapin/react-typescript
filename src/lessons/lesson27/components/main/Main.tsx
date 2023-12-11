import { createContext, useState } from "react";
import { MainWrapper } from "./styles";
import Section from "../section";

interface UserData {
  userName: string;
  age: number;
  email: string;
}

// Создаем 
export const MainContext = createContext({
  userName: "",
  age: 0,
  email: "",
});

function Main() {
  const [userData, setUserData] = useState<UserData>({
    userName: "Jack Smith",
    age: 40,
    email: "example@gmail.com",
  });
  return (
    // оборачиваем все, где мы хотим иметь доступ к контексту
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <h1>Main Component</h1>
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
