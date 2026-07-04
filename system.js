// 1. 로또 번호 생성 함수
function generateLottoNumbers() {
    const lottoSet = new Set();
    while (lottoSet.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoSet.add(randomNumber);
    }
    // 배열로 바꾼 뒤 정렬하고 쉼표(,)로 연결
    return Array.from(lottoSet).sort((a, b) => a - b).join(' ');
}

// 2. 화면 터치(클릭) 이벤트 설정
// 문서 전체(document)에 클릭/터치 이벤트가 발생했을 때 실행됩니다.
document.addEventListener('click', () => {
    const displayTag = document.querySelector('#text');
    
    // 1) 함수 실행값을 태그에 표시
    displayTag.textContent = generateLottoNumbers();
    
    // 2) 안 보이던 글씨를 보이게 설정 (opacity를 1로 변경)
    displayTag.style.opacity = '1';
});