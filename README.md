# Slack Bot

## High level Flow

1. Authenticate with the Slack API and obtain a bot token.

2. Use the Slack API to send a direct message to the user on Monday asking them to fill out their to-dos for the week.

3. Use a scheduler library (such as apscheduler) to schedule messages to be sent every day from Tuesday to Friday, reminding the user of their to-dos for that day.

4. Set up a Firebase Realtime Database to store the user's to-dos and whether they have been completed.

5. When the user submits their to-dos for the week, store them in the Firebase Realtime Database.

6. When a reminder message is sent, query the Firebase Realtime Database for the user's to-dos for that day and send them in the reminder message.

7. Use the Slack API to create a checkbox UI element for each to-do that allows the user to mark it as done.

8. When a user marks a to-do as done through the checkbox UI, update the Firebase Realtime Database to mark the corresponding to-do as completed.

9. At the end of the week, calculate the percentage of completed to-dos and send a report to the user through a direct message.

## Detailed Flow

### Authenticate with the Slack API and obtain a bot token

**You can use the slack-sdk library to authenticate with the Slack API and obtain a bot token.**

1. Use the Slack API to send a direct message to the user on Monday asking them to fill out their to-dos for the week.

    - You can use the `chat.postMessage` method of the Slack API to send a direct message to the user.

    - You can use the schedule method of the `apscheduler` library to schedule this message to be sent every Monday.

2. Use a scheduler library (such as apscheduler) to schedule messages to be sent every day from Tuesday to Friday, reminding the user of their to-dos for that day.

    - You can use the schedule method of the apscheduler library to schedule these messages to be sent every day from Tuesday to Friday.

    - In the scheduled function, you can use the chat.postMessage method of the Slack API to send a direct message to the user with their to-dos for that day.

3. Set up a Firebase Realtime Database to store the user's to-dos and whether they have been completed.
    - You can use the firebase-admin library to authenticate with Firebase and obtain a reference to the Realtime Database.

    - You can create a new Firebase Realtime Database instance for each user, and use the user's Slack ID as the key for their instance.

    - You can store the user's to-dos as a list of objects, with each object containing the to-do text and a boolean flag indicating whether it has been completed.

4. When the user submits their to-dos for the week, store them in the Firebase Realtime Database.

    - You can use the dialog.open method of the Slack API to open a dialog with the user, prompting them to enter their to-dos for the week.

     In the dialog submission handler, you can store the user's to-dos in the Firebase Realtime Database.

5. When a reminder message is sent, query the Firebase Realtime Database for the user's to-dos for that day and send them in the reminder message.

    - In the scheduled function for the reminder message, you can query the Firebase Realtime Database for the user's to-dos for that day and include them in the message.

6. Use the Slack API to create a checkbox UI element for each to-do.

    - You can use the `chat.postMessage` method of the Slack API to send a direct message to the user with a checkbox UI element for each to-do.

    - You can use the blocks parameter of the `chat.postMessage` method to create a checkbox UI element for each to-do.

7. When a user marks a to-do as done through the checkbox UI, update the Firebase Realtime Database to mark the corresponding to-do as completed.

    - You can use the `views.update` method of the Slack API to update the checkbox UI element and indicate that the corresponding to-do has been completed.

    - You can use the `block_actions` event in the Slack API to capture the user's interaction with the checkbox UI element and update the Firebase Realtime Database accordingly.

8. At the end of the week, calculate the percentage of completed to-dos and send a report to the user through a direct message.

    - You can use the `chat.postMessage` method of the Slack API to send a direct message to the user with their percentage of completed to-dos.
