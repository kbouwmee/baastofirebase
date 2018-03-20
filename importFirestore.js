const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./service-key.json");
var config = require('./config.js');

module.exports.import = function (data) {
	
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://"+config.firestore.db+".firebaseio.com"
	});

	data & Object.keys(data).forEach(key => {
		const nestedContent = data[key];

		if(typeof nestedContent == "object") {
			Object.keys(nestedContent).forEach(docTitle => {
				admin.firestore()
					.collection(key)
					.doc(docTitle)
					.set(nestedContent[docTitle])
					/*.then((res) => {
						console.log("Document successfully written!");
					}) */
					.catch((error) => {
					console.error("Error writing document: ", error);
					});
			});
		}
	});
	console.log("done.");
}
