import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import StackedColumn from '../../UI/StackedColumn';

import { formatFileSize } from '../../../utils/utils';

type UploadProps = {
  element: React.ReactElement;
  htmlFor?: string;
  file: File | null;
  accept: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  containerSx?: object;
  fileThumb?: React.ReactElement;
  multiple?: boolean;
  isDragActive: boolean;
  onDragEnter?: (event: React.DragEvent<HTMLLabelElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLLabelElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLLabelElement>) => void;
};

// type UploadRef = {
//   uploadEl: React.RefObject<HTMLInputElement>;
// };

const UploadWrapper = styled('div')<{ isdragactive: number }>(
  ({ theme, isdragactive }) => ({
    border: 2,
    borderColor: '#ADADAD',
    padding: theme.spacing(2),
    textAlign: 'center',
    borderStyle: 'dashed',
    borderRadius: theme.shape.borderRadius,
    overflowX: 'hidden',
    position: 'relative',
    '& > svg': {
      textAlign: 'center',
      display: 'inline-block',
      marginBottom: theme.spacing(1)
    },
    ...(isdragactive && {
      '&::after': {
        width: '100%',
        height: '100%',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#b4ebe9',
        opacity: 0.5,
        transition: 'opacity 0.2s ease-in-out'
      }
    })
  })
);

const UploadThumb = ({ file }: { file: File | null }) =>
  file ? (
    <StackedColumn
      alignItems="center"
      flexGrow={1}
      spacing={1}
      p={1}
      mt={1}
      bgcolor={'grey[500]'}>
      <Box>
        <Typography
          variant="body1"
          color="#194049"
          fontSize=".7rem"
          gutterBottom>
          {file!.name}
        </Typography>
        <Typography variant="body1" color="#A6A6A6" fontSize="10px">
          {formatFileSize(file.size)}
        </Typography>
      </Box>
    </StackedColumn>
  ) : null;

const UploadInput = styled('input')(
  ({}) => `
    visibility: hidden;
  `
);

 const UploadButton = React.forwardRef(
  (
    {
      element,
      htmlFor,
      file,
      accept,
      fileThumb: _fileThumb,
      onChange,
      containerSx,
      onDragEnter,
      onDragLeave,
      onDrop,
      isDragActive
    }: UploadProps,
    ref: React.ForwardedRef<{
      uploadEl: HTMLInputElement | null;
    }>
  ) => {
    const uploadInputRef = React.useRef<HTMLInputElement>(null);

    const preventDefault = (e: React.SyntheticEvent<HTMLLabelElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDragEnter = function (e: React.DragEvent<HTMLLabelElement>) {
      preventDefault(e);
      if (e.type === 'dragenter' || e.type === 'dragover') {
        onDragEnter && onDragEnter(e);
      }
    };

    const handleDragLeave = function (e: React.DragEvent<HTMLLabelElement>) {
      preventDefault(e);
      if (e.type === 'dragleave') {
        onDragLeave && onDragLeave(e);
      }
    };

    const handleDrop = function (e: React.DragEvent<HTMLLabelElement>) {
      preventDefault(e);
      onDrop && onDrop(e);
    };

    React.useImperativeHandle(ref, () => ({
      uploadEl: uploadInputRef.current
    }));

    return (
      <Box sx={{ ...containerSx }}>
        <Box
          component="label"
          htmlFor={htmlFor || 'file-upload'}
          sx={{
            cursor: 'pointer'
          }}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
          <UploadWrapper isdragactive={isDragActive ? 1 : 0}>
            {element}
          </UploadWrapper>
          <UploadInput
            hidden
            type="file"
            id={htmlFor || 'file-upload'}
            accept={accept}
            onChange={onChange}
            ref={uploadInputRef}
          />
        </Box>

        {file && <UploadThumb file={file} />}
      </Box>
    );
  }
);

UploadButton.displayName = 'UploadButton';

export default UploadButton;