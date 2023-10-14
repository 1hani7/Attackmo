<template>
  <div v-for="(value, key) in filtered" :key="key" class="content">
    <div class="movie-info-box">
      <div class="mainTitle">영화정보</div>
      <div class="movie-template">
        <img class="poster" :src="value.포스터" />
        <div class="frame">
          <div class="mark">
            <img @click="bookMark" class="bookMark_Bt" :src="path" />
            <div class="ani"></div>
          </div>
          <div class="movieName">{{ value.제목 }}</div>
          <div v-if="isActive" class="notice">* 북마크한 영화입니다.</div>
          <div class="bold">{{ value.개봉일 }}</div>
          <div class="line"></div>
          <div class="infoFrame">
            <div class="bold">감독</div>
            <div class="normalFont">{{ value.감독 }}</div>
          </div>
          <div class="infoFrame">
            <div class="bold">출연</div>
            <div class="actorNameBox">
              <span v-for="name in actors" class="normalFont">{{ name }}, </span>
            </div>
          </div>
          <div class="infoFrame">
            <div class="bold">장르</div>
            <p class="normalFont">{{ value.장르 }}</p>
          </div>
          <div class="infoFrame">
            <div class="bold">러닝</div>
            <div class="normalFont">{{ value.러닝타임 }}</div>
          </div>
        </div>
      </div>
      <div class="scenarioBox">
        <div class="scenarioTitle bold" style="margin-bottom:10px;">
          줄거리
          <div class="searchTitle">
            <form name="searchTitle" action="/ReviewBoard" method="get">
              <input class="revBt" type="submit" value="리뷰 보러 가기 >" />
              <div class="animationTool"></div>
              <input type="hidden" name="searchTitle" :value="value.제목" />
            </form>
          </div>
        </div>
        <div class="normalFont storyLine">
          {{ value.줄거리 }}
        </div>
      </div>
    </div>
    <div v-if="isTrailer" class="subWrap">
      <div class="subTitle">예고편</div>
      <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
      <div class="trailer-template">
        <div v-for="(v, idx) in value.예고편영상" class="trailerBox">
          <div class="iframBox">
            <iframe :src="v"></iframe>
            <img class="play-bt" src="@/images/movieInfo/play_bt.svg" />
          </div>
          <div @click="trailerScale" class="trailerTitle">
          {{ value.예고편타이틀[idx] }}
          </div>
          <div class="sub">{{ value.예고편타이틀[idx] }}</div>
        </div>
      </div>
      <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
    </div>
    <div v-if="isImage" class="subWrap">
      <div class="subTitle" style="padding-bottom:20px;">스틸컷</div>
      <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
      <div class="trailer-template" style="">
        <div v-for="(v, idx) in value.스틸컷">
          <img :src="v">
        </div>
      </div>
      <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
    </div>
    <div class="subWrap">
      <div class="subTitle">차트</div>
      <div class="chartWrap">
        <div class="chartBox">
          <radarChart />
        </div>
        <div v-if="!date.length == 0" class="chartBox">
          <h3>지난 {{ date.length }}일 간의 관객 수</h3>
          <small>* 10위권에 진입했던 기록만 지원합니다.</small>
          <lineChart />
        </div>
      </div>
    </div>
  </div>

  <div v-show="isBig" @click="switcher()" id="darkBg">
    <div id="big"></div>
  </div>
</template>

