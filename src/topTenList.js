let topTenList = [];

$(async function(){
    var t = await getList();

    t.forEach(function(item){
        topTenList.push(item.movieNm);
    });
});


async function getList(){
    const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    const key = 'key=2308fbf71d40ed61712d0284758d4612&';
    const targetDt = 'targetDt='+dailyBoxOffice();

    var temp = await fetch(url+key+targetDt).then(r=>r.json()).then(r=>r);
    return temp.boxOfficeResult.dailyBoxOfficeList;
}


function dailyBoxOffice(){
    const timeBackNumber = 1;
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - timeBackNumber);
    console.log(yesterday)
    var year = yesterday.getFullYear();
    var month = String(yesterday.getMonth() + 1).padStart(2, '0');
    var day = String(yesterday.getDate()).padStart(2, '0');
    return `${year}${month}${day}`
}

export {topTenList}