// 简化getElementById
function getId(id){
    return document.getElementById(id)
}
var paybtn = getId('pay')
console.log(paybtn1)
var box = getId('box')
// box.innerHTML = '<h1>增加内容</h1>'
var goodslist = [
    {id:'gds1',name:'C#编程基础',price:88,num:1},
    {id:'gds1',name:'计算机基础',price:98,num:1},
    {id:'gds1',name:'photoshop',price:988,num:2},
    {id:'gds1',name:'web标准',price:888,num:3},
    {id:'gds1',name:'H%+C3',price:8,num:4},
    {id:'gds1',name:'Javascript',price:9,num:5},
]
var s = ''

for(let i = 0;i<6;i++){
s +=`   <div class="cardItem">
<!-- 标题 -->
<div class="cds-tit">
    <label for="gdsl">
        <input type="checkbox" id="gdsl">
        C#编程基础
    </label>
    <!-- 详情 -->
    <div class="cds-detail flx">
        <div class="cds-img"></div>
        <div class="cds-txt">
            <div class="txt-tit">名称 ： C#编程基础</div>
            <div class="txt-tit">编著 ： 某某某</div>
            <div class="txt-tit">出版社 ： 某某出版社</div>
            <div class="txt-tit">简介 ： 哔哩哔哩</div>
        </div>
    </div>
    <!-- 单价 -->
    <div class="cds-price flx">
        <div class="cds-pri">定价: ￥88</div>
        <i class="iconfont cds-del">&#xe616;</i>
    </div>
    <!-- 总价 -->
    <div class="cds-count flx">
        <div class="cds-cnt">总计：￥88</div>
        <div class="cds-btn flx">
            <span class="mdf">-</span>
            <span class="mdf">1</span>
            <span class="mdf">+</span>
        </div>
    </div>
</div>
</div>`
}
box.innerHTML = s
