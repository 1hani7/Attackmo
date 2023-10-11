<template>
  <div class="main-content">
    <div class="now-show-wrap">
      <div class="title"><div class="mainTitle">상영 예정 영화</div></div>
      <div class="posters">
        <div v-for="(value, key) in coming" :key="key" class="poster-box">
          <form action="/MovieTitle" name="movieName" method="get">
            <input type="hidden" name="movieName" :value="value.제목">
            <button type="submit">
              <img class="rectangle" :src="value.포스터" />
            </button>
            <button type="submit">
            <div class="view">
                <div @mouseover="titleModal" @mouseout="titleModal" class="div">{{ value.제목 }}</div>
                <div class="normalFont">{{ value.개봉일 }}</div>
                <div class="normalFont onMobile">{{ value.장르 }}</div>
                <div class="normalFont onMobile">{{ value.러닝타임 }}</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </button>
            <div class="movieName show">{{ value.제목 }}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref, inject} from 'vue'
import {useRouter} from 'vue-router'
// import mComing from '../data/mComing.json';
export default{
    name:'Mcoming',
    setup(){
      const router = useRouter();

      const coming = inject('coming');

      const titleModal = (event) => {
      const t = event.target.parentNode.parentNode.nextSibling;
      t.classList.toggle('show');
    }
      return {coming, titleModal}
    }
}
</script>

<style scoped>
@import url(./Mcoming.css);
</style>