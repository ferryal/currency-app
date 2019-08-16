export default function formatValue(value){
    value = value.toFixed(4);

    value = value.split(".");

    value[0] = value[0]
        .split("")
        .reverse()
        .map((digit, i) => {
            if ((i + 1) % 3 === 0 && i !== value[0].length - 1) {
                return "," + digit;
            } else {
                return digit;
            }
        });
    // console.log(value[0]);
    value[0] = value[0].reverse().join("");
    value = value.join(".");

    return value;
};