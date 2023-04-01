// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Get a reference to the notepad content
  var notepadRef = database.ref('notepad');

  

  notepadRef.on('value', function(snapshot) {
    var content = snapshot.val();
    document.getElementById('notepad').innerHTML = content;
  });

  
  document.getElementById('notepad').addEventListener('input', function() {
    var content = this.innerHTML;
    notepadRef.set(content);
  });
  