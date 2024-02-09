var large = document.getElementsByClassName("large");
var small = document.getElementsByClassName("small");
var windowWidth = window.innerWidth;

if (windowWidth <= 800) {
  for (var i = 0; i < large.length; i++) {
    large[i].remove();
  }
} else {
  for (var i = 0; i < small.length; i++) {
    small[i].remove();
  }
}

document.getElementById("name_login").addEventListener("input", function(event) {
    check(event);
    localStorage.setItem("nameLogin",document.getElementById("name_login").value)
});

function check(event) {
    var check = 1;

    var name = document.getElementById("name_login");
    var nameerror = document.getElementById("error");
    var nameRegex = /^[\p{L}\s]+$/u; // chỉ chứa chữ cái và dấu cách

    if (name.value === "") {
      nameerror.style.display = "block";
      nameerror.innerHTML = "Vui lòng nhập họ tên.";
      name.focus();
      check++;
    } else if (!nameRegex.test(name.value)) {
      nameerror.style.display = "block";
      nameerror.innerHTML = "Tên chỉ bao gồm chữ cái hoa và thường.";
      name.focus();
      check++;
    } else {
      nameerror.style.display = "none";
      nameerror.innerHTML = "";
      check = 0;
    }

    if (check ==0) {
      document.getElementById("success").style.pointerEvents = "auto";
    }
    else{
      document.getElementById("success").style.pointerEvents = "none";
    }

document.getElementById("name_login").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút Enter (ví dụ: gửi form)
        document.getElementById("success").click(); // Kích hoạt sự kiện click của nút button
    }
});

}

var check_credits = 1;

function Credits() {
  if (check_credits === 2) {
    window.location.reload();
  } else {
    document.getElementById("form").style.display = "none";
    var elements = document.querySelectorAll(".truck-button");
    elements.forEach(function(element) {
      element.remove();
    });
    check_credits++;

    const credits = document.createElement('div');

    credits.classList.add('credits');
    credits.id = "credits-section";

    document.querySelector('.cre').prepend(credits);

    const Kien = document.createElement('img');
    Kien.src = './img/intro/Kiên.gif';
    Kien.style.width = '200px';
    Kien.style.position = 'absolute';
    Kien.style.top = '50%';
    Kien.style.left = '50%';
    Kien.style.transform = 'translate(-200px, -150px)';

    const Hanh = document.createElement('img');
    Hanh.src = './img/intro/Hạnh.gif';
    Hanh.style.width = '200px';
    Hanh.style.position = 'absolute';
    Hanh.style.top = '50%';
    Hanh.style.right = '50%';
    Hanh.style.transform = 'translate(200px, -150px)';

    const Kien_text = document.createElement('a');
    Kien_text.textContent = "Kiên Đức";
    Kien_text.href ="https://www.facebook.com/daylakienduc/";
    Kien_text.style.position = 'absolute';
    Kien_text.style.top = '50%';
    Kien_text.style.left = '50%';
    Kien_text.style.transform = 'translate(-170px, 50px)';
    Kien_text.style.zIndex="999999";
    Kien_text.style.fontSize ="30px"
    Kien_text.style.fontFamily ="font"
    Kien_text.style.fontWeight="700";
    Kien_text.style.color ="white";
    Kien_text.style.letterSpacing ="2px"

    const Hanh_text = document.createElement('a');
    Hanh_text.textContent = "Đình Hạnh";
    Hanh_text.href ="https://www.facebook.com/ndh9903";
    Hanh_text.style.position = 'absolute';
    Hanh_text.style.top = '50%';
    Hanh_text.style.right = '50%';
    Hanh_text.style.transform = 'translate(180px, 50px)';
    Hanh_text.style.zIndex="999999";
    Hanh_text.style.fontSize ="30px"
    Hanh_text.style.fontFamily ="font"
    Hanh_text.style.fontWeight="700";
    Hanh_text.style.color ="white";
    Hanh_text.style.letterSpacing ="2px"

    const des = document.createElement('a');
    des.textContent = "Design by Fee";
    des.href ="https://www.facebook.com/profile.php?id=100075518838744";
    des.style.position = 'absolute';
    des.style.top = '50%';
    des.style.left = '50%';
    des.style.transform = 'translate(-100px, 150px)';
    des.style.zIndex="999999";
    des.style.fontSize ="24px"
    des.style.fontFamily ="font"
    des.style.fontWeight="700";
    des.style.color ="white";
    des.style.letterSpacing ="2px"


    const credits_div = document.getElementById('credits-section');
    credits_div.appendChild(Kien);
    credits_div.appendChild(Hanh);
    credits_div.appendChild(Kien_text);
    credits_div.appendChild(Hanh_text);
    credits_div.appendChild(des);
  }
}