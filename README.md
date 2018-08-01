# react-node-wordfrequencycounter

Front end(developed in React) accepts a number N , On entering a value request will be sent to the backend(NodeJs and ExpressJS).
From backend file will be fetched from remote host and calculations will be done and it will return the top N most frequently occurring words in file.
Results will be shown in table format on front end.

## Getting Started

Clone the repository in your local machine.


Install dependencies for server

```
npm install
```
Install dependencies for client

```
cd client
npm install
```
### Server

Run server by following command

```
npm run server
```

### Client

Run client by following command

```
npm start
```

## Libraries/Plugins used

* [validator.js](https://www.npmjs.com/package/validator) - A library of string validators and sanitizers.
* [body-parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [Request ](https://www.npmjs.com/package/request) - Simplified HTTP client.

## Screenshots

* Home Screen
<img src="https://user-images.githubusercontent.com/20276545/43505374-5f021260-9584-11e8-892f-921ff25936d2.png" />

* Validation Checks 
<img src="https://user-images.githubusercontent.com/20276545/43505370-5e6c8e70-9584-11e8-8272-02ad6e749278.png" />
<img src="https://user-images.githubusercontent.com/20276545/43505371-5e9cd242-9584-11e8-8ae8-b74a567fe3bc.png" />
<img src="https://user-images.githubusercontent.com/20276545/43505372-5ece1d84-9584-11e8-9d8b-83b376639d47.png" />

* Results
 <img src="https://user-images.githubusercontent.com/20276545/43505368-5e019e6c-9584-11e8-8b2f-875170797811.png" />
<img src="https://user-images.githubusercontent.com/20276545/43505369-5e36c0b0-9584-11e8-9132-f07f4806a4af.png" />
