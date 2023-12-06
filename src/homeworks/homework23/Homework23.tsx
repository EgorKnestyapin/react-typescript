import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";
import Input from "components/Input";
import {
  CreatePersonCard,
  Homework23Wrapper,
  PersonCard,
  PersonInfoBig,
  PersonInfoContainer,
  PersonInfoSmall,
} from "./styles";
import Button from "components/Button";

interface UserInfo {
  name: string;
  lastName: string;
  ageValue: string;
  jobPosition: string;
}
function Homework23() {
  const [isPersonCard, setPersonCard] = useState<boolean>(false);
  const [nameValue, setNameValue] = useState<string>("");
  const [surnameValue, setSurnameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [positionValue, setPositionValue] = useState<string>("");

  // Создаем контейнер(стейт), в котором будет хранится информация для карточки,
  // чтобы она добавлялась только на onClick
  const [person, setPerson] = useState<UserInfo>({
    name: "",
    lastName: "",
    ageValue: "",
    jobPosition: "",
  });

  // const onChangeNameValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setNameValue(event.target.value);
  // };
  // const onChangeSurnameValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSurnameValue(event.target.value);
  // };
  // const onChangeAgeValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAgeValue(event.target.value);
  // };
  // const onChangePositionValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPositionValue(event.target.value);
  // };

  const onChangeValue = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: Dispatch<SetStateAction<string>>
  ) => {
    setFieldValue(event.target.value);
  };

  return (
    <Homework23Wrapper>
      <CreatePersonCard>
        <Input
          labelName="Имя"
          placeholder="Иван"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeValue(event, setNameValue)
          }
          value={nameValue}
        />
        <Input
          labelName="Фамилия"
          placeholder="Василевский"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeValue(event, setSurnameValue)
          }
          value={surnameValue}
        />
        <Input
          labelName="Возраст"
          placeholder="25"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeValue(event, setAgeValue)
          }
          value={ageValue}
        />
        <Input
          labelName="Должность"
          placeholder="Старший специалист"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeValue(event, setPositionValue)
          }
          value={positionValue}
        />
        <Button
          onClick={() => {
            if (nameValue && surnameValue && ageValue && positionValue) {
              setPerson({
                name: nameValue,
                lastName: surnameValue,
                ageValue: ageValue,
                jobPosition: positionValue,
              });
              setPersonCard(true);
            } else {
              setPersonCard(false);
              setTimeout(() => alert("Введите данные сотрудника"), 0);
            }
          }}
        />
      </CreatePersonCard>
      {isPersonCard && (
        <PersonCard>
          <PersonInfoContainer>
            <PersonInfoSmall>Имя</PersonInfoSmall>
            <PersonInfoBig>{person.name}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Фамилия</PersonInfoSmall>
            <PersonInfoBig>{person.lastName}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Возраст</PersonInfoSmall>
            <PersonInfoBig>{person.ageValue}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Должность</PersonInfoSmall>
            <PersonInfoBig>{person.jobPosition}</PersonInfoBig>
          </PersonInfoContainer>
        </PersonCard>
      )}
    </Homework23Wrapper>
  );
}

export default Homework23;
