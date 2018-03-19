const baas = require("./exportBaaS.js");
const firestore = require("./importFirestore.js");
const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./service-key.json");
const config = require("./config.js");
const fs = require("fs");

console.log("BaaS migration tool");

baas.export(function(data) {
		fs.writeFile("./data.json", JSON.stringify(data), 'utf8', function(err) {
                	if(err) throw err;
                	console.log('4. Saved data.json!');
        	});
//		firestore.import(data);
	}
);
