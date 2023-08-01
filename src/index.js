module.exports = function toReadable (number) {
    let numbers = ["", "one","two","three","four", "five", "six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen", "eighteen","nineteen"];
    let dozens = ["","","twenty","thirty","forty","fifty", "sixty","seventy","eighty","ninety",]
    if(number == 0) {
        return "zero";
    } else if (0 < number && number<= 19) {
        return numbers[number];
    } else if (number >= 20 && number < 100) {
        let integer = Math.floor(number / 10);
        let remains = number % 10;
        return `${dozens[integer]} ${numbers[remains]}`.trim();
     } else if (number >=100) {
        let integerOfHundred = Math.floor(number / 100);
        let remainsOfHundred = number % 100;
        let hundredDoz = Math.floor(remainsOfHundred / 10);
        let hundredDozRemain =  remainsOfHundred % 10;
        if (numbers[remainsOfHundred]){
            return `${numbers[integerOfHundred]} hundred ${numbers[remainsOfHundred]}`;
        }
        return `${numbers[integerOfHundred]} hundred ${dozens[hundredDoz]} ${numbers[hundredDozRemain]}`.trim();
    }
}
