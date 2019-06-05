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


var answerIt = () => {
    var r = rand(1, 2)
    var u = document.getElementById("inputquestion").value;
    if (r == 1) {
        document.getElementById("answerquestion").innerHTML = "不應該" + u + "!";
    } else if (r == 2) {
        document.getElementById("answerquestion").innerHTML = "應該" + u + "!";
    }
}

var reload = () => {
    window.location.reload();
}