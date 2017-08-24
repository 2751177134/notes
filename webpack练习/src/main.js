var v1 =document.querySelector("#v1");
var v2 =document.querySelector("#v2");
var btn =document.querySelector("#btn");
var res =document.querySelector("#res");

require("../statics/index.css");
require("../statics/index.scss");
require("../statics/index.less");
require("../statics/mui3.4/css/icons-extra.css")
btn.onclick=function(){
var v1Value= parseFloat(v1.value);
var v2Value= parseFloat(v2.value);
var add=require("./scle.js");

    res.value=add(v1Value,v2Value)
}
