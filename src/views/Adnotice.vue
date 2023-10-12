<template>
    <div id="wrap">
        <form @submit.prevent="uploadData" id="admin">
            <label>공지사항(관리자)</label>
            <div id="title">
                <label>제목</label>
                <input type="text" v-model="title" placeholder="제목을 입력해주세요">
            </div>
            <div id="notice">
                <label>내용</label>
                <textarea v-model="content"></textarea>
            </div>
            <div id="button_box">
                <button  id="cancel" class="bt">취소</button>
                <button  id="check" class="bt">등록하기</button>
            </div>
        </form>
      
    </div>
</template>
<script> 
// import data from '../data/notice.js'
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
const noticeCollection = collection(db, "Adnotice");

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
            //data: data,
            title: "",
            content: ""
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
            this.router.push('/NoticeList');
        },
        // write() {
        //     this.data.push({
        //         title: this.title,
        //         writer: this.writer,
        //     })
        //     this.$router.push({
        //         path:"/NoticeList"
        //     })
        // }
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
        display: flex;
        padding: 23px 20px;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        display: flex;
        font-size: 26px;
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
        padding:20px;
        font-size: 23px;
        
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
    #cancel{color:red;}
    #check{background:red;color:white;}
    label{font-size:23px;font-weight: 700;}
    
</style>