import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import Constants from 'expo-constants';

import * as Permissions from 'expo-permissions';

export function formatId(title) {
  return title.toLowerCase();
}

const NOTIFICATION_KEY = 'mobileFlashCards:notifications';
const CHANNEL_ID = 'DailyReminder';

function __createNotification() {
  return {
    title: 'Mobile Flashcards Reminder',
    body: "Don't forget to study for today!",
    ios: {
      sound: true,
    },
    _displayInForeground: true,
    android: {
      sound: true,
      channelId: CHANNEL_ID,
      sticky: false,
      color: 'red',
    },
  };
}

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
    .catch();
}

export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(async (data) => {
      if (data === null) {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS,
        );

        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync();

          const tomorrow = new Date();
          // 1 minute from now
          // tomorrow.setTime(tomorrow.getTime() + 1 * 60000);

          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(19);
          tomorrow.setMinutes(0);
          try {
            await Notifications.scheduleLocalNotificationAsync(
              __createNotification(),
              {
                time: tomorrow,
                repeat: 'day',
              },
            );
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          } catch (err) {
            console.log('error', err);
          }
        }
      }
    });
}
