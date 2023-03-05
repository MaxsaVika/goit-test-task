import css from "./Card.module.css";

export default function Card({ user, onChangeFollow }) {
  return (
    <li className={css.card_wrapper}>
      <img src="/images/logo.png" alt="Logo" className={css.logo_img} />
      <div className={css.top_thumb}>
        <img src="/images/picture2.png" alt="Top" className={css.top_img} />
      </div>
      <div className={css.central_thumb}>
        <div className={css.central_thumb__line}></div>
        <div className={css.central_thumb__round}>
          <img
            className={css.central_thumb__img}
            src={user.avatar}
            alt="User avatar"
          />
        </div>
      </div>
      <div className={css.bottom_thumb}>
        <p
          className={css.bottom_thumb__name}
          style={{ color: `${user.follow ? "#5CD3A8" : "#EBD8FF"}` }}
        >
          {user.user}
        </p>
        <p className={css.bottom_thumb__text}>{user.tweets} TWEETS</p>
        <p className={css.bottom_thumb__text}>
          {user.followers.toLocaleString("ja-JP")} FOLLOWERS
        </p>
        <button
          onClick={() => {
            onChangeFollow(user.id);
          }}
          className={
            !user.follow
              ? css.bottom_thumb__btn
              : `${css.bottom_thumb__btn} ${css.bottom_thumb__btn_add}`
          }
        >
          {!user.follow ? "Follow" : "Following"}
        </button>
      </div>
    </li>
  );
}
