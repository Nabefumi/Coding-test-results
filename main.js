//ポップアップ表示
// 画面を表示した時に、「test」という文字列をJSにてポップアップ表示してください。

var result = confirm('test');
 
if( result ) {
    window.location.href = 'https://www.perfectlens.ca/';
 
    // ポップアップのokを押したらperfectlensに遷移させてください。
    console.log('perfectlensに遷移');
    
}
else {
    // キャンセルの場合はこの画面を表示させてください。
    console.log('キャンセル');
}