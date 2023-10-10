<template>
    <section id="section">
        <div id="review_wrap">
            <b class="page_title">리뷰</b>
            <div class="review_con">
                <div class="main_content">
                    <div class="review_title">
                        <p class="title">별 기대 안 하고 가볍게 봤는데 진짜 대박이네요...</p>
                        <div class="heart_wrap">
                            <i class="bi bi-heart" @click="toggleLike" :class="{ 'hidden' : liked }"></i>
                            <i class="bi bi-heart-fill" @click="toggleLike" :class="{ 'hidden' : !liked }"></i>
                            <div class="ani"></div>
                        </div>
                    </div>
                    <div class="write_info">
                        <div class="writer">귤까고뒹굴뒹굴</div>
                        <div class="write_d">2023.09.08</div>
                    </div>
                    <div class="con_detail">
                        <RouterLink to="/MovieTitle"><div class="p_box"><img class="poster" src="../images/img/잠.jpg" /></div></RouterLink>
                        <div class="movie_info">
                            <div class="movie_name">잠</div>
                            <div class="movie_release">2023.09.06 개봉</div>
                            <div class="movie_detail">
                                <div class="info_l">
                                    <p>감독</p>
                                    <p>출연</p>
                                    <p>장르</p>
                                    <p>러닝</p>
                                </div>
                                <div class="info_r">
                                    <p>유재선</p>
                                    <p>정유미, 이선균, 김금순</p>
                                    <p>호러 / 스릴러</p>
                                    <p>94분</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="review_text">
                        주변에서 재밌다고 추천해주길래 불금이기도 해서 바로 봤는데 이선균 연기 너무 잘하고 한 시도 긴장감을 늦출 수
                        없는 전개라 계속 손에 땀을 쥐고 봤네요.<br />팝콘 다 남기고 왔음 ㄹㅇ ㅋㅋㅋㅋㅋ
                    </p>
                    <div class="star_score">
                        <p class="star_rate">별점 5/5</p>
                        <div class="stars">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <div class="post_menu">
                        <div class="rePost">수정</div>
                        <div class="del" @click="postDel">삭제</div>
                        <div class="siren" @click="openSirenPopup">신고</div>
                    </div>
                </div>
            </div>
            <div class="reply_wrap">
                <div class="hReply">댓글 N</div>
                <div class="bReply">
                    <div class="write_reply">
                        <input type="text" placeholder="바른 말 고운 말, 함께 만드는 댓글 문화!">
                        <button class="reply_bt">등록하기</button>
                    </div>
                    <div class="reply" v-for="(reply, index) in replies" :key="index">
                        <div class="reply_info">
                            <div class="nickName">{{ reply.nickName }}</div>
                            <div class="wDate">{{ reply.date }}</div>
                            <div class="reply_menu">
                                <p class="rePost_reply">수정</p>
                                <p class="del_reply" @click="() => deleteComment(index)">삭제</p>
                                <p class="siren_reply" @click="openSirenPopup">신고</p>
                            </div>
                        </div>
                        <div class="reply_text">{{ reply.text }}</div>
                    </div>
                    <div class="mReply_wrap">
                        <div class="mReply_box" v-for="(reply, index) in replies" :key="index">
                            <div class="mReply">
                                <span class="n_name">{{ reply.nickName }}</span>
                                {{ reply.text }}
                            </div>
                            <div class="mReply_menu">
                                <p class="rePost_reply">수정</p>
                                <p class="del_reply" @click="() => deleteComment(index)">삭제</p>
                                <p class="siren_reply" @click="openSirenModal">신고</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sirenModal" v-if="isModalOpen">
                <div class="modal-content">
                    <div id="title">
                        신고 사유
                    </div>
                    <div id="wrap">
                        <div>
                            <input type="radio" id="abuse" name="siren" value="abuse">
                            <label for="abuse">욕설, 비방, 차별, 혐오</label>
                        </div>
                        <div>
                            <input type="radio" id="promotion" name="siren" value="promotion">
                            <label for="promotion">홍보, 영리목적</label>
                        </div>
                        <div>
                            <input type="radio" id="illegal" name="siren" value="illegal">
                            <label for="illegal">불법정보</label>
                        </div>
                        <div>
                            <input type="radio" id="lewd" name="siren" value="lewd">
                            <label for="lewd">음란, 청소년 유해</label>
                        </div>
                        <div>
                            <input type="radio" id="personal" name="siren" value="personal">
                            <label for="personal">개인정보 노출, 금융 거래</label>
                        </div>
                        <div>
                            <input type="radio" id="spam" name="siren" value="spam">
                            <label for="spam">도배, 스팸</label>
                        </div>
                        <div>
                            <input type="radio" id="etc" name="siren" value="etc" v-model="radioOption">
                            <label for="etc">기타</label><br>
                            <input type="text" id="etc" class="etcText" placeholder="신고사유를 적어주세요"
                            v-if="radioOption === 'etc'">
                        </div>
                    </div>
                    <div id="bt_wrap">
                        <button class="cancel" @click="closeModal">취소</button>
                        <button class="registration">등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter} from 'vue-router';

