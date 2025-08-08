// dateクラスを利用して本日の日付を出力するコードを記載する
const date = new Date();
console.log(date.toLocaleDateString("ja-JP", { year: 'numeric', month: 'long', day: 'numeric' }));