// --------------------   PERSONAL INFO TAB JS      -------------------------------

const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => { 
        tabContent.classList.remove('active');
      });
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
      target.classList.add('active');
    });
  });

// --------------------   PERSONAL INFO TAB JS    -------------------------------


// --------------------   hobby section ext back function  JS    ----------------------------


  const contents = document.querySelectorAll('.content');
  const nextButton = document.querySelector('.next');
  const backButton = document.querySelector('.back');
  let currentIndex = 0;

  nextButton.addEventListener('click', () => {
    contents[currentIndex].style.opacity = 0;
    setTimeout(() => {
      contents[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % contents.length;
      contents[currentIndex].classList.add('active');
      contents[currentIndex].style.opacity = 1;
    }, 500);
  });

  backButton.addEventListener('click', () => {
    contents[currentIndex].style.opacity = 0;
    setTimeout(() => {
      contents[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + contents.length) % contents.length;
      contents[currentIndex].classList.add('active');
      contents[currentIndex].style.opacity = 1;
    }, 500);
  });

// --------------------    TAB JS      -------------------------------
