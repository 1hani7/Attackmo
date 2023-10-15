<script>
import { RouterView, useRouter, useRoute  } from 'vue-router';
import topHeader from './components/interface/topHeader.vue';
import botFooter from './components/interface/botFooter.vue';
import topAds from './components/AD/topAds.vue';
import botAds from './components/AD/botAds.vue';
import {ref, provide, onMounted } from 'vue';

// import {coming} from './mComing'
// import {now} from './mNow'
// import {topTenList} from './topTenList'
// import {set} from './movieApi'

export default {
  components: {
    topAds, topHeader, botAds, botFooter
  },
  setup() {
    // console.log(JSON.stringify(coming))
    // console.log(JSON.stringify(now))
    // console.log(JSON.stringify(topTenList))
    // console.log(JSON.stringify(set))
    
    const isLogin = ref(false);
    provide('isLogin', isLogin);
    const path = useRoute().path;

    const loginToggle = () => {
      const sessionStorage = window.sessionStorage;
      isLogin.value = !isLogin.value;
      sessionStorage.setItem('login', isLogin.value);
      console.log('login is = ' + sessionStorage.getItem('login'))
    }
    provide('loginToggle', loginToggle);

    const isSiren = ref(true);
    provide('isSiren', isSiren);

    onMounted(() => {
      const sessionStorage = window.sessionStorage;
      sessionStorage.setItem('login', isLogin.value);

    })

    
    useRouter().beforeEach(()=>{
      window.scrollTo(0, 0);
    })


    return{
      isSiren
    }
  }
}

</script>

<template>
  <!-- 마우스커서 -->
  <!-- <div class="cursor"></div> -->

  <!-- 최상단으로 버튼 -->
  <div v-show="isSiren" id="toTheTopBt">
    <a href="#">
      <img src="@/images/topBt.svg">
    </a>
  </div>

  <!-- 상단광고 위치 -->
  <section v-show="isSiren">
    <topAds/>
  </section>

  <!-- 헤더 -->
  <section v-show="isSiren">
    <topHeader/>
  </section>

  <!-- 컨텐츠 -->
  <RouterView />

  <!-- 하단광고 위치 -->
  <section v-show="isSiren">
    <botAds/>
  </section>

  <!-- footer -->
  <footer>
    <botFooter/>
  </footer>
</template>

<style>
*{
  /* cursor: url('./components/icons/Acursor.svg'), auto; */
}
/* .cursor{
  position:absolute;
  width: 40px;
  height: 40px;
  background-color: gray;
  mix-blend-mode:color-dodge;
  border-radius: 50%;
  z-index:99;
  pointer-events: none;
  transform: translate(-50%, -50%);
} */
#toTheTopBt{
  position:fixed; right:5%; bottom:10%;
  z-index:15; cursor:pointer;
}
@media(max-width:490px){
  .cursor{display:none;}
  #toTheTopBt{transform: scale(0.7);}
}
@media(max-width:1194px){
  section:first-child{display:none;}
  section{height:fit-content;}
}
</style>
