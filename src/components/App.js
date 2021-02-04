import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {

  return (
      <div className="page">
          <div className="page__container">
              <Header/>
              <Main/>
              <Footer/>

              <PopupWithForm
                  name="edit-profile"
                  title="Редактировать профиль"
                  buttonText="Сохранить"
                  children={
                      <>
                          <input
                              className="popup__input popup__input_type_name"
                              id="name-input"
                              type="text"
                              name="nameInput"
                              placeholder="Имя"
                              minLength="2"
                              maxLength="40"
                              required
                          />
                          <span
                              className="popup__input-error"
                              id="name-input-error"
                          />
                          <input
                              className="popup__input popup__input_type_about"
                              id="about-input"
                              type="text"
                              name="aboutInput"
                              placeholder="О себе"
                              minLength="2"
                              maxLength="200"
                              required
                          />
                          <span
                              className="popup__input-error"
                              id="about-input-error"
                          />
                      </>
                  }
              />
              <PopupWithForm
                  name="add-card"
                  title="Новое место"
                  buttonText="Создать"
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
                          />
                          <span
                              className="popup__input-error"
                              id="link-input-error"
                          />
                      </>
                  }
              />

              <PopupWithForm
                  name="change-avatar"
                  title="Обновить аватар"
                  buttonText="Сохранить"
                  children={
                      <>
                          <input
                              className="popup__input popup__input_type_link"
                              id="avatar-link-input"
                              type="url"
                              name="avatarLinkInput"
                              placeholder="Ссылка на картинку"
                              required
                          />
                          <span
                              className="popup__input-error"
                              id="avatar-link-input-error"
                          />
                      </>
                  }
              />

              <PopupWithForm
                  name="confirm"
                  title="Вы уверены?"
                  buttonText="Да"
              />

              <ImagePopup/>

          </div>
      </div>

  );
}

export default App;
