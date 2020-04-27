import {
  getDecks,
  resetDecks as resetDecksAPI,
  saveDeckTitle as saveDeckAPI,
  addCardToDeck as addCardAPI,
  removeDeck as removeDeckAPI,
} from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RESET_DECKS = 'RESET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function resetDecks() {
  return {
    type: RESET_DECKS,
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id,
  };
}

export function addCardToDeck(id, card) {
  return {
    type: ADD_CARD,
    id,
    card,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  };
}

export function handleResetDecks() {
  return (dispatch) => {
    return resetDecksAPI().then(() => {
      dispatch(resetDecks());
    });
  };
}

export function handleAddDeck(title) {
  return (dispatch) => {
    return saveDeckAPI(title).then(() => {
      dispatch(addDeck(title));
    });
  };
}

export function handleAddCard(id, card) {
  return (dispatch) => {
    return addCardAPI(id, card).then(() => {
      dispatch(addCardToDeck(id, card));
    });
  };
}

export function handleRemoveCard(id) {
  return (dispatch) => {
    return removeDeckAPI(id).then(() => {
      dispatch(removeDeck(id));
    });
  };
}
