import React from 'react';

export default function ImagePopup() {
    return (
        <div
            className="popup page__popup popup_type_view-image">
            <figure
                className="popup__image-container">
                <button
                    className="popup__close-button popup__close-button_type_view-image"
                    type="button"
                    aria-label="Закрыть"
                />
                <img
                    className="popup__image"
                    src="#"
                    alt="#" />
                <figcaption
                    className="popup__image-title"
                />
            </figure>
        </div>
    );
}