import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';

const ImagePreview = ({ image, closeImagePreview }) => {
  const [open, setOpen] = useState(image.src.length > 0);

  useEffect(() => {
    if (image.src.length > 0) setOpen(true);
  });

  return (
    <Dialog
      open={open}
      onClose={() => {
        closeImagePreview();
      }}
      onBackdropClick={() => setOpen(false)}
      onEscapeKeyDown={() => setOpen(false)}
      aria-labelledby="image-preview"
    >
      <img src={image.src} alt={image.src} />
    </Dialog>
  );
};

export default ImagePreview;
