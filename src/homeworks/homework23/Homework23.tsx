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
import { useState, ChangeEvent } from "react";

function Homework23() {
  const [isPersonCard, setPersonCard] = useState<boolean>(false);
  const [nameValue, setNameValue] = useState<string>("");
  const [surnameValue, setSurnameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [positionValue, setPositionValue] = useState<string>("");

  const onChangeNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };
  const onChangeSurnameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSurnameValue(event.target.value);
  };
  const onChangeAgeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value);
  };
  const onChangePositionValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPositionValue(event.target.value);
  };

  return (
    <Homework23Wrapper>
      <CreatePersonCard>
        <Input
          labelName="Имя"
          placeholder="Иван"
          onChange={onChangeNameValue}
          value={nameValue}
        />
        <Input
          labelName="Фамилия"
          placeholder="Василевский"
          onChange={onChangeSurnameValue}
          value={surnameValue}
        />
        <Input
          labelName="Возраст"
          placeholder="25"
          onChange={onChangeAgeValue}
          value={ageValue}
        />
        <Input
          labelName="Должность"
          placeholder="Старший специалист"
          onChange={onChangePositionValue}
          value={positionValue}
        />
        <Button
          onClick={() => {
            if (nameValue && surnameValue && ageValue && positionValue) {
              setPersonCard(true);
            } else {
              alert("Введите данные сотрудника");
            }
          }}
        />
      </CreatePersonCard>
      {isPersonCard && (
        <PersonCard>
          <PersonInfoContainer>
            <PersonInfoSmall>Имя</PersonInfoSmall>
            <PersonInfoBig>{nameValue}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Фамилия</PersonInfoSmall>
            <PersonInfoBig>{surnameValue}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Возраст</PersonInfoSmall>
            <PersonInfoBig>{ageValue}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Должность</PersonInfoSmall>
            <PersonInfoBig>{positionValue}</PersonInfoBig>
          </PersonInfoContainer>
        </PersonCard>
      )}
    </Homework23Wrapper>
  );
}

export default Homework23;
