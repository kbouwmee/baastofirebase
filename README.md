# BaaS to Firestore migration

This tool was created to help  migrate data from BaaS to a Firestore database.

## How to install
Download or clone this repository.
```
git clone https://github.com/kbouwmee/baastofirebase.git
```

Install npm packages:
```
npm install
```

### Firestore Service Account
You need to export a private key for a service account from FireStore and place it in file `service-key.json`. Get serviceAccount JSON file from Project Setting > SERVICE ACCOUNTS in Firebase Console. [See here for some screenshots](https://hackernoon.com/filling-cloud-firestore-with-data-3f67d26bd66e).

### Configuration
Create and edit a `config.js` file to make some settings. The following configuration items are supported:
```
// BaaS org name to copy from
config.baas.org = 'demoorg';
// BaaS app name to copy from
config.baas.app = 'demoapp';
// BaaS org client_id
config.baas.client_id = '12334567890';
// BaaS org secret
config.baas.secret = '0987654321';
// filter attributes list:  these attributes will NOT be migrated
config.baas.filterAttributes = ['uuid', 'type', 'metadata'];

config.firestore = {};
// Firestore DB name
config.firestore.db = 'test-db-1234';

module.exports = config;
``` 

## Running the tool
To execute the migration:
```
node index.js
```


