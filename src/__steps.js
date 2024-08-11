/**
 * 
 * /**
 * initial setup
 *

 1.visit: console.firebase.google.com
 2. Create a project ( skip google analytics)
 3.register web app ( create config)
npm install firebase
 4. Create firebase.init.js file ( import firebase)
 5. export app from firebase.init.js
 6. import getAuth from firebase/auth

 Intigration

 7. visit: go to docs > build > authentication > web > get started
 8. export getAuth from firebase/auth
 9. create const auth = getAuth(app);

Provider 

 10. create const provider = new GoogleAuthProvider();
 11. use signInWithPopup and pass auth and provider
 12. activate sign in method (google, facebook, github, twitter)
 13. vite: change 127.0.0.1 to localhost
 14. set the signOut method to signOut(auth)

 gitlogin set up 

15. activate the auth provider (create app , provide redirect url, client id and client secret) get it form github settings > developer settings > create new app
 16.
 */