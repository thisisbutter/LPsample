topImage = new Array (
    "./image/free-to-use-sounds-3jNE1Uc257I-unsplash.jpg",
    "./image/toa-heftiba-HbUEtK9vnJc-unsplash.jpg",
    "./image/lama-roscu-Wpg3Qm0zaGk-unsplash (1).jpg",
)
var imgCount = 0;
// var nowCount = -1;
// var flg = 0;

function slideImage() {
    // nowCount = (nowCount < topImage.length -1)? nowCount+1 : 0;
    // flg = (flg == 0)? 1:0;
    // if(flg == 0){
    //     document.getElementById("idshow1").src = topImage[nowCount];
    //     // 次の画像をセットする
    //     document.getElementById("idshow1").className = "fadein";
    //     // フェードイン
    //     document.getElementById("idshow2").className = "fadeout";
    //     // フェードアウト
    //     }else{
    //     document.getElementById("idshow2").src = topImage[nowCount];
    //     // 次の画像をセットする
    //     document.getElementById("idshow1").className = "fadeout";
    //     // フェードアウト
    //     document.getElementById("idshow2").className = "fadein";
    // }
    // setTimeout("slideImage()", 5000);

    if(imgCount == topImage.length -1){
        imgCount = 0 ;
    } else {
        imgCount++;
    }
    document.roop.src = topImage[imgCount];
    setTimeout("slideImage()", 5000);
}

// slideImage();
//=====================
// 動きのコード▼
//=====================

ScrollReveal().reveal('.mid_contents', {
    delay: 400,
    duration: 1000,
    distance: '60px',
    origin: 'bottom',
});  //コンセプトをふわっと

ScrollReveal().reveal('.one_of_quarter', { 
    delay: 400,
    duration: 1000,
    distance: '100px',
    origin: 'bottom',
  }); //4枚写真の動き
ScrollReveal().reveal('.one_of_quarter2', { 
    delay: 500,
    duration: 1000,
    distance: '100px',
    origin: 'bottom',
  }); //4枚写真の動きのうちの時差ぶん

ScrollReveal().reveal('.one_of_nine', { 
    delay: 400,
    duration: 1000,
    distance: '100px',
    origin: 'bottom',
  }); //9枚写真の小さい方

ScrollReveal().reveal('.last_contents', {
    delay: 400,
    duration: 800,
    distance: '60px',
    origin: 'bottom',
});
