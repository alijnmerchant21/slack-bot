# Steps for creating a Slack Bot

## Prerequisites

### Before creating the bot, you'll need to have the following

1. A Slack account with administrator access

2. A Slack workspace where you can create and install the bot.

3. Python 3.x installed on your system.

4. A Firebase account with a project created.

5. The slack-sdk, firebase-admin, and apscheduler Python libraries installed.

## Steps

### Create a new Slack bot

1. Go to the Slack App Dashboard and create a new app.

2. Under the "Add features and functionality" section, select "Bots".

3. Click on "Add a Bot User" and give the bot a display name and default username.

4. Save the bot's token for later use.

### Set up Firebase Realtime Database

1. Go to the Firebase Console and create a new project.

2. In the project dashboard, click on "Develop" and select "Database".

3. Choose "Realtime Database" and select your preferred location.

4. Choose "Start in test mode" for now and click "Enable".

5. Go to the "Service Accounts" tab and generate a new private key. Save the key file for later use.

6. Go to the "Rules" tab and set the read and write rules to true for now.

### Install the required Python libraries

```bash
pip install slack-sdk firebase-admin apscheduler
```

### Write the code for the bot

### Save the code in a file named app.py

### Set the environment variables

```bash
export SLACK_BOT_TOKEN="your-bot-token-here"
```

### Run the bot

## Testing the Bot

**To test the bot, follow these steps:**

1. Invite the bot to a Slack channel by mentioning its username.

2. The bot will send you a direct message asking you to fill out your to-dos for the week.

3. Click on the "Add to-dos" button in the message and fill out the dialog.

4. The bot will store your to-dos in Firebase Realtime Database.

5. From Tuesday to Friday, the bot will send you a reminder message with your to-dos for that day and a checkbox UI to mark them as done.

6. When you mark a to-do as done, the bot will update Firebase Realtime Database.

7. At the end of the week, the bot will send you a direct message with the percentage of completed to-dos.

## Advance

**While adding Todos, you input estimated time to finish it. Then you also add priority for the task. Then the app connects to your calendar and automatically makes place for that app to be done during the week.**

1. Enhance the to-do list data structure to include estimated time and priority for each to-do.

2. Write a function to calculate the total estimated time for the to-dos for each day of the week.

3. Write a function to query the user's calendar API to find available time slots for each day of the week.

4. Write a function to schedule the to-dos in the available time slots, taking into account the priority of each to-do.

5. Modify the reminder message to include the schedule for the day.
