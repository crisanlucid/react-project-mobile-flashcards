import { AsyncStorage } from 'react-native';
import { decks } from './_DATA';

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
