import React from 'react';

export default function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <li
            className="card">
            <button
                className="card__delete-button"
            />
            <button
                className="card__open-photo-button"
                type="button"
                aria-label="Открыть"
                onClick={handleCardClick}>
                <img
                    className="card__photo"
                    src={props.link}
                    alt={props.name}
                />
            </button>
            <div
                className="card__description">
                <h2
                    className="card__title">{props.name}
                </h2>
                <div
                    className="card__like-container">
                    <button
                        className="card__like-button"
                        type="button"
                        aria-label="Нравится"/>
                    <p
                        className="card__like-counter">{props.likes.length}
                    </p>
                </div>
            </div>
        </li>
    );
}