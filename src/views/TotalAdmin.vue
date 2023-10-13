<template>
     <div id="wrap">
        <div id="nav">
            <ul class="list0">
                <li><RouterLink to="./Adsign">회원관리</RouterLink></li>
                <li><RouterLink to="./Adsiren">신고내역</RouterLink></li>
                <li><RouterLink to="./Adnotice">공지관리</RouterLink></li>
                <li><RouterLink to="./Arwrite">문의사항</RouterLink></li>
            </ul>
        </div>
        <div id="content">
            <p>관리자 페이지</p>
        </div>
    </div>
</template>
<style scoped>
     #nav{
        width:100%;
        display: inline-flex;
        height: 40px;
        padding: 80px 30px;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
    }
    .list0{
        list-style-type: none;
        display: flex;
        width: 1920px;
        padding: 0px 50px;
        justify-content: center;
        align-items: center;
        gap: 75px;
        font-weight: 800;
        font-size: 17px;
    }
    p{text-align: center;padding:200px; font-size: 40px;}
    
    
</style>
<script>

</script>