const liked = ref(false)
const isModalOpen = ref(false)
const router = useRouter();

const toggleLike = () => {
    const ani = document.querySelector('.ani');
    ani.classList.toggle('ani_active');
    liked.value = !liked.value
}

const replies = ref([
    {
        nickName:'로고와스미스',
        date:'YYYY.MM.DD',
        text:'저도 진짜 재밌게 봤는데 영화 많이 보신분들한테는 좀 식상할 수도 있음'
    },
    {
        nickName:'동과젤리',
        date:'YYYY.MM.DD',
        text:'그럭저럭 나쁘진 않았는데 예고편에 나온 것만큼 대단하진 않았던 걸로'
    },
    {
        nickName:'망고젤리',
        date:'YYYY.MM.DD',
        text:'간만에 친구 만나서 같이 봤는데 생각했던 것보다 엄청 재밌어서 놀람 이선균이 이런 연기도 하네'
    },
    {
        nickName:'우웅증말기환자',
        date:'YYYY.MM.DD',
        text:'이제 무서워서 잠 어떻게 가는데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ'
    },
    {
        nickName:'성현박사맘',
        date:'YYYY.MM.DD',
        text:'몽유병이 진짜 같이 사는 사람끼리는 이보다 무서운게 없는 병익든요... 뭔가 남 일 같지 않아서 계속 손에 땀을 쥐면서 봤네요...'
    },
    {
        nickName:'바재부팅부',
        date:'YYYY.MM.DD',
        text:'나도 혹시 자는 중에 이러는거 아닌가 싶어서 무서워지네'
    },
    {
        nickName:'로고와스미스',
        date:'YYYY.MM.DD',
        text:'저도 진짜 재밌게 봤는데 영화 많이 보신분들한테는 좀 식상할 수도 있음'
    },
    {
        nickName:'동과젤리',
        date:'YYYY.MM.DD',
        text:'그럭저럭 나쁘진 않았는데 예고편에 나온 것만큼 대단하진 않았던 걸로'
    },
    {
        nickName:'망고젤리',
        date:'YYYY.MM.DD',
        text:'간만에 친구 만나서 같이 봤는데 생각했던 것보다 엄청 재밌어서 놀람 이선균이 이런 연기도 하네'
    },
    {
        nickName:'우웅증말기환자',
        date:'YYYY.MM.DD',
        text:'이제 무서워서 잠 어떻게 가는데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ'
    },
    {
        nickName:'성현박사맘',
        date:'YYYY.MM.DD',
        text:'몽유병이 진짜 같이 사는 사람끼리는 이보다 무서운게 없는 병익든요... 뭔가 남 일 같지 않아서 계속 손에 땀을 쥐면서 봤네요...'
    },
    {
        nickName:'바재부팅부',
        date:'YYYY.MM.DD',
        text:'나도 혹시 자는 중에 이러는거 아닌가 싶어서 무서워지네'
    },
    {
        nickName:'로고와스미스',
        date:'YYYY.MM.DD',
        text:'저도 진짜 재밌게 봤는데 영화 많이 보신분들한테는 좀 식상할 수도 있음'
    },
    {
        nickName:'동과젤리',
        date:'YYYY.MM.DD',
        text:'그럭저럭 나쁘진 않았는데 예고편에 나온 것만큼 대단하진 않았던 걸로'
    },
    {
        nickName:'망고젤리',
        date:'YYYY.MM.DD',
        text:'간만에 친구 만나서 같이 봤는데 생각했던 것보다 엄청 재밌어서 놀람 이선균이 이런 연기도 하네'
    },
    {
        nickName:'우웅증말기환자',
        date:'YYYY.MM.DD',
        text:'이제 무서워서 잠 어떻게 가는데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ'
    },
    {
        nickName:'성현박사맘',
        date:'YYYY.MM.DD',
        text:'몽유병이 진짜 같이 사는 사람끼리는 이보다 무서운게 없는 병익든요... 뭔가 남 일 같지 않아서 계속 손에 땀을 쥐면서 봤네요...'
    },
    {
        nickName:'바재부팅부',
        date:'YYYY.MM.DD',
        text:'나도 혹시 자는 중에 이러는거 아닌가 싶어서 무서워지네'
    },
])

