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
                        <tr class="con" v-for="(list,index) in list" :key="index">
                            <td class="n">{{ index }}</td>
                            <td class="t"><RouterLink to="/Rread">{{ list.rTitle}}</RouterLink></td>
                            <td class="w">{{ list.rWriter }}</td>
                            <td class="d">{{ list.rDate }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mobileList">
                    <div class="post" v-for="(list,index) in list" :key="index">
                        <div class="m_t"><RouterLink to="/Rread">{{ list.rTitle }}</RouterLink></div>
                        <div class="m_w">{{ list.rWriter }}</div>
                        <div class="m_d">{{ list.rDate }}</div>
                    </div>
                </div>
            </div>
            <div class="page_list">
                <i class="bi bi-chevron-double-left"></i>
                <i class="bi bi-chevron-left"></i>
                <RouterLink to="">1</RouterLink>
                <RouterLink to="">2</RouterLink>
                <RouterLink to="">3</RouterLink>
                <RouterLink to="">4</RouterLink>
                <RouterLink to="">5</RouterLink>
                <RouterLink to="">6</RouterLink>
                <RouterLink to="">7</RouterLink>
                <RouterLink to="">8</RouterLink>
                <RouterLink to="">9</RouterLink>
                <RouterLink to="">10</RouterLink>
                <i class="bi bi-chevron-right"></i>
                <i class="bi bi-chevron-double-right"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'귤먹고 뒹굴뒹굴',rDate:'0000.00.00'},
                {rTitle:'오랜만에 봐도 좋은 영화..',rWriter:'아이언맨',rDate:'0000.00.00'},
                {rTitle:'이건 안보면 영화광이라고 말할 수 없는',rWriter:'스칼렛',rDate:'0000.00.00'},
                {rTitle:'어떻게 연기를 이렇게 살벌하게 하시는지',rWriter:'마크야',rDate:'0000.00.00'},
                {rTitle:'배우라고 생각이 들지 않고 저 사람이 지금 실존하는 것 같네요..',rWriter:'체리',rDate:'0000.00.00'},
                {rTitle:'휴...지가 굉장히 많이 필요한...',rWriter:'로키',rDate:'0000.00.00'},
                {rTitle:'마피아 막내아들인 내가 평범한 삶을 살다가 보스가 된 건에 대하여..',rWriter:'지켜본다',rDate:'0000.00.00'},
                {rTitle:'이거 보고 나서 복서가 꿈이에요..',rWriter:'만다린',rDate:'0000.00.00'},
                {rTitle:'마블 이넘들은 어디까지 가는겨',rWriter:'앱플',rDate:'0000.00.00'},
                {rTitle:'오토라는 남자는....',rWriter:'오토모',rDate:'0000.00.00'},
                {rTitle:'금자는 지금 행복할까',rWriter:'기아',rDate:'0000.00.00'},
                {rTitle:'우디야 자유롭게 살어',rWriter:'skjjdk',rDate:'0000.00.00'},
            ]  
        }
    }
    

    
}
</script>

<style>
@import url('../assets/css/reviewList.css');
</style>