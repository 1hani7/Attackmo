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
                    <tbody class="con">
                        <tr v-for="(list,index) in list" :key="index">
                            <td class="n">{{ index }}</td>
                            <td class="t"><RouterLink to="/Rread">{{ list.rTitle}}</RouterLink></td>
                            <td class="w">{{ list.rWriter }}</td>
                            <td class="d">{{ list.rDate }}</td>
                        </tr>
                    </tbody>
                </table>
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
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'아이언맨',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'스칼렛',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'마크야',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'체리',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'로키',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'지켜본다',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'만다린',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'앱플',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'오토모',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'기아',rDate:'0000.00.00'},
                {rTitle:'리뷰 처음 써보는데 이 영화 괜찮네요',rWriter:'skjjdk',rDate:'0000.00.00'},
            ]  
        }
    }
    

    
}
</script>

<style>
@import url('../assets/css/reviewList.css');
</style>