import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ImagePopup from "./ImagePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/Api.js";

function App() {
    const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
    const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
    const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
    const [ selectedCard, setSelectedCard ] = React.useState({});
    const [ currentUser, setCurrentUser] = React.useState({});
    const [ cards, setCards ] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((c) => c._id !== card._id);
                setCards(newCards);
            })
            .catch((err) => {
                console.log(err);
            });
    }

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

    function handleUpdateAvatar(data) {
        api.changeUserAvatar(data)
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleAddPlaceSubmit({ name, link }) {
        api.postNewCard({ name, link })
            .then((newCard) => {
                setCards([newCard, ...cards]);
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
                      cards={cards}
                      onCardLike={handleCardLike}
                      onCardDelete={handleCardDelete}
                  />
                  <Footer/>

                  <EditProfilePopup
                      isOpen={isEditProfilePopupOpen}
                      onClose={closeAllPopups}
                      onUpdateUser={handleUpdateUser}

                  />

                  <EditAvatarPopup
                      isOpen={isEditAvatarPopupOpen}
                      onClose={closeAllPopups}
                      onUpdateAvatar={handleUpdateAvatar}
                  />

                  <AddPlacePopup
                      isOpen={isAddPlacePopupOpen}
                      onClose={closeAllPopups}
                      onAddPlace={handleAddPlaceSubmit}
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