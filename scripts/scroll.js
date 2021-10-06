scrollBeyondHeader = false;
bottom = false;

onscroll =  function () {
  scrolled = window.pageYOffset;
  header = document.getElementsByTagName("header")[0];
  footer = document.getElementsByTagName("footer")[0];
  // console.log(scrolled);

  if (!scrollBeyondHeader && scrolled > header.offsetHeight) {
    header.classList.add("minimalHeader");
    scrollBeyondHeader = true;
  } else if (scrollBeyondHeader && scrolled < header.offsetHeight) {
    header.classList.remove("minimalHeader");
    scrollBeyondHeader = false;
  }

  if (!bottom && scrolled + window.innerHeight >= document.documentElement.scrollHeight) {
    footer.classList.add("bottom");
    bottom = true;
  } else if (bottom && scrolled + window.innerHeight < document.documentElement.scrollHeight) {
    footer.classList.remove("bottom");
    bottom = false;
  }
};
