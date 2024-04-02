// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUXDi1a-6yV-EjOpxHAa5AnY7YDjetjB4",
  authDomain: "portofolio-8ce19.firebaseapp.com",
  projectId: "portofolio-8ce19",
  storageBucket: "portofolio-8ce19.appspot.com",
  messagingSenderId: "823148744151",
  appId: "1:823148744151:web:75ec576497f7c9441f0f92",
  measurementId: "G-64W0X9BXG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase is successfully initialized!");

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 80,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#afafaf"
		},
		"shape": {
			"type": "circle"
		},
		"opacity": {
			"value": 1,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false
			}
		},
		"line_linked": {
			"enable": false
		},
		"move": {
			"enable": true,
			"speed": 1,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false
			}
		}
	},
	"retina_detect": true
});



