<template>
  <div class="content">
    <div class="title">
      <div class="mainTitle">영화 검색결과 {{ resNum }}건</div>
      <div class="word">검색어 : {{ word }}</div>
    </div>
    <div class="blankMsg" v-if="isBlank">검색 결과가 없습니다.</div>
    <div v-if="!isBlank" class="isRls">개봉작</div>
    <div v-if="!isBlank" class="results">
      <form v-for="value in res" :key="value.제목" action="/MovieTitle" method="get" name="movieName">
        <input type="hidden" :value="value.제목" name="movieName">
        <button type="submit" class="template">
          <img class="rectangle" :src="value.포스터" />
          <div class="info">
            <div @mouseover="titleModal" @mouseout="titleModal" class="div">{{ value.제목 }}</div>
            <div class="line"></div>
            <div class="normalFont">{{ value.개봉일 }}</div>
            <div class="running-time">
              <div class="bold">러닝타임</div>
              <div class="normalFont">{{ value.러닝타임 }}</div>
            </div>
          </div>
        </button>
        <div class="movieName show">{{ value.제목 }}</div>
      </form>
    </div>
    <div v-if="!isBlank" class="isRls">개봉 예정작</div>
    <div v-if="!isBlank" class="results">
      <form v-for="value in res2" :key="value.제목" action="/MovieTitle" method="get" name="movieName">
        <input type="hidden" :value="value.제목" name="movieName">
        <button type="submit" class="template">
          <img class="rectangle" :src="value.포스터" />
          <div class="info">
            <div @mouseover="titleModal" @mouseout="titleModal" class="div">{{ value.제목 }}</div>
            <!-- <div class="line"></div> -->
            <div class="normalFont">{{ value.개봉일 }}예정</div>
            <div class="running-time">
              <div class="bold">러닝타임</div>
              <div class="normalFont">{{ value.러닝타임 }}</div>
            </div>
          </div>
        </button>
        <div class="movieName show">{{ value.제목 }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  name: 'MovieSearch',
  setup() {
    const isBlank = ref(false);
    const router = useRouter();
    const path = useRoute().path;
    const query = router.currentRoute.value.query.searchWord;
    const set = JSON.parse(localStorage.getItem('set'));
    const coming = JSON.parse(localStorage.getItem('coming'));
    const res = ref(null);
    const res2 = ref(null);
    const word = ref('');
    const resNum = ref('');


    if (query != '') {
      word.value = query;
      res.value = set.filter(function (item) {
        return item.제목.indexOf(query) > -1;
      });
      res2.value = coming.filter(function (item) {
        return item.제목.indexOf(query) > -1;
      });
      resNum.value = res.value.length;
      resNum.value += res2.value.length;
      if (resNum.value == 0 ) {
        isBlank.value = true;
        res.value = null;
        resNum.value = '0';
      }
    } else if (query == '') {
      isBlank.value = true;
      res.value = null;
      word.value = '없음';
      resNum.value = '0';
    }

    const titleModal = (event) => {
      const t = event.target.parentNode.parentNode.nextSibling;
      t.classList.toggle('show');
    }



    window.addEventListener('resize', function () {
      if (path == '/Search' && this.window.innerWidth <= 1194) {
        router.push('/')
      }
    })

    return { res, res2, word, resNum, isBlank, titleModal }
  }
}
</script>

<style scoped>
@import url(./MovieSearch.css);
</style>