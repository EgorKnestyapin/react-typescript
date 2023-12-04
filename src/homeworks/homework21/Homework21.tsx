import { useState } from "react";
import "./styles.css";
import Button from "../../components/Button";

function Homework21() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const plusLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const plusDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework21-wrapper">
      <div className="like-container">
        <img
          src="https://cdn-0.emojis.wiki/emoji-pics/whatsapp/thumbs-up-whatsapp.png"
          alt="like"
          onClick={plusLike}
        />
        {like > 0 && <p>{like}</p>}
      </div>
      <div className="dislike-container">
        <img
          src="https://smile-emoji.ru/wp-content/uploads/site-images/simvol-vk/v33svuzr.png"
          alt="dislike"
          onClick={plusDislike}
        />
        {dislike > 0 && <p>{dislike}</p>}
      </div>
      <div className="button-container">
        <Button name="Reset Results" onClick={resetResults} />
      </div>
    </div>
  );
}

export default Homework21;
