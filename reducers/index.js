import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  RESET_DECKS,
} from '../actions';
import { formatId } from '../utils/helpers';
import defaultDeck from '../utils/_DATA';

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const { title } = action;
      const validId = formatId(title);
      return {
        ...state,
        [validId]: {
          id: validId,
          title,
          questions: [],
        },
      };
    case REMOVE_DECK:
      const { id } = action;
      const { [id]: value, ...restDecks } = state;
      return restDecks;
    case ADD_CARD:
      const { id: deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card),
        },
      };
    case RESET_DECKS:
      return defaultDeck;
    default:
      return state;
  }
}
