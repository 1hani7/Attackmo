<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <div id="app" class="wrap">
        <form @submit.prevent="submitForm" id="sign_box">
             <h1>회원가입</h1>
             <div id="email">
                <label><i class="bi bi-asterisk"></i>이메일</label>
                <input type="email" class="form-control" v-model="email">
             </div>
             <div id="pw">
                <label><i class="bi bi-asterisk"></i>비밀번호</label>
                <input type="password" class="form-control"  v-model="password">
             </div>
             <div id="pw_ck">
                <label><i class="bi bi-asterisk"></i>비밀번호 확인</label>
                <input type="password" class="form-control" v-model="password2">
                <p>비밀번호는 6자리 이상의 영문과 숫자에 조합하여야합니다</p>
             </div>
             <div id="nickname">
                <label><i class="bi bi-asterisk"></i>활동명</label>
                <input type="text" class="form-control" name="n_name" id="aname"  v-model="n_name">
             </div>
             <div id="phone">
                <label><i class="bi bi-asterisk"></i>휴대폰번호</label>
                <div id="num">
                  <input type="number" name="number" id="number1" placeholder="010">
                  -<input type="number" name="number" id="number2" >
                  -<input type="number" name="number"  id="number3" >
                </div>       
             </div>
             <div id="button_box">
                <button type="submit" id="sign" class="bt">가입하기</button>
                <button type="button" id="cancel" class="bt">취소</button>
             </div>
        </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from 'vue-router';
 
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
  setup() {
    const email = ref("");
    const password = ref("");
    const password2 = ref(""); // 비밀번호확인
    const n_name = ref(""); // 활동명 변수 추가
    const router = useRouter();

    const goBack = () => router.go(-1);

    const register = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log("등록 성공:", userCredential);
        alert("가입완료");
        // 이후 로그인 페이지로 리다이렉트 등의 동작 수행
        router.push('/login'); // 로그인 페이지 경로로 리다이렉트
      } catch (error) {
        console.error("등록 실패:", error);
        alert("가입 실패: " + error.message);
        router.push('/SignUp'); // 페이지 그대로
      }
    };
     // checkMail 함수 추가
     const checkMail = (mail) => {
      const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
      if (!emailRegExp.test(mail)) {
        alert("이메일 형식이 올바르지 않습니다!");
        return false;
      }
      return true;
    };
    // checkPassword 함수 추가
      const checkPassword = (password, password2) => {
        if (password !== password2) {
          alert("비밀번호가 맞지않습니다");   
          return false;
        }
        if (password.length < 6) {
          alert("비밀번호는 6자리 이상이어야 합니다.");
          return false;
        }
        return true; // 확인이 완료되었을 때
      };
      //활동명
      const checkName = (n_name) => {
      if (!n_name) {
        alert("활동명을 입력해주세요!");
        return false;
      }
      const nameRegExp = /^[가-힣]{2,4}$/;
      if (!nameRegExp.test(n_name)) {
        alert("이름이 올바르지 않습니다.");
        return false;
      }
      return true;
    };
    const submitForm = () => {
      if (checkMail(email.value) && checkPassword(password.value, password2.value) && checkName(n_name.value)) {
        // 모든 유효성 검사 통과한 경우에만 등록 수행
        register();
      }
    };

    return {
      email,
      password,
      password2,
      n_name, // 활동명 변수 추가
      goBack,
      register,
      checkMail, // checkMail 함수를 setup에서 반환
      checkPassword,
      checkName,
      submitForm,

    };
  },
};
</script>
<style scoped>
    .wrap{
        display: flex;
        padding-top: 103px;
        padding-bottom:103px;
        flex-direction: column;
        align-items: center;
        gap: 150px;
    }
    h1{text-align: center;}
    #sign_box{
      display: flex;
      width: 1000px;
      padding: 50px 41px;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 49px 42px;
      flex-wrap: wrap;
    }
    #email,#pw,#pw_ck,#nickname{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    #email input,#pw input,#pw_ck input,#nickname input{
        width: 916px;
        height: 75px;
        outline:none;
        padding:20px;
        font-size: 23px;
    }
    #pw_ck p{
        display: flex;
        width: 918px;
        height: 75px;
        padding: 22px 135px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: #F9C041;
        color:white;
        font-weight: 700;
        font-size: 23px;
        margin-top:10px;
    }
    #phone{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:20px;
    }
    #num{ 
        width: 915px;
        display: flex;
        align-items: center;
        gap:50px;
    }
    #num input{
        width: 918px;
        height: 75px;
        padding: 20px;
        font-size: 15px;
        outline:none;
    }
    label{font-size: 23px;font-weight: 700;}
    label i {font-size: 23px;color:#B91646;}
    #button_box{
        display: flex;
        width:100%;
        padding: 25px 368px;
        justify-content: center;
        align-items: center;
        gap: 42px;
    }
    .bt{
        display: flex;
        width: 433px;
        height: 66px;
        padding: 21px 152px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        color:white;
        border:none;
        font-size: 23px;
        font-weight: 700;
        cursor: pointer;
    }
    #sign{ background: #F9C041;}
    #cancel{ background:  #B91646;}
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @media (max-width:1194px) {
     .wrap,#sign_box,#email,#pw{width:100%;}
     #email input,#pw input,#pw_ck input,#nickname input{width:100%;}
     #pw_ck,#nickname,#phone,#num{width:100%;}
     #pw_ck p{width:100%;font-size: 17px;}
     #num input{width:100%;}
     #button_box{width:100%;}
     #button_box button{width:350px;padding:0px;}
     input{outline:none;}
    }
    @media (max-width:490px) {
      input{outline:none;}
      label, .bi-asterisk{font-size: 17px;}
      .wrap{width:calc(100vw - 30px);
        padding:0px;margin:0px;}
      #sign_box,#email,#pw{width:100%;}
      #email input,#pw input,#pw_ck input,#nickname input{width:100%;}
      #pw_ck,#nickname,#phone{width:100%;}
      #pw_ck p{width:100%;font-size:13px;padding:0px;}
      #button_box{width:100%;}
      #button_box button{width:130px;font-size: 17px;}
      #num{margin:0px;padding:0px;width:20%;}
      #num input{width:70px;}
}
  
    
</style>