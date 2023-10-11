<template>
    <div v-for="(value, key) in filtered" :key="key" class="content">
      <div class="movie-info-box">
        <div class="mainTitle">영화정보</div>
        <div class="movie-template">
          <img class="poster" :src="value.포스터" />
          <div class="frame">
            <div class="mark">
              <img class="bookMark_Bt" :src="path" />
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
              <div  class="actorNameBox">
                <span v-for="name in actors" class="normalFont">{{ name }} / </span>
              </div>
            </div>
            <div class="infoFrame">
              <div class="bold">장르</div>
              <p class="p">{{ value.장르 }}</p>
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
                <input class="revBt" type="submit" value="리뷰 보러 가기 >"/>
                <div class="animationTool"></div>
                <input type="hidden" name="searchTitle" :value="value.제목"/>
              </form>
            </div>
          </div>
          <div class="normalFont">
            {{ value.줄거리 }}
          </div>
        </div>
      </div>
      <div class="subWrap">
        <div class="subTitle">예고편</div>
        <div class="trailer-template">
          <div class="trailerBox">
            <div class="trailerBox">
              <!-- <img @click="trailerScale()" class="trailer" src="@/images/movieInfo/Rectangle421.png" /> -->
              <iframe @click="trailerScale()" :src="value.예고편영상[0]"></iframe>
              <img class="play-bt" src="@/images/movieInfo/play_bt.svg" />
            </div>
            <div class="trailerTitle">{{ value.예고편타이틀[0] }}</div>
          </div>
          <div class="trailerBox">
            <div class="trailerBox">
              <img @click="trailerScale()" class="trailer" src="@/images/movieInfo/Rectangle422.png" />
              <img class="play-bt" src="@/images/movieInfo/play_bt.svg" />
            </div>
            <div class="trailerTitle">메인 예고편</div>
          </div>
          <div class="trailerBox">
            <div class="trailerBox">
              <img @click="trailerScale()" class="trailer" src="@/images/movieInfo/Rectangle423.png" />
              <img class="play-bt" src="@/images/movieInfo/play_bt.svg" />
            </div>
            <div class="trailerTitle">메인 예고편 2</div>
          </div>
        </div>
      </div>
      <div class="subWrap">
        <div class="subTitle">차트</div>
        <div class="chartWrap">
          <div class="chartBox">
            <radarChart/>
          </div>
          <div class="chartBox">
            <h3>지난 10일 간의 관객 수</h3>
            <lineChart/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isBig" @click="switcher()" id="darkBg">
      <img id="big" :src="image">
    </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import lineChart from '../components/chart/lineChart.vue'
import radarChart from '../components/chart/radarChart.vue'
import {ref, onMounted, computed} from 'vue'
export default{
    name: 'MovieTitle',
    components:{lineChart, radarChart},
    setup(){
      const isActive = ref(false);
      const isBig = ref(false);
      const isSwitched = ref(false);
      const path = ref('');
      const image = ref('');
      const set = JSON.parse(localStorage.getItem('set'));
      const param = useRoute().query.movieName;
      const filtered = set.filter(function(item, idx){
        return item.제목 == param;
      })
      const actors = filtered[0].배우 ;
      console.log( actors )


      const BMClicked = () => isActive.value = !isActive.value;


      const switcher = () => {
        isBig.value = !isBig.value;
      }

      const trailerScale = () => {
        const vid = document.getElementsByClassName('trailer');
        const big = document.querySelector('#big');
        for( var i=0; i<=vid.length-1; i++ ){
          vid[i].addEventListener('click', function(){
            if( isBig.value = true ){
              var temp = this.src.split('5173')[1];
              image.value = temp;
            }else if( isBig.value = false) {

            }
          })
        }
      }
      
      onMounted(()=>{
        trailerScale();

        path.value = '/src/images/movieInfo/bookmark.svg'

        const bookMark_Bt = document.querySelector('.bookMark_Bt');
        const ani = document.querySelector('.ani');
        bookMark_Bt.addEventListener('click', function(){
          if( !isSwitched.value ){
            path.value = '/src/images/movieInfo/bookmark_checked.svg';
            isSwitched.value = !isSwitched.value;
            ani.classList.toggle('clicked')
            BMClicked();
          }else if ( isSwitched.value ){
            path.value = '/src/images/movieInfo/bookmark.svg';
            isSwitched.value = !isSwitched.value;
            ani.classList.toggle('clicked')
            BMClicked();
          }
        })
        
      });

      return{path, isBig, switcher, trailerScale, isSwitched, image, isActive, filtered, actors}
    }
}
</script>

<style scoped>
@import url(./MovieTitle.css);
</style>