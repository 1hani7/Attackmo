<template>
    <div id="resBox">
        <!-- <img src="@/images/exitBt.svg" class="exit" @click="searchingStart()"> -->
        <div v-for="value in searchRes" :key="value" class="searchWrap">
            <form action="/MovieTitle" method="get" name="movieName">
                <input type="hidden" name="movieName" :value="value.제목">
                <button type="submit">
                    <div class="posterWrap">
                        <img :src="value.포스터" alt="poster">
                    </div>
                    <div class="infoWrap">
                        <div class="title">
                            <strong>{{ value.제목 }}</strong>
                        </div>
                        <div class="onMobile">
                            <div class="director">
                                <strong>감독</strong><span>{{ value.감독 }}</span>
                            </div>
                            <div class="staring">
                                <div><strong>출연</strong></div>
                                <div><span v-for="name in value.배우">{{ name }}, </span></div>
                            </div>
                            <div class="genre">
                                <strong>장르</strong><span>{{ value.장르 }}</span>
                            </div>
                            <div class="time">
                                <strong>러닝</strong><span>{{ value.러닝타임 }}</span>
                            </div>
                            <div class="date">
                                <span>{{ value.개봉일 }}</span>
                            </div>
                        </div>
                    </div>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { inject, watch, onMounted, ref } from 'vue';
export default {
    name: 'searchBar',
    setup() {
        const searchingStart = inject('searchingStart');

        const set = JSON.parse(localStorage.getItem('set'));
        const searchRes = ref('');
        const searchVal = inject('searchVal');
        const actors = ref('');

        const path = ref('');

        onMounted(() => {
            watch(searchVal, (newVal, oldVal) => {
                let res = [];
                res = set.filter(function (item) {
                    return item.제목.indexOf(searchVal.value) > -1;
                });
                searchRes.value = res;
                console.log(searchRes.value);
            });
        });

        return { searchingStart, set, searchRes, actors, path };
    }
}
</script>

<style scoped>
@import url(./searchBar.css);
</style>