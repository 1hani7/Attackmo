<template>
    <div id="wrap">
        <div id="nwrite">
            <p>문의사항</p>
            <label>문의 드립니다</label>        
        <div class="writer">
            <h6>작성자</h6><h3>뒹굴찹쌀떡</h3>
        </div>
        <div class="question">
            <span>혹시 이 사이트에 성인 영화는 없나요? 찾으려던 영화가 있는데 안 보이네요</span>
        </div>
        <div id="line"></div>
        <div id="admin" v-if="visiblePosts.length > 1">
            <label v-for="(value,i) in visiblePosts" :key="value.id">{{value.title}}</label>
            <div v-for="(value,i) in visiblePosts" :key="value.id">
                <div class="writer">
                    <h6>{{value.writer}}</h6><h3>{{value.name}}</h3>
                </div>
                <div class="question">
                    <span>{{value.content}}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import data from '../data/AreadTest.js'

export default {
    name: 'Read',
    data() {
        return {
             visiblePosts: data, // visiblePosts로 변경
        }
    },
    computed: {
        sortedData() {
            return this.data.slice().sort((a, b) => {
                // 날짜를 기준으로 내림차순 정렬
                return new Date(b.Date) - new Date(a.Date);
            });
        }
  },
   
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
    background: #F9C041;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 23px 20px;
    font-size: 23px;
    font-weight: 700;
}

#line{
width:100%;
border: 1px solid black;
}
#name{
display: flex;
width: 1000px;
flex-direction: column;
align-items: flex-start;
gap: 39px;
flex-shrink: 0;
}
#admin{
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-self: stretch;
}
#nwrite p{font-size: 23px;font-weight: 700;}

@media (max-width:1194px) {
#wrap{width:100%;}
#nwrite{width:90%;}
.writer{width:100%;}
label{width:100%;}
#line{width:100%;border: 1px solid black;}
#name{width:100%;}
#admin{width:100%;}
#nwrite p{width:100%;font-size: 23px;font-weight: 700;}
}

@media (max-width: 490px) {
#wrap{width:calc(100vw - 20px);} 
}
</style>