window.addEventListener('wheel', (event) => {
    event.preventDefault(); // 기본 스크롤 동작 방지

    // 스크롤 방향에 따라 이동할 양을 설정
    const scrollAmount = event.deltaY > 0 ? 1200 : -1200; // 아래로 스크롤 시 1000px 이동

    // 현재 스크롤 위치를 가져옴
    const currentScroll = window.scrollY;

    // 새로운 스크롤 위치 계산
    const newScroll = currentScroll + scrollAmount;

    // 스크롤 위치를 부드럽게 이동
    window.scrollTo({
        top: newScroll,
        behavior: 'smooth'
    });
});
