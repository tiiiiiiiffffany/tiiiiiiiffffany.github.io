var rand = (start, end) => {
    // 決定範圍
    var n = Math.abs(end - start) + 1

    // 放大 n 倍
    var r = Math.random() * n

    // 去除小數點
    r = Math.floor(r)

    // 做位移
    r = r + ((start <= end) ? start : end)

    return r
}


var dealOne = () => {
    var r = rand(1, 22)
    var img0 = $('#data img').get(0)

    // 因為 img0 是 HTML Element 所以再用$()變成 jQuery 元件
    var $img0 = $(img0)
    $img0.attr('src', './tarots/tarot' + r + '.png')
}

// i 指的是第幾張牌
// v 指的是撲克牌的值
var changCard = (i, v) => {
    var img = $('#data img').get(i)
        // 因為 img 是 HTML Element 所以再用$()變成 jQuery 元件
    var $img = $(img)
    $img.attr('src', './tarots/tarot' + v + '.png')
}


var dealFive = () => {

    // 產成 52張新的撲克牌 ====================
    var allPoker = []
    for (var i = 1; i <= 22; i++) {
        allPoker.push(i)
    }
    //========================================

    // 洗牌 ==================================
    var n = rand(100, 500)
    for (var i = 0; i < n; i++) {
        var r = rand(0, 21)
        var temp = allPoker[r]
        allPoker[r] = allPoker[0]
        allPoker[0] = temp
    }

    //========================================

    // 將前五張牌顯示在畫面上
    for (var i = 0; i < 5; i++) {
        changCard(i, allPoker[i])
    }
}

var guessIt = () => {

    var usernumber = Number(inputnumber.value)
    usernumber = -1
    if (usernumber >= 0 && usernumber <= 21) {
        window.open('./explaintarots/' + (usernumber + 1) + '.html ', '牌意', config = 'height=500,width=1200');
    } else {
        alert('請填0~21的數字')
    }
}
