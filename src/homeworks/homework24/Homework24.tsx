import { useEffect, useState } from "react";
import {
  Card,
  Homework24Wrapper,
  TextBig,
  TextContainer,
  TextSmall,
} from "./styles";
import Button from "components/Button";

interface Joke {
  setup: string;
  punchline: string;
}

function Homework24() {
  const [jokeValue, setJokeValue] = useState<Joke | undefined>();
  const [jokeError, setJokeError] = useState<string | undefined>();

  const getRandomJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (response.ok) {
      const data = await response.json();
      setJokeValue({ setup: data.setup, punchline: data.punchline });
    } else {
      setJokeError("Ошибка при получении данных");
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  useEffect(() => {
    alert("Вы получили новую шутку");
  }, [jokeValue]);

  useEffect(() => {
    alert("Ошибка при получении данных");
  }, [jokeError]);

  return (
    <Homework24Wrapper>
      <Card>
        {jokeValue && (
          <TextContainer>
            <TextSmall>Setup:</TextSmall>
            <TextBig>{jokeValue.setup}</TextBig>
            <TextSmall>Punchline:</TextSmall>
            <TextBig>{jokeValue.punchline}</TextBig>
          </TextContainer>
        )}
        {jokeError && (
          <TextContainer>
            <TextSmall>Error:</TextSmall>
            <TextBig>{jokeError}</TextBig>
          </TextContainer>
        )}
        <Button name="Get new joke" onClick={getRandomJoke}></Button>
      </Card>
    </Homework24Wrapper>
  );
}

export default Homework24;
