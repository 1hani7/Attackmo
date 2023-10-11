<template>
    <div class="screen">
      <div class="div">
        <div class="title">
          <div class="mainTitle">인기 TOP 10</div>
        </div>
        <div class="cont">
          <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle613.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle614.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle618.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle629.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle642.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle643.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle653.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle695.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle696.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle698.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
      <div class="div">
        <div class="title">
          <div class="mainTitle">기대작</div>
          <div class="plusBt"><RouterLink to="/Mcoming">+</RouterLink></div>
        </div>
        <div class="cont">
          <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle613.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle614.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle618.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle629.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle642.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle643.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle653.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle695.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle696.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle698.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
      <div v-if="isLogin" class="div">
        <div class="title">
          <div class="mainTitle">추천리스트</div>
          <RouterLink to="/RecHistory"><div class="plusBt">+</div></RouterLink>
        </div>
        <div class="cont">
          <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle613.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle614.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle618.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle629.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle642.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle643.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle653.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle695.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle696.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle698.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
      <div v-if="isLogin" class="div">
        <div class="title">
          <div class="mainTitle">리뷰 좋아요</div>
          <RouterLink to="/Like"><div class="plusBt">+</div></RouterLink>
        </div>
        <div class="cont">
          <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle613.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle614.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle618.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle629.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle642.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle643.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle653.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle695.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle696.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle698.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
      <div v-if="isLogin" class="div">
        <div class="title">
          <div class="mainTitle">영화 북마크</div>
          <RouterLink to="/Mark"><div class="plusBt">+</div></RouterLink>
        </div>
        <div class="cont">
          <i @mousedown="slideScrollLeft()" class="bi bi-chevron-compact-left"></i>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle613.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle614.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle618.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle629.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle642.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle643.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle653.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle695.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle696.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/MovieTitle">
            <div class="poster-box">
              <img class="image" src="@/images/Rectangle698.png" />
              <div class="view">
                <div class="movieTitle">영화제목</div>
                <div class="movieDate">개봉일</div>
              </div>
              <div class="starBox">
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starYellow">★</div>
                <div class="starBlack">★</div>
              </div>
            </div>
          </RouterLink>
          <i @mousedown="slideScrollRight()" class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
    </div>
</template>

<script>
import {inject} from 'vue';
export default{
    name:'MovieMain',
    setup(){
      const isLogin = inject('isLogin');

      const now = inject('now');

      // 슬라이드 스크롤
    const slideScrollRight = (t, i) => {
      const slider = event.target.parentNode;
      slider.scrollLeft += 900;
    }
    const slideScrollLeft = (t, i) => {
      const slider = event.target.parentNode;
      slider.scrollLeft -= 900;
    }

      return {isLogin, now,
        slideScrollRight, slideScrollLeft}
    }
}
</script>

<style>
@import url(./MovieMain.css);
</style>