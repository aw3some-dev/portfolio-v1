const useAutoScroll = () => {
  const handleAutoScrollTop = (scrollTop: number) => {
    window.scroll({
      top: scrollTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  return {
    handleAutoScrollTop
  };
};

export default useAutoScroll;
