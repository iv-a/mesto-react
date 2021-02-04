import React from 'react';

export default function Main(props) {

    function handleEditAvatarClick() {
        const changeAvatarPopup = document.querySelector('.popup_type_change-avatar');
        changeAvatarPopup.classList.add('popup_opened');
    }
    
    function handleEditProfileClick() {
        const editProfilePopup = document.querySelector('.popup_type_edit-profile');
        editProfilePopup.classList.add('popup_opened');
    }
    
    function handleAddPlaceClick() {
        const addCardPopup = document.querySelector('.popup_type_add-card');
        addCardPopup.classList.add('popup_opened');
    }

    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <button
                    className="profile__avatar-button"
                    type="button"
                    onClick={handleEditAvatarClick}>
                    <img className="profile__avatar" src="#" alt="аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__about">Исследователь океана</p>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Редактировать"
                        onClick={handleEditProfileClick}
                    />
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить"
                    onClick={handleAddPlaceClick}
                />
            </section>

            <section className="cards content__cards">
                <ul className="cards__list">

                </ul>
            </section>
        </main>
    );
}