var bodyNode = document.getElementById("body");
var formulaNode = document.getElementById("formula");
var resultsNode = document.getElementById("results");
var formula = "";
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
var flag = false; //是否点击运算符
var addend = "";//加数或者减数
var augend = "";//被加数或者被减数
var middleResults = ""; //连加或者连减运算的中间计算结果
var results = "";//计算结果
var currentSymbol = "";//当前运算符

//计算区域绑定点击事件
bodyNode.onclick = function (e) {
    if (numbers.includes(e.target.innerText)) {
        if (flag) {
            augend = augend + e.target.innerText;
        }
        formula = formula + e.target.innerText;
    } else if (e.target.innerText === "+") {
        if (!flag) {
            addend = formula;
        } else {
            middleResults = currentSymbol === "+" ? Number(addend) + Number(augend) : Number(addend) - Number(augend);
            addend = middleResults;
            augend = "";
        }
        flag = true;
        currentSymbol = e.target.innerText;
        formula = formula + e.target.innerText;
        resultsNode.innerHTML = middleResults;
    } else if (e.target.innerText === "-") {
        if (!flag) {
            addend = formula;
        } else {
            middleResults = currentSymbol === "+" ? Number(addend) + Number(augend) : Number(addend) - Number(augend);
            addend = middleResults;
            augend = "";
        }
        flag = true;
        currentSymbol = e.target.innerText;
        formula = formula + e.target.innerText;
        resultsNode.innerHTML = middleResults;

    } else if (e.target.innerText === "=") {
        if (currentSymbol === "+") {
            results = Number(addend) + Number(augend);
        } else if (currentSymbol === "-") {
            results = Number(addend) - Number(augend);
        }
        currentSymbol = "";
        formula = results;
        resultsNode.innerText = "";

    } else if (e.target.innerText === "C") {
        formula = "";
        flag = false;
        addend = "";
        augend = "";
        middleResults = "";
        results = "";
        currentSymbol = "";
    }

    formulaNode.innerText = formula;
}



$(function(){
    $("#operation").click(function(){
        $("#formula").text("我是计算表达式");
    })
})