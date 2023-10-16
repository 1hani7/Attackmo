<template>
    <section id="section">
        <div id="rec_wrap">
            <div id="title">
                {{ month }}월 {{ weekNumber }}주차 추천영화
            </div>
            <p class="alert_font">* 매주 일요일 0시에 업데이트됩니다.</p>
            <div id="con_box">
                <div id="content">
                    <div class="movie" v-for="data in recList" :key="data">
                        <router-link :to="{ name: 'MovieTitle', query: { movieName: data.제목 } }">
                            <div class="imgWrapper"><img :src="data.포스터" :alt="data.제목"></div>
                            <b>{{ data.제목 }}</b>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { inject } from 'vue'
export default {
    setup() {
        const recList = JSON.parse(localStorage.getItem('recList'));
        const isSundayMidnight = inject('isSundayMidnight');
        const month = inject('month');
        const weekNumber = inject('weekNumber');

        return {
            month,
            weekNumber, recList,
            isSundayMidnight
        };
    }
}
</script>

<style scoped>
@import url('../assets/css/recHistory.css');
</style>