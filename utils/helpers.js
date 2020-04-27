import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';

import * as Permissions from 'expo-permissions';

export function formatId(title) {
  return title.toLowerCase();
}

const CHANNEL_ID = 'DailyReminder';
const NOTIFICATION_KEY = 'mobileFlashCards:notifications';

function __createNotification() {
  return {
    title: 'Mobile Flashcards Reminder',
    body: "Don't forget to study for today!",
    ios: {
      sound: true,
    },
    android: {
      channelId: CHANNEL_ID,
      sticky: false,
      color: 'red',
    },
  };
}

function __createChannel() {
  return {
    name: 'Daily Reminder',
    description: 'Daily reminder for you to study your flashcards.',
    sound: true,
    priority: 'high',
  };
}

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync,
  );
}

export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.createChannelAndroidAsync(
              CHANNEL_ID,
              __createChannel(),
            )
              .then((val) => console.log('channel return:', val))
              .then(() => {
                Notifications.cancelAllScheduledNotificationsAsync();

                const tomorrow = new Date();
                // 3 minutes from now
                tomorrow.setTime(tomorrow.getTime() + 1 * 60000);

                // tomorrow.setDate(tomorrow.getDate() + 1);
                // tomorrow.setHours(19);
                // tomorrow.setMinutes(0);

                Notifications.scheduleLocalNotificationAsync(
                  __createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  },
                );

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              })
              .catch((err) => {
                console.log('err', err);
              });
          }
        });
      }
    });
}
