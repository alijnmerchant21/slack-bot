# Flow of Slack

## Natural steps

- Every monday the Slack Bot sends a DM saying please fill your To Dos for the week.

- Then everyday till Friday on each day the bot will send me a message saying -
*Tuesday: Here are things you need to do.*
*Wednesday: Here are things you need to do.*
.
.

- Then end of the week it will send a report - you completed x% task. etc

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

## Todo

- [ ] Set up a development environment with the necessary libraries and tools, such as Python, Slack SDK, Firebase Admin SDK, and apscheduler.

- [ ] Create a new Slack bot and obtain a bot token.

- [ ] Set up a Firebase project and create a new Firebase Realtime Database instance for the Slack bot.

- [ ] Write code to authenticate with the Slack API and obtain a reference to the Firebase Realtime Database.

- [ ] Write code to use the Slack API to send a direct message to the user on Monday asking them to fill out their to-dos for the week.

- [ ] Write code to use a scheduler library (such as apscheduler) to schedule messages to be sent every day from Tuesday to Friday, reminding the user of their to-dos for that day.

- [ ] Write code to create a new Firebase Realtime Database instance for each user, and use the user's Slack ID as the key for their instance.

- [ ] Write code to store the user's to-dos as a list of objects, with each object containing the to-do text and a boolean flag indicating whether it has been completed.

- [ ] Write code to use the Slack API to open a dialog with the user, prompting them to enter their to-dos for the week.

- [ ] Write code to store the user's to-dos in the Firebase Realtime Database when they submit the dialog.

- [ ] Write code to query the Firebase Realtime Database for the user's to-dos for that day and include them in the reminder message.

- [ ] Write code to use the Slack API to create a checkbox UI element for each to-do.

- [ ] Write code to update the Firebase Realtime Database when a user marks a to-do as done through the checkbox UI.

- [ ] Write code to calculate the percentage of completed to-dos at the end of the week and send a report to the user through a direct message.

- [ ] Test the bot thoroughly to ensure that it works as expected and handles all possible edge cases.

- [ ] Deploy the bot to a production environment and monitor it to ensure that it continues to function correctly.

## Steps for creating a Slack Bot

### Prerequisites

#### Before creating the bot, you'll need to have the following**

1. A Slack account with administrator access

2. A Slack workspace where you can create and install the bot.

3. Python 3.x installed on your system.

4. A Firebase account with a project created.

5. The slack-sdk, firebase-admin, and apscheduler Python libraries installed.

### Steps

#### Create a new Slack bot

1. Go to the Slack App Dashboard and create a new app.

2. Under the "Add features and functionality" section, select "Bots".

3. Click on "Add a Bot User" and give the bot a display name and default username.

4. Save the bot's token for later use.

#### Set up Firebase Realtime Database

1. Go to the Firebase Console and create a new project.

2. In the project dashboard, click on "Develop" and select "Database".

3. Choose "Realtime Database" and select your preferred location.

4. Choose "Start in test mode" for now and click "Enable".

5. Go to the "Service Accounts" tab and generate a new private key. Save the key file for later use.

6. Go to the "Rules" tab and set the read and write rules to true for now.

#### Install the required Python libraries

```bash
pip install slack-sdk firebase-admin apscheduler
```

#### Write the code for the bot

#### Save the code in a file named app.py

#### Set the environment variables

```bash
export SLACK_BOT_TOKEN="your-bot-token-here"
```

#### Run the bot

### Testing the Bot

**To test the bot, follow these steps:**

1. Invite the bot to a Slack channel by mentioning its username.

2. The bot will send you a direct message asking you to fill out your to-dos for the week.

3. Click on the "Add to-dos" button in the message and fill out the dialog.

4. The bot will store your to-dos in Firebase Realtime Database.

5. From Tuesday to Friday, the bot will send you a reminder message with your to-dos for that day and a checkbox UI to mark them as done.

6. When you mark a to-do as done, the bot will update Firebase Realtime Database.

7. At the end of the week, the bot will send you a direct message with the percentage of completed to-dos.

### Advance

**While adding Todos, you input estimated time to finish it. Then you also add priority for the task. Then the app connects to your calendar and automatically makes place for that app to be done during the week.**

1. Enhance the to-do list data structure to include estimated time and priority for each to-do.

2. Write a function to calculate the total estimated time for the to-dos for each day of the week.

3. Write a function to query the user's calendar API to find available time slots for each day of the week.

4. Write a function to schedule the to-dos in the available time slots, taking into account the priority of each to-do.

5. Modify the reminder message to include the schedule for the day.
