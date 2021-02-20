import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
    const [ place, setPlace ] = React.useState('');
    const [ link, setLink ] = React.useState('');

    function handleChangePlace(evt) {
        setPlace(evt.target.value);
    }

    function handleChangeLink(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onAddPlace({ name: place, link })
    }

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            buttonText="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <input
                        className="popup__input popup__input_type_place"
                        id="place-input"
                        type="text"
                        name="placeInput"
                        placeholder="Название"
                        minLength="2"
                        maxLength="30"
                        required
                        onChange={handleChangePlace}
                    />
                    <span
                        className="popup__input-error"
                        id="place-input-error"
                    />
                    <input
                        className="popup__input popup__input_type_link"
                        id="link-input"
                        type="url"
                        name="linkInput"
                        placeholder="Ссылка на картинку"
                        required
                        onChange={handleChangeLink}
                    />
                    <span
                        className="popup__input-error"
                        id="link-input-error"
                    />
                </>
            }
        />
    )
}