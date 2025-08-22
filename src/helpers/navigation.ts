const handleNavigation = (id: string) => {
  const elem = document.querySelector(`#${id}`) as HTMLElement;

  if (elem) {
    elem.offsetTop - 80 === window.innerHeight;
    window.scrollTo({
      top: elem.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

export default handleNavigation;
