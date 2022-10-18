var expression = "";

document.getElementById("1").onclick = function(){buttonClicked("1");};
document.getElementById("2").onclick = function(){buttonClicked("2");};
document.getElementById("3").onclick = function(){buttonClicked("3");};
document.getElementById("4").onclick = function(){buttonClicked("4");};
document.getElementById("5").onclick = function(){buttonClicked("5");};
document.getElementById("6").onclick = function(){buttonClicked("6");};
document.getElementById("7").onclick = function(){buttonClicked("7");};
document.getElementById("8").onclick = function(){buttonClicked("8");};
document.getElementById("9").onclick = function(){buttonClicked("9");};
document.getElementById("0").onclick = function(){buttonClicked("0");};
document.getElementById("+").onclick = function(){buttonClicked("+");};
document.getElementById("-").onclick = function(){buttonClicked("-");};
document.getElementById("x").onclick = function(){buttonClicked("x");};
document.getElementById("/").onclick = function(){buttonClicked("/");};
document.getElementById("^").onclick = function(){buttonClicked("^");};
document.getElementById("(").onclick = function(){buttonClicked("(");}; 
document.getElementById(")").onclick = function(){buttonClicked(")");};
document.getElementById("=").onclick = function(){buttonClicked("=");};
document.getElementById("CE").onclick = function(){buttonClicked("CE");};
document.getElementById("del").onclick = function(){buttonClicked("del");};
document.getElementById("input-expression").onkeydown = function(e){
    if (e.keyCode === 13) {
        textEntered(document.getElementById("input-expression").value);
    }
};

function buttonClicked(param)    {
    if (param == "CE") {
        expression = "";
    }else if (param == "del") {
        expression = expression.slice(0,-1);
    }else if (param == "="){
        expression = evaluate();
    }else{
        expression += param;
    }
    document.getElementById("input-expression").value = expression;
}

function textEntered(param) {
    if (param !== "undefined") {
        expression = param;
        expression = evaluate();
        document.getElementById("input-expression").value = expression;
    }
}

function postfix(expression) {
    var s = [];

    function isdigit(c) {
        return ((c >= '0') && (c <= '9'));
    }

    function push(elem) {
        s.push(elem);
    }

    function pop() {
        var elem = s[s.length-1];
        s = s.slice(0, -1);
        return elem;
    }

    function pr(elem) {
        switch (elem) {
            case '#':
                return 0;
            case '(':
                return 1;
            case '+':
            case '-':
                return 2;
            case 'x':
            case '/':
            case '%':
                return 3;
            case '^':
                return 4;
        }
    }

    var i = 0, ch, elem;
    var postfix_expression = [];

    push('#');

    while (i <= expression.length) {
        ch = expression.charAt(i);
        if (ch == '(') {
            push(ch);
        }else if (isdigit(ch))  {
            if (!isdigit(expression.charAt(i - 1)) && isdigit(expression.charAt(i))) {
                postfix_expression.push(Number(ch));
            } else {
                postfix_expression[postfix_expression.length - 1] = postfix_expression[postfix_expression.length - 1] * 10 + Number(ch);
            }
        }else if (ch == ')')    {
            while (s[s.length - 1] != '(') {
                postfix_expression.push(pop());
            }
            elem = pop();
        }else   {
            while (pr(s[s.length - 1]) >= pr(ch)) {
                postfix_expression.push(pop());
            }
            push(ch);
        }
        i++;
    }

    while (s[s.length - 1] != '#') {
        postfix_expression.push(pop());
    }

    return postfix_expression;
}
function evaluate() {
    debugger;
    var s = [];

    var postfix_expression = postfix(expression);

    function push(x) {
        s.push(x);
    }

    function pop() {
        var elem = s[s.length - 1];
        s = s.slice(0, -1);
        return elem;
    }

    function operate(op1, op2, a) {
        switch (a) {
            case '+':
                return op2 + op1;

            case '-':
                return op2 - op1;

            case 'x':
                return op2 * op1;

            case '/':
                return op2 / op1;

            case '^':
                return Math.pow(op2, op1);
        }
    }

    var i = 0, result, op1, op2;
    while (i < postfix_expression.length) {
        if (postfix_expression[i] != "") {
            if (typeof postfix_expression[i] == "number") {
            push(postfix_expression[i]);
            } else {
                op1 = pop();
                op2 = pop();
                ans = operate(op1, op2, postfix_expression[i]);
                push(ans);
            }
        }
        i++;
    }
    result = s[0];

    return result;
}