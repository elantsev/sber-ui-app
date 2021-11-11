import { FormControlLabel, Switch, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Autocomplete, StickyHeadTable } from 'components';
import React, { useState } from 'react';

const REQUEST_TYPES = [
  { label: 'Единый запрос json', url: 'united_json' },
  { label: '<Имя ГО>', url: 'name_go' },
];

export const Messages = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const [checked, setChecked] = useState(true);

  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem 4rem',
        }}
      >
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: any) => setValue(newValue)}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          options={REQUEST_TYPES}
          renderInput={(params) => <TextField {...params} label="Сервис" />}
        />

        <FormControlLabel
          sx={{
            m: 0,
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '0.25rem',
            '&:hover': {
              borderColor: 'rgba(0, 0, 0, 0.87)',
            },
            '&:active': {
              border: ({ palette }) => `2px solid ${palette.primary.main}`,
            },
            '&:focus-within': {
              border: ({ palette }) => `2px solid ${palette.primary.main}`,
            },
          }}
          value="start"
          color="primary"
          checked={checked}
          onChange={() => setChecked((checked) => !checked)}
          control={
            <Switch
              color="primary"
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Отображать сообщения периодической задачи опроса очереди"
          labelPlacement="start"
        />

        <Autocomplete
          value={value}
          onChange={(event: any, newValue: any) => setValue(newValue)}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          options={REQUEST_TYPES}
          renderInput={(params) => (
            <TextField {...params} label="id операции" />
          )}
        />

        <Autocomplete
          value={value}
          onChange={(event: any, newValue: any) => setValue(newValue)}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          options={REQUEST_TYPES}
          renderInput={(params) => (
            <TextField {...params} label="Введите текст" />
          )}
        />
      </Box>

      <Box mt={5}>
        <StickyHeadTable />
      </Box>
    </Box>
  );
};
