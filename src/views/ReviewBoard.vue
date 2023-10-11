<template>
    <section id="section">
        <div id="wrap">
            <p id="title">리뷰게시판</p>
            <RouterLink to="/Rwrite" id="write">
                <i class="bi bi-pencil-square"></i>
            </RouterLink>
            <div class="main">
                <div id="search_box">
                    <input type="text" id="search" placeholder="검색어를 입력해주세요">
                    <i class="bi bi-search"></i>
                </div>
                <table class="list">
                    <thead>
                        <tr>
                            <td class="n">번호</td>
                            <td class="t">제목</td>
                            <td class="w">작성자</td>
                            <td class="d">날짜</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="con" v-for="(item, index) in displayedList" :key="index">
                        <td class="n">{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
                        <td class="t"><RouterLink to='/Rread'>{{ item.rTitle }}</RouterLink></td>
                        <td class="w">{{ item.rWriter }}</td>
                        <td class="d">{{ item.rDate }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mobileList">
                    <div class="post" v-for="(item, index) in displayedList" :key="index">
                        <div class="m_t"><RouterLink to='/Rread'>{{ item.rTitle }}</RouterLink></div>
                        <div class="m_w">{{ item.rWriter }}</div>
                        <div class="m_d">{{ item.rDate }}</div>
                    </div>
                </div>
            </div>
            <div class="page_list">
                <i class="bi bi-chevron-double-left" @click="goToPage(1)"></i>
                <i class="bi bi-chevron-left" @click="goToPage(currentPage - 1)"></i>
                <RouterLink v-for="page in pageCount" :key="page" :to="'/ReviewBoard/:' + page">{{ page }}</RouterLink>
                <i class="bi bi-chevron-right" @click="goToPage(currentPage + 1)"></i>
                <i class="bi bi-chevron-double-right" @click="goToPage(pageCount)"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'귤먹고 뒹굴뒹굴',rDate:'2021.12.31'},
                {rTitle:'오랜만에 봐도 좋은 영화..',rWriter:'아이언맨',rDate:'2022.01.01'},
                {rTitle:'이건 안보면 영화광이라고 말할 수 없는',rWriter:'스칼렛',rDate:'2022.01.01'},
                {rTitle:'어떻게 연기를 이렇게 살벌하게 하시는지',rWriter:'마크야',rDate:'2022.01.01'},
                {rTitle:'어떻게 연기를 이렇게 살벌하게 하시는지',rWriter:'마크야',rDate:'2022.01.01'},
                {rTitle:'어떻게 연기를 이렇게 살벌하게 하시는지',rWriter:'마크야',rDate:'2022.01.01'},
                {rTitle:'어떻게 연기를 이렇게 살벌하게 하시는지',rWriter:'마크야',rDate:'2022.01.01'},
                {rTitle:'배우라고 생각이 들지 않고 저 사람이 지금 실존하는 것 같네요..',rWriter:'체리',rDate:'2022.01.01'},
                {rTitle:'배우라고 생각이 들지 않고 저 사람이 지금 실존하는 것 같네요..',rWriter:'체리',rDate:'2022.01.01'},
                {rTitle:'휴...지가 굉장히 많이 필요한...',rWriter:'로키',rDate:'2022.01.01'},
                {rTitle:'마피아 막내아들인 내가 평범한 삶을 살다가 보스가 된 건에 대하여..',rWriter:'지켜본다',rDate:'2022.01.01'},
                {rTitle:'이거 보고 나서 복서가 꿈이에요..',rWriter:'만다린',rDate:'2022.01.01'},
                {rTitle:'마블 이넘들은 어디까지 가는겨',rWriter:'앱플',rDate:'2022.01.01'},
                {rTitle:'마블 이넘들은 어디까지 가는겨',rWriter:'앱플',rDate:'2022.01.01'},
                {rTitle:'마블 이넘들은 어디까지 가는겨',rWriter:'앱플',rDate:'2022.01.01'},
                {rTitle:'마블 이넘들은 어디까지 가는겨',rWriter:'앱플',rDate:'2022.01.01'},
                {rTitle:'오토라는 남자는....',rWriter:'오토모',rDate:'2022.01.01'},
                {rTitle:'금자는 지금 행복할까',rWriter:'기아',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'skjjdk',rDate:'2022.01.02'},
                {rTitle:'이야 역시 봉준호',rWriter:'기생',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'skjjdk',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'ghkfehd',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'sndjc',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'디즈니광',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'미키마우스',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'도날드덕',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'톰',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'제리',rDate:'2022.01.02'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'스트로베리',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'멜론',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'8월 15일',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'벨보이',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'미녀광인',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'귤먹고 뒹굴뒹굴',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'한라봉',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'폼폼푸린',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'시나모롤',rDate:'2022.01.03'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'쿠마',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'포챠코',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'쿠로미',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'마이멜로디',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'미피',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'해바라기씨',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'햄토리',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'갈비찜덮밥',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'이빨요정',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'산타',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'톸끼',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'뵤',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'왈왈',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'갈비찜덮밥',rDate:'2022.01.04'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'췌리',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'도날드덕',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'만다린',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'마피아',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'록키',rDate:'2022.01.05'},
                {rTitle:'배우라고 생각이 들지 않고 저 사람이 지금 실존하는 것 같네요..',rWriter:'체리',rDate:'2022.01.05'},
                {rTitle:'배우라고 생각이 들지 않고 저 사람이 지금 실존하는 것 같네요..',rWriter:'체리',rDate:'2022.01.05'},
                {rTitle:'배우라고 생각이 들지 않고 저 사람이 지금 실존하는 것 같네요..',rWriter:'체리',rDate:'2022.01.05'},
                {rTitle:'배우라고 생각이 들지 않고 저 사람이 지금 실존하는 것 같네요..',rWriter:'체리',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'로ㅋ',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'멜론',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'지켜본다',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'보름달덩이',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'내맘대로',rDate:'2022.01.05'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'두고봐라',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'오토마타',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'탄탄',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'웨용',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'구찌',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'갱갱',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'마르젤라',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'로ㅋ',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'아이언맨',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'쿠마',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'시나모롤',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'마이멜로디',rDate:'2022.01.06'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'사랑',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'비슷한걸 해요',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'자이언트',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'떡볶이',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'김밥',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'고구마튀김',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'하와이안',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'비빔면',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'빙글빙글',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'맷돌',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'맹구',rDate:'2022.01.07'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'아픔',rDate:'2022.01.07'},
            ],
            itemsPerPage: 15, // 페이지 당 표시할 게시글 수
            currentPage: 1, // 현재 페이지
        };
    },
    computed: {
        displayedList() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.list.slice(startIndex, endIndex);
        },
        pageCount() {
            return Math.ceil(this.list.length / this.itemsPerPage);
        },
    },
    methods: {
        goToPage(page) {
            if (page < 1) {
                page = 1;
            } else if (page > this.pageCount) {
                page = this.pageCount;
            }
            this.currentPage = page;

            this.$router.push('/ReviewBoard/:' + page);
        },
    },
};
</script>

<style>
@import url('../assets/css/reviewList.css');
</style>