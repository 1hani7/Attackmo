<template>
    <div id="wrap">
        <form @submit.prevent="submitForm" id="find_box">
             <h1>이메일 찾기</h1>
             <div id="phone">
                <label>휴대폰번호</label>
                <div id="num">
                  <input v-model="formData.number" type="number" name="number" placeholder="010" >-<input type="number" name="number" >-<input type="number" name="number">
                  <!-- <input v-model="formData.number" type="number" name="number" placeholder="010" > -->
                </div>       
             </div>
                <div id="button_box">
                    <button @click="find" type="submit" id="find_e" class="fe_bt">이메일 찾기</button>
                </div>
                <div id="find">
                    <label>본인인증찾기</label>
                    <p>본인 인증 시 제공되는 정보는 해당 인증 기관에서 직접 수집하며, 인증 이외의 용도로 이용 또는 저장되지 않습니다.</p>
                </div>
                <div id="find_bt">
                    <button @click="sign" type="submit" id="mine">본인인증찾기</button>
                </div>  
        </form>    
    </div> 
</template>

<script>
export default {
  data() {
    return {
      formData: {
        number: "",
      },
      submittedData: [], // 입력된 데이터를 저장할 배열
    };
  },
  methods: {
      find() {
      // 이메일 찾기 버튼을 눌렀을 때 휴대폰 번호를 submittedData 배열에 저장
      this.submittedData.push({
        number: this.formData.number,
      });
      console.log(this.submittedData);
      alert("문자를 확인해주세요");
    },
    sign() {
      alert("본인인증찾기 완료");
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
    #wrap{
        display: flex;
        margin-top: 150px;
        margin-bottom:150px;
        flex-direction: column;
        align-items: center;
    }
    #find_box{
        padding: 73px 80px;
        flex-direction: column;
        align-items: center;
        gap: 53px;
        display: flex;
        width:1000px;
    }
    #phone{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        width: 831px;
    }
    #phone label{font-size: 23px;font-weight: 700;}
    #phone input{
        width: 820px;
        height: 60px;
        padding:20px;
        border-radius: 10px;
        outline:none;    
    }
    #num{ 
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        gap:32px;
    } 
    #find_e{    
        width: 831px;
        height: 85px;
        border-radius: 10px;
        background: #F9C041;
        border:none;
        color:white; 
        font-weight:700;
        font-size:23px;
    }
    #find{
        width:830px;
    }
    #find label{font-size:30px;font-weight: 700;}
    #find p{font-size:16px;font-weight: 400;color:#7A7979;}
    #mine{ 
        width: 335px;
        height: 85px;
        padding: 24px 84px;
        border:none;
        color:white; 
        border-radius: 10px;
        background: #F9C041;
        font-size:23px;
        font-weight: 700;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
@media (max-width:1194px) {
   #wrap{width:100vw;}
   #find_box{width: 100%;}
   #find{width:100%;}
   #phone{width:100%;}
   #phone input{width:100%;}
   #find_e{width:660px;} 
}
@media (max-width:490px) {
  #wrap{width:calc(100vw-30px);font-size: 17px;}
  #find{width:90%;}
  #find_e{width:90vw;}
  #mine{height:80%;width:90vw;}
  #find_box{width: 100%;padding:0px;margin:0px;} 
  #phone{width:90%;}
  #phone input{width:90%;margin:0px;padding:20px;}
}

</style>