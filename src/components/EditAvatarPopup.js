import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
    const avatarRef = React.useRef();


    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateAvatar({avatar: avatarRef.current.value});
    }

    return (
        <PopupWithForm
            name="change-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <input
                        className="popup__input popup__input_type_link"
                        id="avatar-link-input"
                        type="url"
                        name="avatarLinkInput"
                        placeholder="Ссылка на картинку"
                        required
                        ref={avatarRef}
                    />
                    <span
                        className="popup__input-error"
                        id="avatar-link-input-error"
                    />
                </>
            }
        />
    )
}