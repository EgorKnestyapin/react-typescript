import { useEffect, useState, ChangeEvent } from "react";
import { Card, Lesson24Wrapper, Text } from "./styles";
import Input from "components/Input";

function Lesson24() {
  const [firstName, setFirstName] = useState<string>("");
  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [catError, setCatError] = useState<string | undefined>(undefined);

  const onChangeFirstNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const getCatFacts = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      setCatFact(data.fact);
    } else {
      setCatError("Error during get cat facts");
    }
  };
  // 1. Lifecycle: Initialization(создание)
  useEffect(() => {
    console.log("Lifecycle method: initialization");
    getCatFacts();
    // тут обычно делаются get запросы на сервер, чтобы отобразить что-то в самом начале
  }, []);

  // 2. Lifecycle: Updating(обновление компонента)
  useEffect(() => {
    console.log("Lifecycle: Updation");
    getCatFacts();
    // тут можно делать любые необходимые действия при обновлении
    // Например, мы вводим что-то на клавиатуре и на каждый введенный символ следим за обновлением компонента
    // и отправляем запрос на бэкенд для получения совпадений с введенными вами символами
    // Примером может быть поиск людей в facebook по совпадению имени
  }, [firstName]);

  // 3. Lifecycle: Unmounting(смерть компонента)
  useEffect(() => {
    return () => setCatFact(undefined);
  }, [setCatFact]);

  // 4. Бесконечный рендеринг!!! Никогда не используйте useEffect без 2-го аргумента, массива зависимостей
  //   useEffect(() => {
  //     getCatFacts();
  //     console.log("Infinite rendering");
  //   });

  return (
    <Lesson24Wrapper>
      <Card>
        <Input
          labelName="На каждый введенный символ получите факты о котах"
          placeholder="Enter"
          value={firstName}
          onChange={onChangeFirstNameValue}
        />
        {firstName}
        <Text>Факты о котах:</Text>
        {catFact && <Text>{catFact}</Text>}
        {catError && <Text>{catError}</Text>}
      </Card>
    </Lesson24Wrapper>
  );
}

export default Lesson24;
