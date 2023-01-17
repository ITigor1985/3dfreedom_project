(() => {
  const chapters = document.querySelectorAll('.chapter');
  chapters.forEach(chapter => {
    chapter.addEventListener('click', chapterActive);
    function chapterActive() {
      chapter.classList.toggle('active');
    }
  });
})();
