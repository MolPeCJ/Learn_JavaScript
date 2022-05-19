let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");
map.set(NaN, "hehe");

console.log( map.get(NaN) );

let receipeMap = new Map([
    ["apple", 2],
    ["potatoe", 5],
    ["cocumber", 10]
]);

for (let value of receipeMap.keys()) {
    console.log( value );
}

receipeMap.forEach((value, key) => {
    console.log( `${key}: ${value}`);
});