const $wrapper = document.querySelector('.wrapper');
const $target = document.querySelector('.items');
const $loaderWrapper = document.querySelector('.loader-wrapper');
const $notice = document.querySelector('.notice');
const $movingBtn = document.querySelector('.moving-btn');

let options = {
  root: null,
  threshold: 1.0,
};
let target = $target.lastElementChild;

let count = document.querySelectorAll('.items > li').length;

const callback = (entries, observer) => {
  if (!entries[0].isIntersecting) return;

  if (count === 20) {
    $loaderWrapper.style.display = 'none';
    $notice.style.display = 'flex';
    return;
  }

  $loaderWrapper.style.display = 'flex';
  setTimeout(() => {
    const $fragment = document.createDocumentFragment();

    for (let i = 0; i < 5; i++) {
      const $li = document.createElement('li');
      $li.classList.add('item');
      $fragment.appendChild($li);
    }
    $target.appendChild($fragment);

    count = document.querySelectorAll('.items > li').length;
    target = $target.lastElementChild;
    observer.disconnect();
    observer.observe(target);
    $loaderWrapper.style.display = 'none';
  }, 1000);
};

let observer = new IntersectionObserver(callback, options);

observer.observe(target);

$movingBtn.onclick = () => {
  $wrapper.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
