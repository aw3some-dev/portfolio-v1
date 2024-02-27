export const convertFileSizeFromBytes = (size: number) => (
  unit: 'kb' | 'mb'
) => {
  if (unit === 'kb') {
    return (size / 1024).toFixed(2) + ' Kb';
  }

  return (size / 1024 / 1024).toFixed(2) + ' Mb';
};

export function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size >= 1024 && size < 1048576) {
    return `${(size / 1024).toFixed(2)} KB`;
  } else if (size >= 1048576) {
    return `${(size / 1048576).toFixed(2)} MB`;
  }
}

export const isValidFileType = (file: File, allowedTypes: string) => {
  if (!file) return false;
  const fileType = file.type;
  const allowed = allowedTypes
    .split(',')
    .map((fileType) => fileType.trim())
    .find((type) => fileType.includes(type));
  return allowed !== undefined;
};

export const isValidFileSize = (file: File, maxSize: number) => {
  if (!file) return false;
  return file.size! / 1024 / 1024 <= maxSize;
};

export const resolveErrorMessage = (error: boolean) => (message: string) => {
  if (error) {
    return message;
  }

  return undefined;
};

export function getBrowserVisibilityProp() {
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    return 'visibilitychange';
  } else if (typeof (document as any).msHidden !== 'undefined') {
    return 'msvisibilitychange';
  } else if (typeof (document as any).webkitHidden !== 'undefined') {
    return 'webkitvisibilitychange';
  }
}

export function getBrowserDocumentHiddenProp() {
  if (typeof document.hidden !== 'undefined') {
    return 'hidden';
  } else if (typeof (document as any).msHidden !== 'undefined') {
    return 'msHidden';
  } else if (typeof (document as any).webkitHidden !== 'undefined') {
    return 'webkitHidden';
  } else {
    return 'hidden';
  }
}

export function getIsDocumentHidden() {
  return !(document as any)[getBrowserDocumentHiddenProp()];
}

export const parseNumber = (amount: string) => {
  amount = amount.replace(/,/g, '').trim();
  return amount;
};

export const formatNumber = (figure: number, precision?: number) => {
  if (typeof figure === 'string') {
    figure = parseFloat(figure);
  }

  if (isNaN(figure)) {
    return '0.00';
  }

  return new Intl.NumberFormat(
    'en-US',
    precision ? { minimumFractionDigits: precision } : {}
  ).format(figure);
};