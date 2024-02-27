const useForm = () => {
  const validateForm = () => {
    // Focus on first control with error using ng-invalid className
    const invalidElements: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'control-invalid'
    );
    const validElements = document.getElementsByClassName('control-valid');

    for (let i = 0; i < invalidElements.length; i++) {
      const invalidInputEl = invalidElements[i] as HTMLInputElement;
      invalidInputEl.focus({ preventScroll: false });
      invalidInputEl.blur();

      if (invalidElements[i].hasAttribute('id')) {
        invalidElements[i].removeAttribute('id');
      }
    }

    for (let i = 0; i < validElements.length; i++) {
      if (validElements[i].hasAttribute('id')) {
        validElements[i].removeAttribute('id');
      }
    }
  };

  // const resetForm = () => {
  //   // Focus on first control with error using ng-invalid className
  //   const invalidElements: HTMLCollectionOf<Element> = document.getElementsByClassName(
  //     'control-invalid'
  //   );
  //   const validElements: HTMLCollectionOf<Element> = document.getElementsByClassName(
  //     'control-valid'
  //   );

  //   for (let i = 0; i < invalidElements.length; i++) {
  //     const invalidInputEl = invalidElements[i] as HTMLInputElement;

  //     if (invalidInputEl) {
  //       invalidInputEl.value = '';
  //     }
  //   }

  //   for (let i = 0; i < validElements.length; i++) {
  //     const validInputEl = validElements[i] as HTMLInputElement;
  //     if (validInputEl) {
  //       validInputEl.value = '';
  //     }
  //   }
  // };

  return { validateForm };
};

export default useForm;
