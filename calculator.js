window.onload = function () {
  screen = document.getElementById("textScreen");

}

x = "0";
xi = 1;
coma = 0;
ni = 0;
op = "no";

function number(xx) {


  if (x == "0" || xi == 1) {
    screen.innerHTML = xx;
    x = xx;
    if (xx == ".") {
      screen.innerHTML = "0.";
      x = xx;
      coma = 1;
    }
  } else {
    if (xx == "." && coma == 0) {
      screen.innerHTML += xx;
      x += xx;
      coma = 1;
    } else if (xx == "." && coma == 1) {} else {
      screen.innerHTML += xx;
      x += xx;
    }
  }
  xi = 0
}

function operation(s) {
  equal();
  ni = x;
  op = s;
  xi = 1;
}

function equal() {
  if (op == "no") {
    screen.innerHTML = x;
  } else {
    sl = ni + op + x;
    sol = eval(sl)
    screen.innerHTML = sol;
    x = sol;
    op = "no";
    xi = 1;
  }
}
function root (){
  x=Math.sqrt(x)
  screen.innerHTML=x;
  op="no";
  xi=1;
}

function perCent(){
  x=x/100
  screen.innerHTML=x;
  equal()
  xi=1
}

function oppo(){
  nx=Number(x);
  nx=-nx;
  x=String(nx);
  screen.innerHTML=x;
}
function inverse(){
    nx=Number(x);
nx=(1/nx);
  x=String(nx);
  screen.innerHTML=x;
  xi=1;
}
function retr(){
  numbers=x.length;
  br=x.substr(numbers-1,numbers)
  x=x.substr(0,numbers-1)
  if(x==""){x="0";}
  if(br=="."){coma=0;}
  screen.innerHTML=x;
}

function partialDel(){
  screen.innerHTML=0;
  x=0;
  coma=0;
}

function totalDel(){
  screen.innerHTML=0;
  x=0;
  coma=0;
  ni=0
  op="no"
}