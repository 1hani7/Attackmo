<template> 
    <div id="app" class="container mt-3">
      <div class="mb-3">
        <input type="email" class="form-control" placeholder="email" v-model="email">
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="pw" v-model="password">
      </div>
      <button type="submit" @click="register" class="btn btn-primary">가입하기</button>
    </div>
  </template>
  
  <script>

import { initializeApp } from "firebase/app";
import "firebase/auth"; //firebase 인증모듈을 로드합니다.

    export default {
        data() {
        return {
            email: '',
            password: ''
        };
        },
        methods: {
        register() {
            const email = this.email;
            const password = this.password;
    
            firebase.auth().createUserWithEmailAndPassword(email, password)//이곳에서 firebase함수를 호출할 수 있어야 한다.
            .then((result) => {
                console.log("등록 성공:", result);
                alert("가입완료");
            })
            .catch((error) => {
                console.error("등록 실패:", error);
                alert("가입 실패: " + error.message);
            });
        }
        },
    created() {
        // // // Your web app's Firebase configuration
        // const firebaseConfig = {
        //     apiKey: "AIzaSyBO4AWYpbBL-7I8mWm9F4VrP-i0O3D-5y0",
        //     authDomain: "pjsecond-4e01a.firebaseapp.com",
        //     projectId: "pjsecond-4e01a",
        //     storageBucket: "pjsecond-4e01a.appspot.com",
        //     messagingSenderId: "18653238368",
        //     appId: "1:18653238368:web:16b5bf548ada141b4f5f05"
        // };

        // // Initialize Firebase
        // initializeApp(firebaseConfig);
        // }
        function loadFirebaseScript(callback) {
            const firebaseScript = document.createElement("script");
            firebaseScript.src = "https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js";
            firebaseScript.addEventListener("load", callback);
            document.body.appendChild(firebaseScript);
            }

            // 사용할 컴포넌트에서 Firebase 스크립트 로드
            loadFirebaseScript(() => {
            // Firebase 초기화 코드
            const firebaseConfig = {
                apiKey: "AIzaSyBO4AWYpbBL-7I8mWm9F4VrP-i0O3D-5y0",
                authDomain: "pjsecond-4e01a.firebaseapp.com",
                projectId: "pjsecond-4e01a",
                storageBucket: "pjsecond-4e01a.appspot.com",
                messagingSenderId: "18653238368",
                appId: "1:18653238368:web:16b5bf548ada141b4f5f05"
            };
            firebase.initializeApp(firebaseConfig);

            // 나머지 Firebase 관련 코드
            });
        }

    };
  </script>
  