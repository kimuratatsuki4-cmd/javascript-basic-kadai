// ボタンがクリックされたときの処理を追加
const btn = document.getElementById('btn');
const text = document.getElementById('text');
// イベント処理
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});
