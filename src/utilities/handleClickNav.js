export const handleClickNav = (scrollToId) => {
    const element = document.getElementById(scrollToId);
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const elementHeight = element.clientHeight;
    const offsetTop = elementTop - window.innerHeight * 0.4 + elementHeight * 0.4;
    return window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }