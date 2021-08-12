window.onload = async () => {
  const res = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
  const items = await res.json();
};
