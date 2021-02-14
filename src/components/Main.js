import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


export default function Main(props) {
    const [ cards, setCards ] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
    }, []);

    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <button
                    className="profile__avatar-button"
                    type="button"
                    onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={currentUser.avatar} alt="аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__about">{currentUser.about}</p>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Редактировать"
                        onClick={props.onEditProfile}
                    />
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить"
                    onClick={props.onAddPlace}
                />
            </section>

            <section className="cards content__cards">
                <ul className="cards__list">
                    {
                        cards.map((card) => (
                            <Card
                                key={card._id}
                                card={card}
                                name={card.name}
                                link={card.link}
                                likes={card.likes}
                                onCardClick={props.onCardClick}
                            />
                            )
                        )
                    }

                </ul>
            </section>
        </main>
    );
}