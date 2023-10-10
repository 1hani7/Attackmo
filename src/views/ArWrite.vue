<template>
    <div id="wrap">
        <div id="nwrite">
            <p>문의사항(관리자)</p>
            <label class="title">문의 드립니다</label>        
        <div class="writer">
            <h6>작성자</h6><h3>뒹굴찹쌀떡</h3>
        </div>
        <div class="question">
            <span>혹시 이 사이트에 성인 영화는 없나요? 찾으려던 영화가 있는데 안 보이네요</span>
        </div>
        <div id="line"></div>
        <div id="admin">
            <div class="writer">
                <h6>작성자</h6><h3>관리자</h3>
            </div>
            <div id="title">
                <label>제목</label>
                <input type="text" v-model="title" placeholder="re:문의 드립니다.">
            </div>
            <div id="notice">
                <label>내용</label>
                <textarea v-model="content" placeholder="답변 내용 입력하기"></textarea>
            </div>
            <div id="button_box">
                <button class="bt" type="submit" @click="write">답변등록</button>
            </div>
        </div>
      </div>
    </div>
</template>
<script>

import data from '../data/AreadTest.js'

export default {
    name: 'Create',
    data() {
        return {
            data: data,
            title:"",
            writer: "",
            content: "",
        }
    },
    methods: {
        write() {
            this.data.push({
                title:this.title,
                writer: this.writer,
                content: this.content,
                
            })
            this.$router.push({
                path:"/AreadTest"
            })
        },
    }
} 
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
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 23px 20px;
    font-size: 23px;
    font-weight: 700;
}
.title{background: #F9C041;}
#line{
    width:100%;
    border: 1px solid black;
}

#admin{
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-self: stretch;
}
#nwrite p{font-size: 23px;font-weight: 700;}
#title{width:100%;}
.bt{
    background:white;
    border-radius: 30px;
    border:1px solid black;
    width:177px;
    height:47px;
    font-size:23px;
    cursor: pointer;
}
#title input{width:100%;}
input{outline:none;padding:20px;font-size:23px;}
textarea{outline:none; padding:20px;width:100%;height:400px;font-size:23px;}
#button_box{width:100%;display:flex; justify-content: flex-end;}
</style>