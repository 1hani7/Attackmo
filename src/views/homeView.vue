<template>
  <div class="screen">
    <div class="video">
      <!-- <div class="div"></div> -->
      <div class="iframe">
        <video ref="videoPlayer" id="mainTrailer" class="vid" autoplay muted>
          <source src="https://adimg.cgv.co.kr/images/202309/Boston/0927_Boston1080x608_PC.mp4">
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

      <img @click="togglePlayPause()" v-if="!isPlaying" class="img" style="cursor:pointer"
        src="../images/play_circle.svg" />

      <img @click="togglePlayPause()" v-if="isPlaying" class="img" style="cursor:pointer"
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
        <RouterLink to="/MovieTitle" class="link">
          <img class="rectangle" src="../images/Rectangle695.png" />
        </RouterLink>
        <img class="rectangle" src="../images/Rectangle696.png" />
        <img class="rectangle" src="../images/Rectangle697.png" />
        <img class="rectangle" src="../images/Rectangle698.png" />
      </div>
    </div>
    <div class="top">
      <div class="frame">
        <div class="title">상영중인 영화</div>
        <div class="div"><router-link to="/Mnow">+</router-link></div>
      </div>
      <div class="posters">
        <img class="rectangle" src="../images/Rectangle618.png" />
        <img class="rectangle" src="../images/Rectangle642.png" />
        <img class="rectangle" src="../images/Rectangle643.png" />
        <img class="rectangle" src="../images/Rectangle653.png" />
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
        <img class="rectangle" src="../images/Rectangle698.png" />
        <img class="rectangle" src="../images/Rectangle629.png" />
        <img class="rectangle" src="../images/Rectangle613.png" />
        <img class="rectangle" src="../images/Rectangle614.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted } from 'vue';
export default {
  name: 'homeView',
  setup() {
    const videoPlayer = ref(null); // 비디오 요소에 대한 ref
    const isPlaying = ref(false); // 비디오 재생 상태
    const isMuted = ref(false);   // 음소거 상태

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

    return {
      videoPlayer,
      isPlaying,
      isMuted,
      togglePlayPause,
      toggleMuteUnmute,
    };
  }
}
</script>

<style scoped>
@import url(./homeView.css);
</style>