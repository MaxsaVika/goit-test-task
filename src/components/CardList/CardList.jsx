import { useEffect, useState } from "react";
import usersData from "../../data/users.json";
import Card from "../Card/Card";
import css from "./CardList.module.css";

export const CardList = () => {
  const [cards, setCards] = useState(() => {
    const savedData = localStorage.getItem("cards");
    return savedData ? JSON.parse(savedData) : usersData;
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const onChangeFollow = (id) =>
    setCards((items) =>
      items.map((card) => {
        if (id === card.id) {
          return {
            ...card,
            follow: !card.follow,
            followers: !card.follow ? card.followers + 1 : card.followers - 1,
          };
        } else {
          return card;
        }
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
