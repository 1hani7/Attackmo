<template>
    <div id="app" class="wrap">
      <div id="login_box">          
          <div id="title">
              <label>로그인</label>
          </div>
              <form @submit.prevent="login" id="content">
                  <input type="email" placeholder="이메일" v-model="user_email" id="email-new">
                  <input type="password" placeholder="비밀번호" v-model="user_pw" id="pw-new">
                  <button type=submit @click="login()" id="login_bt">로그인</button> 
              
                    <div id="find">
                        <label><RouterLink to="./FindE">ID</RouterLink><RouterLink to="./FindP">/PW찾기</RouterLink></label>
                        <label><RouterLink to="./SignUp">회원가입</RouterLink></label>
                    </div>
              </form>
              <div id="social_login">
                  <a @click="openWindow('https://www.facebook.com/?locale=ko_KR')" id="facebook" class="social_bt">
                    <img src="../images/facebook.png"></a>
                  <a @click ="openWindow('https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D')" 
                    id="twitter" class="social_bt"><img src="../images/twitter.svg"></a>
                  <a @click="openWindow('https://www.instagram.com/accounts/login/')" 
                    id="instagram" class="social_bt"><img src="../images/instagram.png"></a>
              </div>
      </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

  const firebaseConfig = {
      apiKey: "AIzaSyC_4wWcRfgtT-dVPlL7BsjBMWbO0F2z7xc",
      authDomain: "attackmo-86940.firebaseapp.com",
      projectId: "attackmo-86940",
      storageBucket: "attackmo-86940.appspot.com",
      messagingSenderId:  "375478701538",
      appId: "1:375478701538:web:c22eea3ee90ff0b813fdbb"
    };
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

export default {
  data() {
    return {
      user_email: "",
      user_pw: "",
    };
  },
  methods: {
    login() {
      const email = this.user_email;
      const password = this.user_pw;
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // 인증 성공 시, 다른 페이지로 리디렉션 할 수 있습니다.
          const user = userCredential.user;
          this.$router.push("/"); // // 대시보드 페이지 또는 다른 페이지로 리디렉션
        })
        
        .catch((error) => {
          // Authentication failed, handle the error
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Authentication error:", errorCode, errorMessage);
        });
        
    },
    openWindow(linkUrl) {
      window.open(linkUrl, "_blank", "width=600,height=600");
    },
  },
};
// import { inject } from 'vue';
// import { useRouter } from 'vue-router';


// export default {
//   setup(){
//     const isLogin = inject('isLogin');
//     const loginToggle = inject('loginToggle');
//     const router = useRouter();

//     const login = () =>{
//       loginToggle();
//       router.go(-1);
//     };
//     return { login,isLogin }
//   },methods:{
//     openWindow(linkUrl){
//       window.open(linkUrl,'_blank','width=600 height=600');
      
//     }
//   }
// }
</script>
<style scoped>

    a{color:black;cursor:pointer}

    .wrap{
        display: flex;
        padding-top: 150px;
        padding-bottom:150px;
        flex-direction: column;
        align-items: center;
        gap: 150px;
        margin:0 auto;
    }
    #title{
        display: flex;
        width: 830px;
        height: 136px;
        padding: 41px 0px 41px 40px;
        align-items: center;
        gap: 10px;
        border: none;
        background: #F9C041;
        font-size: 23px;
        font-weight: 700;
        color:white;
    }
    #login_box{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        height: 719px; 
    }
    #content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }
    #content input{
        display: flex;
        width: 831px;
        height: 85px;
        padding: 20px;
        outline: none;
        align-items: center;
        gap: 10px;
        font-size: 23px;
        font-weight: 700;
    }
    #login_bt{
        width: 831px;
        height: 85px;
        padding: 25px 368px;
        font-size: 23px;
        border-radius: 8px;
        background: #F9C041;
        border:none;
        color:white;
    }
    #login_bt:hover{cursor: pointer;}
    #social_login{
        display: flex;
        justify-content: space-around;
    }
    .social_bt{
        font-size: 20px;
        width: 108px;
    }
    .social_bt img{ 
        width: 50px;
        height:50px;
    }
    #find{
        display: flex;
        align-items: flex-start;
        gap: 11px;
    }
    #find label{font-size: 17px;color:#7A7979;}
    a{text-decoration: none;}
    
    /*반응형*/
    @media (max-width:1194px) {
      .wrap {
        width: 834px;
        height: 800px;
      }
      #title{
        display: flex;
        width: 433px;
        height: 76px;
        padding: 41px 0px 41px 40px;
        align-items: center;
        gap: 10px;
        align-self: stretch;
      }
      #content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
      #content input{
        display: flex;
        width: 430px;
        height: 67px;
        padding: 20px;
        outline:none;
        
      }
      #login_bt{
        width:100%;
        height: 67px;
        padding: 10px 40px;
      }
      #login_bt:hover{cursor: pointer;}
      #social_login{
        width: 278px;
        height: 77px; 
      }
      .social_bt img{ 
        width: 50px;
        height: 50px; 
      }
      #find label{font-size: 17px;color:#7A7979;}
      a{text-decoration: none;}
  }

  @media (max-width: 490px) {
    .wrap{width:100%;margin-top:0px; margin-bottom:0px;}
    #login_box{width:90%;}
    #title{width:100%;}
    #content input{width:100%;outline:none;}
    #login_bt{width:100%;}
    .social_bt img{width:50%;}
  }
</style>