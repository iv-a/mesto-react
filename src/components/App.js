import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import ImagePopup from "./ImagePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/Api.js";

function App() {
    const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
    const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
    const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
    const [ selectedCard, setSelectedCard ] = React.useState({});
    const [ currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getUserData()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({})
    }

    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            closeAllPopups();
        }
    }
    
    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) {
            closeAllPopups();
        }
    }

    function handleUpdateUser(currentUser) {
        api.editUserData(currentUser)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        document.addEventListener('mouseup', handleOverlayClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
            document.removeEventListener('mouseup', handleOverlayClose);
        }
    });

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
              <div className="page__container">
                  <Header/>
                  <Main
                      onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}
                      onCardClick={setSelectedCard}
                  />
                  <Footer/>

                  <EditProfilePopup
                      isOpen={isEditProfilePopupOpen}
                      onClose={closeAllPopups}
                      onUpdateUser={handleUpdateUser}

                  />

                  <PopupWithForm
                      name="add-card"
                      title="Новое место"
                      buttonText="Создать"
                      isOpen={isAddPlacePopupOpen}
                      onClose={closeAllPopups}
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
                      isOpen={isEditAvatarPopupOpen}
                      onClose={closeAllPopups}
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

                  <ImagePopup
                      card={selectedCard}
                      onClose={closeAllPopups}
                  />
              </div>
          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;