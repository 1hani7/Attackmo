<template>
    <div id="modal" class="modal-overlay">
        <div class="modal-window">
            <div class="title">
                <h2>회원명</h2>
            </div>
                <div class="close-area">X</div>
                <div class="content">경고 / N회</div>
                <div class="content">정지 / N회 남음</div>
            <div id="warring" class="content">
                <p>경고 1회 누적</p>
            </div>
            <div id="delete" class="content">
              <button>회원 삭제</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
        #modal.modal-overlay {
            width: 100%;
            height: 100%;
            position: relatvie;
            /*position:absolute; 가 맞으나 이걸로 화면 화면에 이상하게나옴*/
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.25);
            border-radius: 10px;
            font-size:23px;
        
        }
        #modal .modal-window {
            background:white;
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 13.5px );
            border-radius: 10px;          
            width: 290px;
            height: 300px;
            position: relative;
            /* top: -100px; */
            padding: 10px;
        }
        #modal .title {
            padding-left: 10px;
            display: inline;
            color: black;          
        }
        #modal .title h2 {
            display: inline;
        }
        #modal .close-area {
            display: inline;
            float: right;
            padding-right: 10px;
            cursor: pointer;
            color: black;
        }
        #modal .content {
            margin-top: 20px;
            padding: 0px 10px;
            color: black;
        }
        #delete button{
            width:250px;
            height:33px;
            border-radius: 10px;
            border:none;
            color:white; 
            background: #B91646;
            font-size: 23px;
            font-weight: 700;
        }
        #warring p{
            width:250px;
            height:33px;
            border-radius: 10px;
            border:1px solid black;
            color:black;
            background: white;
            font-size: 23px;
            font-weight: 700;
            text-align: center;
        }
        .content{font-weight: 700;}
</style>
<script>
    // export default {
    // data() {
    //     return {
    //     isModalOn: false
    //     };
    // },
    // methods: {
    //     modalOn() {
    //     this.isModalOn = true;
    //     },
    //     modalOff() {
    //     this.isModalOn = false;
    //     },
    //     deleteMember() {
    //     // 회원 삭제 기능을 여기에 구현합니다.
    //     // API 호출 또는 필요한 작업을 수행할 수 있습니다.
    //     this.modalOff(); // 삭제 후 모달을 닫습니다.
    //     }
    // }
    // };
</script>