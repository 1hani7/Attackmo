<script>
import { RouterView, useRouter  } from 'vue-router';
import topHeader from './components/interface/topHeader.vue';
import botFooter from './components/interface/botFooter.vue';
import topAds from './components/AD/topAds.vue';
import botAds from './components/AD/botAds.vue';
import {ref, provide, onMounted, reactive } from 'vue';
import {set} from './movieApi'

export default {
  components: {
    topAds, topHeader, botAds, botFooter
  },
  setup() {
    provide('set', set);

    const isLogin = ref(false);
    provide('isLogin', isLogin);

    const loginToggle = () => {
      const sessionStorage = window.sessionStorage;
      isLogin.value = !isLogin.value;
      sessionStorage.setItem('login', isLogin.value);
      console.log('login is = ' + sessionStorage.getItem('login'))
    }
    provide('loginToggle', loginToggle);

    const isSiren = ref(true);

    onMounted(() => {
      const sessionStorage = window.sessionStorage;
      sessionStorage.setItem('login', isLogin.value);

      if (location.href.split("/")[3] == 'Siren') {
        isSiren.value = false;
      } else {
        isSiren.value = true;
      }
    })

    useRouter().afterEach(()=>{
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
  <div v-if="isSiren" id="toTheTopBt">
    <a href="#">
      <img src="@/images/topBt.svg">
    </a>
  </div>

  <!-- 상단광고 위치 -->
  <section v-if="isSiren">
    <topAds/>
  </section>

  <!-- 헤더 -->
  <topHeader v-if="isSiren"/>

  <!-- 컨텐츠 -->
  <Suspense>
    <RouterView />
  </Suspense>

  <!-- 하단광고 위치 -->
  <section v-if="isSiren">
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
