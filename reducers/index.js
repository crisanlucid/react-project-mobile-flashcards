import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions';
import { formatId } from '../utils/helpers';

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
          title,
          questions: [],
        },
      };
    case REMOVE_DECK:
      const { id } = action;
      const { [id]: value, ...restDecks } = state;
      console.log(restDecks);
      return restDecks;
    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          questions: [...state[deckId].questions].concat(card),
        },
      };
    default:
      return state;
  }
}
