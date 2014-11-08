var myDataRef = new Firebase('https://pitchstarter.firebaseio.com//');
var usersRef = myDataRef.child("users");
var videosRef = usersRef.child("videos");