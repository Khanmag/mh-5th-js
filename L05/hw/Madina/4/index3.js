function shortString(str) {
    if (str.length > 20) {
        return str.slice(0, 20) + '...';
    } else {
        return str;
    }
}

console.log(shortString('Это очень длинная строка, которую нужно укоротить.'));
console.log(shortString('Короткая строка')); 