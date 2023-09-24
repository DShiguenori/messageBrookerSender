The repo name have a typo... yeah...

# MessageBrokerSender

This mini-project is used to send hard-coded messages to an Azure Service Bus topic.
It's highly customized for my needs.
Feel free to copy it and edit it.

## How to Config and RUN

### 0. What you'll need

Microsoft Azure account with a service bus service configured with a TOPIC (you can work with a queue as well)

Last I remember, the topic is available in the Premium tier, but it is not that expensive...

You'll need nodeJs installed as well, you know the drill.

### 1. Setup the config files

Look at the **example-.env** and **example-destination.json**

Put both of these files in the root, without the **example-** tag

-   .env
-   destination.json

Modify then accordingly.

### 2. Commands

Restore the packages:

```bash
npm install

```

Run

```bash
npm run start
```
