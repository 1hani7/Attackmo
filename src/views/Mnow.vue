<template>
  <div class="main-content">
    <div class="now-show-wrap">
      <div class="title"><div class="mainTitle">상영 중인 영화</div></div>
      <div class="posters">
        <div v-for="(value, key) in mNow" :key="key" class="poster-box">
          <form action="/MovieTitle" name="movieName" method="get">
            <input type="hidden" name="movieName" :value="value.제목">
            <button type="submit">
              <img class="rectangle" :src="value.포스터" />
            </button>
            <button type="submit">
            <div class="view">
                <div class="div">{{ value.제목 }}</div>
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
          </form>
        </div>
      </div>
    </div>
  </div>
  <div id="movieName"></div>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import mNow from '../data/mNow.json';
export default{
  name:'Mnow',
  setup(){
    const router = useRouter();

    // const now = inject('now');

    const titleModal = (e) => {
      const modal = document.getElementById("movieName");
      if( window.innerWidth > 1194 ){
        modal.style.left = e.pageX + 'px';
        modal.style.top = e.pageY + 'px';
        modal.textContent = e.target.textContent;
        modal.style.opacity = '1';
      }
    }

    const titleModalOff = () => {
      const modal = document.getElementById("movieName");
      modal.style.opacity = '0';
    }
    

    onMounted(()=>{
      // const box = document.querySelectorAll(".poster-box");
      // for( var item of box ){
      //   item.addEventListener("click", function(){
      //     router.push("/MovieTitle");
      //   })
      // }

      const title = document.querySelectorAll(".div");
      for( var item of title ){
        item.addEventListener("mouseover", titleModal);
        item.addEventListener("mouseout", titleModalOff);
      }
    })
    return {mNow, titleModal}
  }
}
</script>

<style scoped>
@import url(./Mnow.css);

</style>