// ボタンがクリックされたときの処理を追加
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
});
