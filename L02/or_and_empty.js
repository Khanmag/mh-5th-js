
// "", 0, false, null, undefined - Ложные значения
// && первое ложное, либо последнее
console.log( 4 && "qwerty" && true ); // true потому что все истинные - выводит последнее
console.log(4 && "qwerty" && null && true); // null - тк оно первое ложное

// || первое истинное, либо последнее
console.log( 4 || "qwerty" || true ); // 4
console.log(4 || "qwerty" || null || true); // 4
console.log(0 || "" || true || null); // true
console.log(0 || "" || false || null); // null

// ?? как и, но только null и undefined считаются ложными
console.log(0 ?? "" ?? null ?? false); // null


// console.log(userPass === "1234" && alert("Correct"));
