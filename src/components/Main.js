import React from 'react';
import App from "./App.js";


export default function Main(props) {

    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <button
                    className="profile__avatar-button"
                    type="button"
                    onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src="#" alt="аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__about">Исследователь океана</p>
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

                </ul>
            </section>
        </main>
    );
}