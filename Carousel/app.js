const $carousel = document.querySelector('.carousel');

// 첫번째 아이템과 마지막 아이템을 각각 캐러셀 슬라이드 맨 뒤, 맨 앞에 복제하여 삽입
const $firstItem = $carousel.firstElementChild.cloneNode(true);
const $lastItem = $carousel.lastElementChild.cloneNode(true);
$carousel.appendChild($firstItem);
$carousel.insertAdjacentElement('afterbegin', $lastItem);

const $prevBtn = document.querySelector('.prev');
const $nextBtn = document.querySelector('.next');

const moveDistance = -720;
let currIndex = 1;

$prevBtn.onclick = _.throttle(() => {
  currIndex--;
  isMoving = true;

  if (currIndex === 0) {
    setTimeout(() => {
      $carousel.style.transition = 'none';
      $carousel.style.transform = 'translateX(-3600px)';
      currIndex = 5;
    }, 400);
  }

  $carousel.style.transition = '0.4s all';
  $carousel.style.transform = `translateX(${moveDistance * currIndex}px)`;
}, 500);

$nextBtn.onclick = _.throttle(() => {
  currIndex++;

  if (currIndex === 6) {
    setTimeout(() => {
      $carousel.style.transition = 'none';
      $carousel.style.transform = 'translateX(-720px)';
      currIndex = 1;
    }, 400);
  }

  $carousel.style.transition = '0.4s all';
  $carousel.style.transform = `translateX(${moveDistance * currIndex}px)`;
}, 500);
