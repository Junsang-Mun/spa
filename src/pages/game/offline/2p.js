import imgUrl from '/assets/meme.jpg';

export function render(app, navigate) {
  app.innerHTML = `
      <h1>오프라인두명이서</h1>
      <img src=${imgUrl} />
  `;
}