<script>
import lineChart from '../components/chart/lineChart.vue'
import radarChart from '../components/chart/radarChart.vue'
import { useRoute } from 'vue-router'
import { ref, reactive, onMounted, provide, watchEffect } from 'vue'
export default {
  name: 'MovieTitle',
  components: { lineChart, radarChart },
  setup() {
    const isActive = ref(false);
    const isBig = ref(false);
    const isSwitched = ref(false);
    const path = ref('');
    const image = ref('');
    const set = JSON.parse(localStorage.getItem('set'));
    const route = useRoute();
    let param = route.query.movieName;
    const filtered = ref(set.filter(item => item.제목 == param));
    const actors = filtered.value[0].배우;
    const isTrailer = ref(filtered.value[0].예고편영상.length == 1 ? false : true);
    const isImage = ref(filtered.value[0].스틸컷.length == 1 ? false : true);
    watchEffect(() => {
      param = route.query.movieName;
      filtered.value = set.filter(item => item.제목 == param);
      isTrailer.value = filtered.value[0].예고편영상.length == 1 ? false : true;
      isImage.value = filtered.value[0].스틸컷.length == 1 ? false : true
    });


    // 선 차트 데이터
    const aud = JSON.parse(localStorage.getItem('aud'));
    const pName = param.trim();
    let date = reactive([]);
    const audience = reactive([]);
    for (var key in aud[pName]) date.push(key);
    date = date.sort((a, b) => b - a).slice(0, 10);
    for (var i of date) audience.push(aud[pName][i]);
    date = [...date].map(function (d) {
      var temp = d.substring(4, 8);
      var a = temp.slice(0, 2);
      var b = temp.slice(2, 4);
      return a + '.' + b;
    })
    date.reverse(); audience.reverse();
    provide('date', date); provide('audience', audience);


    const bookMark = (event) => {
      const t = event.target.parentNode.nextSibling.innerText;

      if (sessionStorage.getItem('login') == 'false') return alert('로그인이 필요한 서비스입니다.');

      if (localStorage.getItem('bookmark') == null || localStorage.getItem('bookmark') == '[]') {
        const temp = new Array();
        temp.push(t)
        localStorage.setItem('bookmark', JSON.stringify(temp));
      } else if (JSON.parse(localStorage.getItem('bookmark')).indexOf(t) > -1) {
        const item = JSON.parse(localStorage.getItem('bookmark'));
        item.splice(item.indexOf(t), 1);
        localStorage.removeItem('bookmark');
        localStorage.setItem('bookmark', JSON.stringify(item));
      } else if (localStorage.getItem('bookmark') != null || localStorage.getItem('bookmark') != '[]') {
        const em = JSON.parse(localStorage.getItem('bookmark'));
        em.push(t);
        localStorage.removeItem('bookmark');
        localStorage.setItem('bookmark', JSON.stringify(em));
      }
    }


    // 슬라이드 스크롤
    const slideScrollRight = (t, i) => {
      const slider = event.target.previousSibling;
      slider.scrollLeft += (352 * 2) + (50 * 2);
    }
    const slideScrollLeft = (t, i) => {
      const slider = event.target.nextSibling;
      slider.scrollLeft -= (352 * 2) + (50 * 2);
    }


    const BMClicked = () => isActive.value = !isActive.value;

    const titleModal = (event) => {
      const t = event.target.nextSibling;
      t.classList.toggle('show');
    }

    const switcher = () => {
      const big = document.querySelector('#big');
      big.innerHTML = '';
      isBig.value = !isBig.value;
    }

    const trailerScale = (event) => {
      const t = event.target.previousSibling.children[0];
      const title = event.target;
      const big = document.querySelector('#big');
      const clonedT = t.cloneNode(true);
      const clonedTitle = title.cloneNode(true);
      switcher();
      big.appendChild(clonedT);
      big.appendChild(clonedTitle);
      clonedTitle.style.position = 'fixed';
      clonedTitle.style.color = 'white';
      clonedTitle.style.fontSize = '30px';
      clonedTitle.style.top = '71%';
      clonedTitle.style.background = 'rgba(0,0,0,0.8)';
      clonedTitle.style.padding = '0 20px';
    }

    onMounted(() => {

      path.value = '/src/images/movieInfo/bookmark.svg'
      const movieName = document.querySelector('.movieName').innerText;
      if (JSON.parse(localStorage.getItem('bookmark')) != null &&
        JSON.parse(localStorage.getItem('bookmark')).indexOf(movieName) > -1 &&
        sessionStorage.getItem('login') == 'true') {
        path.value = '/src/images/movieInfo/bookmark_checked.svg';
        isActive.value = true;
      }

      const bookMark_Bt = document.querySelector('.bookMark_Bt');
      const ani = document.querySelector('.ani');
      bookMark_Bt.addEventListener('click', function () {
        if (!isSwitched.value) {
          if (sessionStorage.getItem('login') == 'false') return;
          path.value = '/src/images/movieInfo/bookmark_checked.svg';
          isSwitched.value = !isSwitched.value;
          ani.classList.toggle('clicked')
          BMClicked();
        } else if (isSwitched.value) {
          path.value = '/src/images/movieInfo/bookmark.svg';
          isSwitched.value = !isSwitched.value;
          ani.classList.toggle('clicked')
          BMClicked();
        }
      })

    });

    return {
      path, isBig, switcher, trailerScale, isSwitched,
      image, isActive, filtered, actors, isTrailer, titleModal,
      slideScrollRight, slideScrollLeft, isImage, bookMark, date
    }
  }
}
</script>

<style scoped>
@import url(./MovieTitle.css);
</style>