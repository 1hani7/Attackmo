import { createRouter, createWebHistory, useRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/MovieMain',
      name: 'MovieMain',
      component: () => import('../views/MovieMain.vue')
    },
    {
      path: '/Mnow',
      name: 'Mnow',
      component: () => import('../views/Mnow.vue')
    },
    {
      path: '/Mcoming',
      name: 'Mcoming',
      component: () => import('../views/Mcoming.vue')
    },
    {
      path: '/Search',
      name: 'MovieSearch',
      component: () => import('../views/MovieSearch.vue')
    },
    {
      path: '/MovieTitle',
      name: 'MovieTitle',
      component: () => import('../views/MovieTitle.vue')
    },
    {
      path: '/Info',
      name: 'Info',
      component: () => import('../views/Info.vue'),
      beforeEnter: (to, from, next) => {
        const sessionStorage = window.sessionStorage;
        if (sessionStorage.getItem('login') === 'false'){
          alert('로그인이 필요합니다.');
          useRouter().push('/login')
        }
        else return next();
      }
    },
    {
      path: '/RecHistory',
      name: 'RecHistory',
      component: () => import('../views/RecHistory.vue'),
      beforeEnter: (to, from, next) => {
        const sessionStorage = window.sessionStorage;
        if (sessionStorage.getItem('login') === 'false'){
          alert('로그인이 필요합니다.');
          useRouter().push('/login')
        }
        else return next();
      }
    },
    {
      path: '/Mark',
      name: 'Mark',
      component: () => import('../views/Mark.vue'),
      beforeEnter: (to, from, next) => {
        const sessionStorage = window.sessionStorage;
        if (sessionStorage.getItem('login') === 'false'){
          alert('로그인이 필요합니다.');
          useRouter().push('/login')
        }
        else return next();
      }
    },
    {
      path: '/Like',
      name: 'Like',
      component: () => import('../views/Like.vue'),
      beforeEnter: (to, from, next) => {
        const sessionStorage = window.sessionStorage;
        if (sessionStorage.getItem('login') === 'false'){
          alert('로그인이 필요합니다.');
          useRouter().push('/login')
        }
        else return next();
      }
    },
    {
      path: '/Rwrite',
      name: 'Rwrite',
      component: () => import('../views/Rwrite.vue'),
      beforeEnter: (to, from, next) => {
        const sessionStorage = window.sessionStorage;
        if (sessionStorage.getItem('login') === 'false'){
          alert('로그인이 필요합니다.');
          useRouter().push('/login')
        }
        else return next();
      }
    },
    {
      path: '/ReviewBoard',
      name: 'ReviewBoard',
      component: () => import('../views/ReviewBoard.vue')
    },
    {
      path: '/Rread',
      name: 'Rread',
      component: () => import('../views/Rread.vue')
    },
    {
      path: '/MyReview',
      name: 'MyReview',
      component: () => import('../views/MyReview.vue')
    },
    {
      path: '/Siren',
      name: 'Siren',
      component: () => import('../views/SirenPop.vue')
    },
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/login.vue')
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import('@/views/SignUp.vue')
    },
    {
      path: "/Aread",
      name: "aread",
      component: () => import('@/views/Aread.vue')
    },
    {
      path: "/Anotice",
      name: "anotice",
      component: () => import('@/views/Anotice.vue')
    },
    {
      path: "/InfoEdit",
      name: "InfoEdit",
      component: () => import('@/views/InfoEdit.vue')
    },
    {
      path: "/If_Eck",
      name: "If_Eck",
      component: () => import('@/views/If_Eck.vue'),
      beforeEnter: (to, from, next) => {
        const sessionStorage = window.sessionStorage;
        if (sessionStorage.getItem('login') === 'false'){
          alert('로그인이 필요합니다.');
          useRouter().push('/login')
        }
        else return next();
      }
    },
    {
      path: "/FindP",
      name: "findp",
      component: () => import('@/views/FindP.vue')
    },
    {
      path: "/FindE",
      name: "finde",
      component: () => import('@/views/FindE.vue')
    },
    {
      path: "/notice",
      name: "notice",
      component: () => import('@/views/notice.vue')
    },
    {
      path: "/NoticeList",
      name: "noticelist",
      component: () => import('@/views/NoticeList.vue')
    },
    {
      path: "/AskMe",
      name: "askme",
      component: () => import('@/views/AskMe.vue')
    },
    {
      path: "/AdSign",
      name: "AdSign",
      component: () => import('@/views/AdSign.vue')
    },
    {
      path: "/AdSiren",
      name: "AdSiren",
      component: () => import('@/views/AdSiren.vue')
    },
    {
      path: "/Adnotice",
      name: "Adnotice",
      component: () => import('@/views/Adnotice.vue')
    },
    {
      path: "/ArWrite",
      name: "ArWrite",
      component: () => import('@/views/ArWrite.vue')
    }, 
    {
      path: "/AreadTest",
      name: "AreadTest",
      component: () => import('@/views/AreadTest.vue')
    },
    {
      path: "/AdSirenPop",
      name: "AdSirenPop",
      component: () => import('@/views/AdSirenPop.vue')
    },
    {
      path: "/TotalAdmin",
      name: "TotalAdmin",
      component: () => import('@/views/TotalAdmin.vue')
    },
    {
      path: "/logSign",
      name: "logSign",
      component: () => import('@/views/logSign.vue')
    },
   
    
  ]
})

export default router
