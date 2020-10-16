// 简化getElementById
function getId(id){
    return document.getElementById(id)
}
// 获取支付按钮
var payBtn = getId('pay')
// var payBtn = document.getElementById('pay')

// 获取总价
var totalPrice = getId('totalPrice')
// var totalPrice = document.getElementById('totalPrice')

// 获取全选按钮
var cka = getId('ckAll')
// var cka = document.getElementById('ckAll')

// 获取box元素
var box = getId('box')
// var box = document.getElementById('box')

// 购物车中商品数据
var goodsList = [
    // 每个对象都是一条商品数据
    {id:'gds1',name:'C#编程基础',price:88,num:1},
    {id:'gds2',name:'计算机基础',price:98,num:1},
    {id:'gds3',name:'photoshop',price:888,num:3},
    {id:'gds4',name:'web标准',price:988,num:2},
    {id:'gds5',name:'H%+C3',price:8,num:4},
    {id:'gds6',name:'Javascript',price:9,num:5},
]

// 生成html结构的函数
function createCards (goodsList){
    // 定义一个字符串用于拼接
    var s = ''
    // 使用for循环动态生成页面结构 
    // 第一种字符串拼接方法
    // for(let i = 0;i<goodsList.length;i++){
        // s += '  <div class="cardsItem"> '+
        //            ' <div class="cds-tit">'+
        //                ' <label for="gds1">' +
        //                    ' <input type="checkbox" id="gds1"> '+
        //                     goodsList[i].name +
        //                 '</label>'+
        //             '</div>'+
        //             '<div class="cds-detail flx">' +
        //                 '<div class="cds-img"></div>'+
        //                 '<div class="cds-txt">'+
        //                     '<div class="txt-ctt">'+ goodsList[i].name +'</div>' +
        //                     '<div class="txt-ctt">编著: 爱谁谁</div>' +
        //                     '<div class="txt-ctt">出版: 某某出版社</div>' +
        //                     '<div class="txt-ctt">简介: 哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔</div>' +
        //                 '</div>' +
        //             '</div>' +
        //             '<div class="cds-price flx">' +
        //                 '<div class="cds-pri">定价: ￥' + goodsList[i].price + '  </div>' +
        //                 '<i class="iconfont cds-del">&#xe61a;</i>' +
        //             '</div>'+
        //            ' <div class="cds-count flx">'+
        //                 '<div class="cds-cnt">总计: ￥'+ (goodsList[i].price*goodsList[i].num) +'</div>'+
        //                 '<div class="cds-btn flx">'+
        //                     '<span class="mdf">-</span>'+
        //                    ' <span class="mdf">'+ goodsList[i].num +'</span>'+
        //                     '<span class="mdf">+</span> '      +             
        //                 '</div>'+
        //             '</div>'+
        //         '</div>'
    // }


    // 第二种字符串拼接方法
    for(let i = 0;i<goodsList.length;i++){
        s += `<div class="cardsItem">
            <!-- 标题 -->
            <div class="cds-tit">
                <label for="gds1">
                    <input type="checkbox" id="gds1">
                ${goodsList[i].name}
                </label>
            </div>
            <!-- 详情 -->
            <div class="cds-detail flx">
                <div class="cds-img"></div>
                <div class="cds-txt">
                    <div class="txt-ctt">名称:${goodsList[i].name}</div>
                    <div class="txt-ctt">编著: 爱谁谁</div>
                    <div class="txt-ctt">出版: 某某出版社</div>
                    <div class="txt-ctt">简介: 哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔</div>
                </div>
            </div>
            <!-- 单价 -->
            <div class="cds-price flx">
                <div class="cds-pri">定价: ￥${goodsList[i].price}</div>
                <i class="iconfont cds-del">&#xe61a;</i>
            </div>
            <!-- 总价 -->
            <div class="cds-count flx">
                <div class="cds-cnt">总计: ￥${goodsList[i].price*goodsList[i].num}</div>
                <div class="cds-btn flx">
                    <span class="mdf">-</span>
                    <span class="mdf">${goodsList[i].num}</span>
                    <span class="mdf">+</span>                    
                </div>
            </div>
        </div> `
    }

    box.innerHTML = s
}

createCards(goodsList)


