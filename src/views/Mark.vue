<template>
  <section id="section">
    <div id="mark_wrap">
      <p class="mark_title">
          영화 북마크
      </p>
      <div class="movie_wrap">
        <div class="m_box">
          <RouterLink to="" class="mark" v-for="(mark, index) in randomMarks" :key="index" @mouseover="showMark(index)" @mouseleave="hideMark()">
            <div class="markMovie" :class="{'active' :showMarkIndex === index}">
              <div class="movieTitle">{{ mark.제목 }}</div>
              <div class="summary">{{ mark.줄거리 }}</div>
            </div>
            <img :src="mark.포스터" :alt="mark.제목" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Mark',
  setup() {
    const data = JSON.parse(localStorage.getItem('set'));

    const showMarkIndex = ref(null);

    const showMark = (index) => {
      showMarkIndex.value = index;
    };

    const hideMark = () => {
      showMarkIndex.value = null;
    };

    const randomMarks = ref([]);
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomMarks.value.push(data[randomIndex]);
    }

    return {
      showMarkIndex,
      showMark,
      hideMark,
      randomMarks,
    };
  },
};
</script>

<style scoped>
@import url('../assets/css/mark.css');
</style>