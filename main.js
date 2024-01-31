// function home(){
//     window.location.href ="../main/index.html";
// }

function random_wish(){
    document.getElementById("open").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("btn").style.display="none";

    x = Math.floor(Math.random() * 10);
    var wish = localStorage.getItem(x)
    document.getElementById("wish_id").innerText = wish;

    y = Math.floor(Math.random() * 4)+10;
    var pic = localStorage.getItem(y);
    document.getElementById("dragon").innerHTML = pic;

    autoType(".type-js",50);
}

document.addEventListener("DOMContentLoaded", function() {
    var nameLogin = localStorage.getItem("nameLogin");
    if (nameLogin) {
        document.getElementById("name_login_change").innerText = nameLogin;
    }
});
function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });

    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }
  


// DATA
localStorage.setItem("0"," Chúc mừng năm mới! Mong rằng năm mới sẽ mang đến cho "+localStorage.getItem("nameLogin")+" những khoảnh khắc đáng nhớ, niềm vui và thành công. Hãy bước vào năm mới với nhiều hy vọng, đam mê và sự kiên nhẫn để đạt được những ước mơ và mục tiêu của mình.");
localStorage.setItem("1"," Chúc mừng năm mới! Chúc "+localStorage.getItem("nameLogin")+" và gia đình có một năm mới an lành, hạnh phúc và tràn đầy sức khỏe. Mong rằng những điều tốt đẹp sẽ đến với "+localStorage.getItem("nameLogin")+" và "+localStorage.getItem("nameLogin")+" sẽ trải qua những trải nghiệm tuyệt vời trong cuộc sống và công việc.");
localStorage.setItem("2"," Chúc mừng năm mới! Hãy để năm mới đánh dấu một khởi đầu mới, một cơ hội để vươn lên và đạt được những thành công lớn. Cầu mong rằng "+localStorage.getItem("nameLogin")+" sẽ gặt hái được thành quả trong mọi công việc và tận hưởng cuộc sống đầy ý nghĩa và hạnh phúc.");
localStorage.setItem("3"," Chúc mừng năm mới! Mong rằng năm mới sẽ mang đến cho "+localStorage.getItem("nameLogin")+" nhiều cơ hội mới, những niềm vui và thành công. Hãy tận dụng mỗi ngày để đạt được mục tiêu và hoàn thành những ước mơ của mình. Chúc "+localStorage.getItem("nameLogin")+" có một năm mới tràn đầy năng lượng và đáng nhớ.");
localStorage.setItem("4"," Chúc mừng năm mới! Hãy để những ngày đầu năm mới là thời điểm để lạc quan, đặt mục tiêu và tin rằng mọi điều tốt đẹp sẽ đến. Chúc "+localStorage.getItem("nameLogin")+" và gia đình có một năm mới tràn đầy niềm vui, yêu thương và thành công trong mọi lĩnh vực của cuộc sống.");
localStorage.setItem("5"," Chúc mừng năm mới! Mong rằng năm mới sẽ mang đến cho "+localStorage.getItem("nameLogin")+" sự bình an, sức khỏe và may mắn. Hãy trân trọng những giây phút bên gia đình và những người thân yêu và hãy luôn lưu giữ những giá trị gia đình trong trái tim mình.");
localStorage.setItem("6"," Chúc mừng năm mới! Mong rằng mỗi ngày trong năm mới đều mang đến cho "+localStorage.getItem("nameLogin")+" niềm vui, sự thành công và hạnh phúc. Hãy đặt mục tiêu cao và không ngừng cố gắng để đạt được những ước mơ và khát vọng của mình.");
localStorage.setItem("7"," Chúc mừng năm mới! Hãy để năm mới là thời điểm để tận hưởng cuộc sống, khám phá những điều mới mẻ và trân trọng những người xung quanh "+localStorage.getItem("nameLogin")+". Cầu mong rằng năm mới sẽ mang đến cho "+localStorage.getItem("nameLogin")+" nhiều niềm vui và thành công.");
localStorage.setItem("8"," Chúc mừng năm mới! Mong rằng năm mới sẽ mang đến cho "+localStorage.getItem("nameLogin")+" sự thịnh vượng và thành công trong mọi lĩnh vực của cuộc sống. Hãy tin rằng mọi khó khăn sẽ trở thành cơ hội để "+localStorage.getItem("nameLogin")+" vươn lên và trưởng thành. Chúc "+localStorage.getItem("nameLogin")+" có một năm mới đầy triển vọng và đạt được những thành tựu vượt trội.");
localStorage.setItem("9"," Chúc mừng năm mới! Hãy để năm mới là thời điểm để bắt đầu lại, xóa tan những nỗi lo và nỗ lực để thực hiện những ước mơ của mình. Cầu mong rằng năm mới sẽ mang đến cho "+localStorage.getItem("nameLogin")+" niềm tin, sự may mắn và thành công trong tất cả những gì "+localStorage.getItem("nameLogin")+" làm.");

localStorage.setItem("10","<img src='./img/1.jpg'>");
localStorage.setItem("11","<img src='./img/2.jpg'>");
localStorage.setItem("12","<img src='./img/3.jpg'>");
localStorage.setItem("13","<img src='./img/4.jpg'>");










