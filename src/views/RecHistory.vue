<template>
<section id="section">
        <div id="rec_wrap">
            <div id="title">
                N월 N주 추천영화
            </div>
            <div id="con_box">
                <div id="content">
                    <div class="movie" v-for="data in randomMovies" :key="randomMovies">
                        <router-link :to="{ name: 'MovieTitle', query:{ movieName: data.제목 } }">
                            <img :src="data.포스터" :alt="data.제목">
                            <b>{{ data.제목 }}</b>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const set = JSON.parse(localStorage.getItem('set'));

const getRandomMovies = () => {
  const numberOfMoviesToSelect = 12;
  const randomMovies = [];

  while (randomMovies.length < numberOfMoviesToSelect && set.length > 0) {
    const randomIndex = Math.floor(Math.random() * set.length);
    randomMovies.push(set[randomIndex]);
    set.splice(randomIndex, 1); // 중복 선택 방지를 위해 이미 선택한 항목은 배열에서 제거
  }

  return randomMovies;
};

const randomMovies = getRandomMovies();
</script>

<style scoped>
@import url('../assets/css/recHistory.css');
</style>