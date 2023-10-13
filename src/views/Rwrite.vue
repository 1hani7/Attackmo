<template>
    <section id="section">
        <div id="wrap">
            <p id="title">리뷰 작성하기</p>
            <div class="content">
                <div class="t_input">
                    <label>제목</label>
                    <input type="text" id="t_input" name="t_input" placeholder="제목을 입력해주세요">
                </div>
                <div class="select_m">
                    <label>영화</label>
                    <input type="text"
                        id="search_m"
                        v-model="searchQuery"
                        placeholder="영화제목을 입력해주세요"
                        @focus="showSearchResult"
                        @blur="hideSearchResult"
                        @click="toggleSearchResult"
                    />
                    <div class="search-result" v-show="isSearchResultVisible">
                        <div class="movie_p" v-for="movie in set" :key="movie">
                            <img :src="movie.포스터                                                                                                                                                                               " alt="Movie Poster" @click="pickMovie(movie)"/>
                            <p>{{ movie.제목 }}</p>
                        </div>
                    </div>
                    
                </div>
                <div id="star">
                    <p>별점</p>
                    <div class="dv-rate">
                        <input type="radio" id="star5" value="5" name="rb_star" />
                        <label for="star5" title="5">
                            <i class="bi bi-star-fill"></i>
                        </label>
                        <input type="radio" id="star4" value="4" name="rb_star" />
                        <label for="star4" title="4">
                            <i class="bi bi-star-fill"></i>
                        </label>
                        <input type="radio" id="star3" value="3" name="rb_star" />
                        <label for="star3" title="3">
                            <i class="bi bi-star-fill"></i>
                        </label>
                        <input type="radio" id="star2" value="2" name="rb_star" />
                        <label for="star2" title="2">
                            <i class="bi bi-star-fill"></i>
                        </label>
                        <input type="radio" id="star1" value="1" name="rb_star" />
                        <label for="star1" title="1">
                            <i class="bi bi-star-fill"></i>
                        </label>
                    </div>
                </div>
                <div id="movie_point">
                    <p>감상포인트</p>
                    <div class="point_wrap">
                        <div class="point">
                            <input type="checkbox" v-model="checkboxes[0]" @change="checkSelections" name="art" id="art" class="pointInput">
                            <label for="art" class="ckeM">작품성</label>
                        </div>
                        <div class="point">
                            <input type="checkbox" v-model="checkboxes[1]" @change="checkSelections" name="fun" id="fun" class="pointInput">
                            <label for="fun" class="ckeM">오락성</label>
                        </div>
                        <div class="point">
                            <input type="checkbox" v-model="checkboxes[2]" @change="checkSelections" name="ost" id="ost" class="pointInput">
                            <label for="ost" class="ckeM">음악</label>
                        </div>
                        <div class="point">
                            <input type="checkbox" v-model="checkboxes[3]" @change="checkSelections" name="act" id="act" class="pointInput">
                            <label for="act" class="ckeM">연기력</label>
                        </div>
                        <div class="point">
                            <input type="checkbox" v-model="checkboxes[4]" @change="checkSelections" name="direct" id="direct" class="pointInput">
                            <label for="direct" class="ckeM">연출력</label>
                        </div>
                    </div>
                </div>
                <div id="detail_input">
                    <label>내용</label>
                    <textarea name="de_con" id="de_con" style="resize:none"></textarea>
                </div>
            </div>
            <div id="bt_wrap">
                <RouterLink to="/ReviewBoard/:1"><button>취소</button></RouterLink>
                <button>등록하기</button>
            </div>
        </div>
    </section>
</template>


<script>
import { ref, computed, onMounted } from 'vue';
import selectMovie from '../views/SelectM.vue'; // selectMovie 컴포넌트를 가져옵니다.

export default {
    name: 'ReviewForm',
    components: { // components 속성을 사용하여 selectMovie 컴포넌트를 등록합니다.
        selectMovie,
    },
    setup() {
        const set = JSON.parse(localStorage.getItem('set'));
        const searchQuery = ref('');
        const checkboxes = ref([false, false, false, false, false]); // 체크박스 선택 상태를 저장하는 배열
        const isSearchResultVisible = ref(false);

        const filteredMovies = computed(() => {
            const word = searchQuery.value.trim().toLowerCase();
            return set.filter(movie => movie.제목.toLowerCase().includes(word));
        });

        const showSearchResult = () => {
            isSearchResultVisible.value = true;
            // 검색 결과 컨테이너가 다시 표시되면 스크롤을 초기화
            const searchResultContainer = document.querySelector('.search-result');
            if (searchResultContainer) {
                searchResultContainer.scrollTop = 0;
            }
        };

        const hideSearchResult = () => {
            isSearchResultVisible.value = false;
        };

        onMounted(() => {
            $("#search_m").on("keyup", function () {
                searchQuery.value = $(this).val();
            });
        });

        const checkSelections = () => {
            const selectedCount = checkboxes.value.filter(checked => checked).length;
            if (selectedCount >= 2) {
                if (selectedCount > 2) {
                    alert('2개 이상의 체크박스가 선택되었습니다.');
                }
                checkboxes.value = checkboxes.value.map((checked, index) => {
                    if (checked && selectedCount > 2) {
                        return false;
                    }
                    return checked;
                });
            }
        };

        return {
            searchQuery,
            filteredMovies,
            isSearchResultVisible,
            checkboxes,
            showSearchResult,
            hideSearchResult,
            checkSelections,
            set,
        };
    },
};
</script>
<style scoped>
@import url('../assets/css/writeReview.css');
</style>