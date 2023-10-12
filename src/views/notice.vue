<template>
    <div id="wrap">
        <div id="nwrite">
            <p>공지사항</p>
            <label>공지 확인 부탁드립니다.</label>        
        <div class="writer">
            <p>관리자</p><p>{{ getCurrentDate() }}</p>
        </div>
        <div id="admin">
            <template v-for="(value, index) in data" :key="index">
                <div class="note">
                    <span>{{ value.content }}</span>
                    <span>{{ value.title }}</span>
                </div>
            </template>
        </div>
      </div>
    </div>

</template>
<script>
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { initializeApp } from "firebase/app";

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
    name: 'Read',
    data() {
        return {
            data: [],
        }
    },
    methods: {
        getCurrentDate() { //날짜 형식 YYYY-MM-DD
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
    },
    async created() {
    try {
      const querySnapshot = await getDocs(noticeCollection);
      querySnapshot.forEach((doc) => {
        this.data.push(doc.data()); 
        // Firestore에서 가져온 데이터를 this.data 배열에 추가
      });
    } catch (error) {
      console.error("데이터 가져오기 실패: ", error);
    }
  },
};
</script>
<style scoped>
#wrap{
    display: flex;
    flex-direction: column;
    align-items: center; 
}
#nwrite{
    display: flex;
    margin-top: 50px;
    margin-bottom:200px;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    width:1000px;
}

.writer{
    display: flex;
    gap:20px;
    align-items: flex-start;
}
label{
    background:  #F9C041;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 23px 20px;
    font-size: 23px;
    font-weight: 700;
}
#admin{
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-self: stretch;
}
#nwrite p{font-size: 23px;font-weight: 700;}
.note span{
    font-size: 17px;
    font-weight: 400;
}
@media (max-width:1194px) {
   #wrap{width:100%;}
   #nwrite{width:90%;}
  }

@media (max-width: 490px) {
    #wrap{width:calc(100vw - 20px);}
    #nwrite{width:90%;}
  }
</style>