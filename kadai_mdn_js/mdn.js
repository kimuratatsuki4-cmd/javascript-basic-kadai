// dateクラスを利用して「2024年10月12日」と出力するコードを記載する
const date = new Date(2024, 9, 12);
console.log(date.toLocaleDateString("ja-JP", { year: 'numeric', month: 'long', day: 'numeric' }));