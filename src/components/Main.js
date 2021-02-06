import React from 'react';
import { api } from '../utils/api'



export default function Main(props) {
    const [ userName, setUserName] = React.useState('');
    const [ userDescription, setUserDescription ] = React.useState('');
    const [ userAvatar, setUserAvatar ] = React.useState('');

    React.useEffect(() => {
        api.getUserData()
            .then((data) => {
                setUserName(data['name']);
                setUserDescription(data['about']);
                setUserAvatar(data['avatar']);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <button
                    className="profile__avatar-button"
                    type="button"
                    onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__about">{userDescription}</p>
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