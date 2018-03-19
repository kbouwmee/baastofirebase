# BaaS to Firestore migration utility

This tool was created to quickly migrate data from BaaS to a Firestore database.

## Configuration
Please create and edit a config.js file to make some settings. The following configuration items are supported:
```
config.baas.org = 'demoorg';
config.baas.app = 'demoapp';
config.baas.client_id = '12334567890';
config.baas.secret = '0987654321';
// filter attributes list:  these attributes will NOT be migrated
config.baas.filterAttributes = ['uuid', 'type', 'metadata'];

config.firestore = {};
config.firestore.db = 'test-db-1234';

module.exports = config;
``` 

## Firestore Service Account
You need to export a private key for a service account from FireStore and place it in file service-key.json. Get serviceAccount JSON file from Project Setting > SERVICE ACCOUNTS in Firebase Console

## Install
Download or close this repository.
```
git clone https://github.com/kbouwmee/baastofirebase.git
```

Install npm packages:
```
npm install
```

## Running the tool
To execute the migration:
```
node index.js
```


