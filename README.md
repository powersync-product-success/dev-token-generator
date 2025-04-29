# Dev Token Generator

This repo allows you to generate a token that can be used to validate a connection with a PowerSync connection.

## Setup

1. This repo uses Node.js so make sure to install Node.js on your machine using nvm and run `nvm use` or just make sure to 
install Node.js >= 22.14.0

2. Create a new `.env` file with the following properties
```dotenv
SHARED_SECRET=
USER_ID=
KID=
```

3. Install the dependencies
```shell
npm install
```

## Run the app
1. Run the following command in the terminal
```shell
npm run start
```
This will print the token in the console, you can copy and paste this into your client app in the `fetchCredentials` 
function which returns a token and a PowerSync endpoint.
