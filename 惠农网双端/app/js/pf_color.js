function randomColor(num) {
    // 1 代表获取 浅色的随机色    2代表获取深色的随机色   不传参数num代表获取随机色
    if(!num){
        var color = "";
        for (var i = 0; i < 6; i++) {
            color += (Math.random() * 16 | 0).toString(16);
        }
        return "#" + color;
    }
    if (num == 1) {
        return '#' +
            (function(color) {
                return (color += '5678956789defdef' [Math.floor(Math.random() * 16)]) &&
                    (color.length == 6) ? color : arguments.callee(color);
            })('');
    } else if (num == 2) {
        return '#' +
            (function(color) {
                return (color += '0123401234abcabc' [Math.floor(Math.random() * 16)]) &&
                    (color.length == 6) ? color : arguments.callee(color);
            })('');
    }
}
