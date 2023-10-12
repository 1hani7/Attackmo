<template>
    <div class="content">
      <div class="title">
        <div class="mainTitle">영화 검색결과 {{ resNum }}건</div>
        <div class="word">검색어 : {{ word }}</div>
      </div>
      <div class="results">
        <form v-for="value in res" :key="value.제목" action="/MovieTitle" method="get" name="movieName">
          <input type="hidden" :value="value.제목" name="movieName">
          <button type="submit" class="template">
            <img class="rectangle" :src="value.포스터" />
            <div class="info">
              <div class="div">{{ value.제목 }}</div>
              <div class="line"></div>
              <div class="normalFont">{{ value.개봉일 }}</div>
              <div class="running-time">
                <div class="bold">러닝타임</div>
                <div class="normalFont">{{ value.러닝타임 }}</div>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
export default{
    name:'MovieSearch',
    setup(){
      const router = useRouter();
      const query = router.currentRoute.value.query.searchWord;
      const set = JSON.parse(localStorage.getItem('set'));

      const word = ref('');
      const resNum = ref('');

      const res = set.filter(function(item){
        return item.제목.indexOf(query) > -1;
      });

      resNum.value = res.length;
      word.value = query;

      window.addEventListener('resize', function(){
        if( path == '/Search' && this.window.innerWidth <= 1194 ){
          router.push('/')
        }
      })

      return { res, word, resNum }
    }
}
</script>

<style scoped>
@import url(./MovieSearch.css);
</style>