const isLogin = inject('isLogin');

const openSirenPopup = () => {
    if( isLogin.value == true ){
        // sirenPop.vue를 열고, 부모 창으로부터 메시지를 받을 수 있도록 리스너 설정
        const sirenPopup = window.open('/Siren', '_blank', 'width=450,height=750,top=100px,left=700px');
        window.addEventListener('message', (event) => {
            // 팝업 창으로부터 메시지를 수신하면 이를 처리합니다.
            console.log('부모 창에서 수신한 메시지:', event.data);
        });
    }else{
        alert('로그인이 필요한 서비스입니다.')
        router.push('/login');
    }
}

const openSirenModal = () => {
    if(isLogin.value){
        isModalOpen.value=true;
    }else{
        alert('로그인이 필요한 서비스입니다.')
        router.push('/login');
    }
}
const closeModal = () => {
    isModalOpen.value = false;
}

const deleteComment = (index) => {
    if (isLogin.value) {
        if (confirm('댓글을 삭제하시겠습니까?')) {
            replies.value.splice(index, 1);
            alert('댓글이 삭제되었습니다.');
        }
    } else {
        alert('로그인이 필요한 서비스입니다.');
        router.push('/login');
    }
}

const postDel = () => {
    if(isLogin.value){
        if(confirm('리뷰를 삭제하시겠습니까?')){
            alert('리뷰가 삭제되었습니다.')
        }
    }else{
        alert('로그인이 필요한 서비스 입니다.')
        router.push('/login');
    }
}
</script>

<style scoped>
@import url('../assets/css/Rread.css');
.hidden{display:none;}
#title{
    font-size:17px;
    width:200px;
    padding: 20px 10px;
    font-weight: 900;
}
#wrap{
    margin: 0 10px;
}
#wrap div{
    font-size:12px;
    padding:10px 0;
    border-bottom:1px solid #ccc;
}
#wrap div:first-child{
    border-top:1px solid #ccc;
}
#wrap div label{
    margin-left:10px;
}
.etcText{
    height:30px;
    border-radius:30px;
    outline:0;
    padding-left:20px;
    border:1px solid #ccc;
}
#bt_wrap{
    width:100%;
    display:flex;
    justify-content:space-evenly;
    margin:30px 0;
}
#bt_wrap button{
    font-size:12px;
    font-weight:300;
    padding:5px 13px;
    border-radius:10px;
    cursor: pointer;
}
.cancel{
    background:#fff;
    color:#B91646;
    border:1px solid #B91646;
}
.registration{
    background:#B91646;
    color:#fff;
    border:0;
}
</style>