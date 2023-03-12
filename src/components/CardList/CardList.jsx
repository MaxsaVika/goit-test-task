import { useEffect, useState } from "react";
import usersData from "../../data/users.json";
import Card from "../Card/Card";
import css from "./CardList.module.css";

export const CardList = () => {
  const [cards, setCards] = useState(
    () => JSON.parse(localStorage.getItem("cards")) ?? usersData
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const onChangeFollow = (id) =>
    setCards((items) =>
      items.map((card) => {
        if (id === card.id) {
          return {
            ...card,
            follow: card.follow ? false : true,
            followers: !card.follow ? card.followers + 1 : card.followers - 1,
          };
        }
        return card;
      })
    );

  return (
    <ul className={css.cards_list}>
      {cards.map((user) => (
        <Card key={user.id} user={user} onChangeFollow={onChangeFollow} />
      ))}
    </ul>
  );
};
