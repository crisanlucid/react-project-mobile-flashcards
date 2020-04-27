import { AsyncStorage } from 'react-native';
import decks from './_DATA';
import { formatId } from './helpers';

const DECKS_KEY = 'mobileFlashCards:decks';

export function getData() {
  return decks;
}

export async function getDecks() {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_KEY);

    if (storeResults === null) {
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    }

    return storeResults === null ? decks : JSON.parse(storeResults);
  } catch (err) {
    console.error(err);
  }
}

export async function getDeck(id) {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_KEY);

    return JSON.parse(storeResults)[formatId(id)];
  } catch (err) {
    console.log(err);
  }
}

export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_KEY,
      JSON.stringify({
        [formatId(title)]: {
          id: formatId(title),
          title,
          questions: [],
        },
      }),
    );
  } catch (err) {
    console.log(err);
  }
}

export async function addCardToDeck(title, card) {
  try {
    const id = formatId(title);
    const deck = await getDeck(id);

    await AsyncStorage.mergeItem(
      DECKS_KEY,
      JSON.stringify({
        [id]: {
          questions: [...deck.questions].concat(card),
        },
      }),
    );
  } catch (err) {
    console.log(err);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
  } catch (err) {
    console.log(err);
  }
}

export async function removeDeck(key) {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_KEY);
    const data = JSON.parse(storeResults);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}
