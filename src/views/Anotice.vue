<template>
    <div id="wrap">
        <form @submit.prevent="uploadData" id="admin">
            <label>작성하기</label>
            <div id="title">
                <label>제목</label>
                <input type="text" v-model="title" placeholder="제목을 입력해주세요">
            </div>
            <div class="file_box">
                <label>첨부파일</label>
                <input type="file" accept =".gif, .jpg, .png" name="file" id="file" @change="handleFileChange">
                <p>*gif,jpg,png 선택 가능합니다</p>
            </div>
            <div id="notice">
                <label>내용</label>
                <textarea v-model="content"></textarea>
            </div>
            <div id="button_box">
                <button type=button id="cancel" class="bt">취소</button>
                <button type="submit" id="check" class="bt">등록하기</button>
            </div>
        </form>
    </div>
</template>
<script> 
// import data from '../data/data.js'

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useRouter } from 'vue-router';

const firebaseConfig = {
  apiKey: "AIzaSyC_4wWcRfgtT-dVPlL7BsjBMWbO0F2z7xc",
  authDomain: "attackmo-86940.firebaseapp.com",
  projectId: "attackmo-86940",
  storageBucket: "attackmo-86940.appspot.com",
  messagingSenderId: "375478701538",
  appId: "1:375478701538:web:c22eea3ee90ff0b813fdbb"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const noticeCollection = collection(db, "Anotice");

export default {
    setup(){
        const router = useRouter();
        return {
            router,
        };
    },
    name: 'Create',
    data() {
        return {
            // data: data,
            writer: "",
            title: "",
            content: "",
            file: null  // 'file' 속성을 정의합니다.
        }
    },
    methods: {
        async uploadData() {
            try {
                const docRef = await addDoc(noticeCollection, {
                title: this.title,
                content: this.content,
                });
                console.log("Document written with ID: ", docRef.id);

            // 업로드가 완료되면 알림 표시
            window.alert("업로드가 완료되었습니다!");
            } catch (error) {
                console.error("Error adding document: ", error);
            }
            this.router.push('/AskMe');
        },
        handleFileChange(event) {
            // 파일 변경 이벤트를 처리하고 선택한 파일을 저장합니다.
            this.file = event.target.files[0];
        },
        // write() {
        //     this.data.push({
        //         Number:this.Number,
        //         title: this.title,
        //         writer: this.writer,
        //         file:this.file,
        //     })
        //     this.$router.push({
        //         path:"/AskMe"
        //     })
        // },
    }
}      
</script>

<style scoped>
    #wrap{
        display: flex;
        flex-direction: column;
        align-items: center; 
    }
    #admin{
        display: flex;
        margin-top: 50px;
        margin-bottom:200px;
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
        width:1000px;
    }
    #title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width:100%;
    }
    #title input{
        font-size: 26px;
        outline:none;
        padding:20px;
        width:1000px;
    }
    .file_box{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        font-size: 17px;
    }
    .file_box p{width:100%;color:blue;font-weight: 700;font-size: 15px;}
    input[type=file]::file-selector-button {
        width: 99px;
        height: 33px;
        background: #fff;
        border-radius: 30px;
        border:1px solid black;
    }
    #notice{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width:100%;
    }
    #notice textarea{
        display: flex;
        gap: 20px;
        align-self: stretch;
        height: 436px;
        width: 100%;
        outline:none;
        padding:20px;
        font-size:23px;
        
    }
    #button_box{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        width:100%;
    }
    .bt{
        border-radius: 8px;
        border:1px solid red;
        display: flex;
        width: 100px;
        padding: 7px 0px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: none;
        font-size:15px;
        font-weight: 400;
        cursor: pointer;
    }
    #cancel{color:red;background:white;}
    #check{background:red;color:white;}
    label{font-size:23px;font-weight: 700;}
    

@media (max-width:1194px) {
  #wrap{width:100%;}
  #admin{width:90%;}
  #title{width:100%;}
  #title input{width:100%;}
}
@media (max-width:490px) { 
  #wrap{width:100%;}
  #admin{width:90%;}
  #title{width:100%;}
  #title input{width:100%;}
}
</style>