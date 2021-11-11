import { Autocomplete as MUIAutocomplete } from '@mui/material';
import React from 'react';

export const Autocomplete = (
  props: React.ComponentProps<typeof MUIAutocomplete>,
) => {
  return (
    <MUIAutocomplete
      fullWidth
      openOnFocus
      autoHighlight
      freeSolo
      disablePortal
      {...props}
    />
  );
};
