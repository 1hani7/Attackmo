<template>
  <div class="screen" ref="videoContainer">
    <div class="video">
      <!-- <div class="div"></div> -->
      <div class="iframe">
        <video @click="togglePlayPause()" ref="videoPlayer" id="mainTrailer" class="vid" autoplay loop muted>
          <source :src="path">
        </video>
      </div>
    </div>
    <div class="controler">
      <div class="detail">
        <RouterLink to="/MovieTitle">
          <div class="more">상세보기</div>
          <img class="chevron-right" src="../images/chevron_right.svg" />
        </RouterLink>
      </div>

      <img @click="togglePlayPause()" v-if="!isPlaying" class="img playPause" style="cursor:pointer"
        src="../images/play_circle.svg" />

      <img @click="togglePlayPause()" v-if="isPlaying" class="img playPause" style="cursor:pointer"
        src="../images/pause_circle.svg" />

      <img @click="toggleMuteUnmute()" v-if="!isMuted" class="img" style="cursor:pointer" src="../images/sound.svg" />

      <img @click="toggleMuteUnmute()" v-if="isMuted" class="img" style="cursor:pointer" src="../images/volume_off.svg" />

    </div>
  </div>


  <div class="div-wrapper">
    <div class="top">
      <div class="frame">
        <div class="title">인기 TOP 10</div>
        <div class="div" id="top10Plus"><router-link to="/MovieMain">+</router-link></div>
      </div>
      <div class="posters">
        <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
        <form v-for="(value, key) in topTenList" :key="key" action="/MovieTitle" name="movieName" method="get">
          <input type="hidden" name="movieName" :value="value.제목">
          <div class="ranking">{{ value.랭킹 }}</div>
          <button type="submit">
            <img class="rectangle" :src="value.포스터" />
          </button>
        </form>
        <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
      </div>
    </div>
    <div class="top">
      <div class="frame">
        <div class="title">상영중인 영화</div>
        <div class="div"><router-link to="/Mnow">+</router-link></div>
      </div>
      <div class="posters">
        <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
        <form v-for="(value, key) in now" :key="key" action="/MovieTitle" name="movieName" method="get">
          <input type="hidden" name="movieName" :value="value.제목">
          <button type="submit">
            <img class="rectangle" :src="value.포스터" />
          </button>
        </form>
        <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
      </div>
    </div>
    <div v-if="isLogin" class="top">
      <div class="frame">
        <div class="title">당신의 취향은?</div>
        <RouterLink to="/RecHistory">
          <div class="div">+</div>
        </RouterLink>
      </div>
      <div class="posters">
        <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle698.png" />
        </RouterLink>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle629.png" />
        </RouterLink>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle613.png" />
        </RouterLink>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle614.png" />
        </RouterLink>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle698.png" />
        </RouterLink>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle629.png" />
        </RouterLink>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle613.png" />
        </RouterLink>
        <RouterLink to="/MovieTitle">
          <img class="rectangle" src="../images/Rectangle614.png" />
        </RouterLink>
        <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted } from 'vue';
import {useRouter} from 'vue-router'
export default {
  name: 'homeView',
  setup() {
    const videoPlayer = ref(null); // 비디오 요소에 대한 ref
    const isPlaying = ref(false); // 비디오 재생 상태
    const isMuted = ref(false);   // 음소거 상태
    const isLogin = inject('isLogin');
    const path = ref();
    const now = JSON.parse(localStorage.getItem('now')).slice(0, 10);
    const topTenList = JSON.parse(localStorage.getItem('topTenList'));

    
    // 슬라이드 스크롤
    const slideScrollRight = (t, i) => {
      const slider = event.target.parentNode;
      slider.scrollLeft += ((232 * 4) + (10 * 4));
    }
    const slideScrollLeft = (t, i) => {
      const slider = event.target.parentNode;
      slider.scrollLeft -= ((232 * 4) + (10 * 4));
    }

    // 랜덤 예고편
    const randomTrailer = () => {
      const temp = Math.floor(Math.random() * 4) + 1;
      if (temp == 1) {
        path.value = 'https://adimg.cgv.co.kr/images/202309/FlowerMoon/FlowerMoon_1080x608.mp4';
      } else if (temp == 2) {
        path.value = 'https://adimg.cgv.co.kr/images/202309/Expend4bles/1004_Expend4bles_1080x608.mp4';
      } else if (temp == 3) {
        path.value = 'https://adimg.cgv.co.kr/images/202309/MissFortune/1006_1080x608_PC.mp4'
      } else if (temp == 4) {
        path.value = 'https://adimg.cgv.co.kr/images/202309/BlueGiant/BlueGiant_1080X608_PC.mp4'
      }
    }

    // 비디오 재생/일시정지 토글 함수
    const togglePlayPause = () => {
      if (videoPlayer.value.paused) {
        videoPlayer.value.play();
        isPlaying.value = true;
      } else {
        videoPlayer.value.pause();
        isPlaying.value = false;
      }
    };

    // 음소거/음소거 해제 토글 함수
    const toggleMuteUnmute = () => {
      videoPlayer.value.muted = !videoPlayer.value.muted;
      isMuted.value = videoPlayer.value.muted;
    };


    // 비디오가 로드되면 초기 상태 설정
    onMounted(() => {
      randomTrailer();

      videoPlayer.value.addEventListener('play', () => {
        isPlaying.value = true;
      });
      videoPlayer.value.addEventListener('pause', () => {
        isPlaying.value = false;
      });
      videoPlayer.value.addEventListener('volumechange', () => {
        isMuted.value = videoPlayer.value.muted;
      });
    });

    const router = useRouter();
    router.beforeEach(() => {
      localStorage.removeItem('now');
      localStorage.removeItem('topTenList');
    })

    return {
      topTenList,
      now,
      videoPlayer,
      isPlaying,
      isMuted,
      togglePlayPause,
      toggleMuteUnmute,
      isLogin,
      path,
      slideScrollRight,
      slideScrollLeft,
    };
  }
}
</script>

<style scoped>
@import url(./homeView.css);
</style>