const curValue = document.querySelector(".display #cur");
const preValue = document.querySelector(".display #pre");
const operators = document.querySelectorAll(".operator");
const errPara = document.querySelector(".error-msg span");
curValue.innerHTML = 0;
preValue.innerHTML = 0;
disp = (value, e) => {
  if (curValue.innerHTML == 0) {
    curValue.innerHTML = value;
  } else {
    curValue.innerHTML = curValue.innerHTML + value;
  }
};
clr = (e) => {
  curValue.innerHTML = 0;
  preValue.innerHTML = 0;
};
operators.forEach((item) => {
  item.addEventListener("mouseup", function () {
    try {
      preValue.innerHTML = eval(curValue.innerHTML);
    } catch (err) {
      errPara.innerHTML = "Operand Error";
      errPara.style.visibility = "visible";
      curValue.innerHTML = curValue.innerHTML.slice(0, -1);
      setTimeout(function () {
        errPara.style.visibility = "hidden";
      }, 3000);
    }
  });
});
evalExp = () => {
  try {
    curValue.innerHTML = eval(curValue.innerHTML);
    preValue.innerHTML = eval(curValue.innerHTML);
  } catch (err) {
    errPara.innerHTML = "Enter correct expression";
    errPara.style.visibility = "visible";
    curValue.innerHTML = 0;
    preValue.innerHTML = 0;
    setTimeout(function () {
      errPara.style.visibility = "hidden";
    }, 3000);
  }
};
dellast = () => {
  if (curValue.innerHTML.length == 1) {
    curValue.innerHTML = 0;
  } else {
    curValue.innerHTML = curValue.innerHTML.slice(0, -1);
  }
};
percent = () => {
  if (curValue.innerHTML === "%") {
    curValue.innerHTML = 0;
  } else {
    // console.log(curValue.innerHTML)
    curValue.innerHTML = eval(curValue.innerHTML.slice(0, -1)) / 100;
    preValue.innerHTML = eval(curValue.innerHTML);
  }
};
