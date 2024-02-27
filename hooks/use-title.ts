import React from 'react';

function useTitle(title: string) {
  const DOCUMENT_TITLE = 'Michael Sofayo';

  React.useEffect(() => {
    document.title = DOCUMENT_TITLE.concat(title ? ` - ${title}` : '');

    return () => {
      document.title = DOCUMENT_TITLE;
    };
  }, [title]);
}

export default useTitle;