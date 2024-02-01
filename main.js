var large = document.getElementsByClassName("large");
var small = document.getElementsByClassName("small");
var windowWidth = window.innerWidth;

if (windowWidth <= 700) {
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

