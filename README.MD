# celestials.id

Celestials are modular usernames that natively simplify how users and developers interact with and across different networks with Celestia underneath and beyond.

## About
This is a repository for the Celestials MetaMask snap which adds a ```onNameLookup``` to handle incoming name lookup requests from the MetaMask client.

## Celestials Snap Development and Testing
0. Install MetaMask Flask: https://chromewebstore.google.com/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk
1. Clone repository: ```git clone git@github.com:celestials-id/celestials-snap.git```
2. Install dependencies: ```npm i```
3. Run snap in the development mode: ```npx mm-snap watch```
4. Navigate to any window in Chrome and run the following in the console:
```
window.ethereum.request({
    "method": "wallet_requestSnaps",
    "params": {
        "local:http://localhost:8080": {}
    }
})
```
