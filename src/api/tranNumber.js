//10000转换为1万

export function myTranNumber(num) {
    let numStr = num.toString();
    if (numStr.length < 5) {
        console.log(num);
        return num;
    } else {
        let target = parseInt(num / 10000) + '万'
        console.log(target);
        return target;
    }
}