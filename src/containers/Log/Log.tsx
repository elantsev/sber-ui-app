import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Autocomplete, StickyHeadTable } from 'components';
import React, { useState } from 'react';

const REQUEST_TYPES = [
  { label: 'Единый запрос json', url: 'united_json' },
  { label: '<Имя ГО>', url: 'name_go' },
];

export const Log = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const [date, setDate] = useState<DateRange<Date>>([null, null]);

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

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Дата начала"
            endText="Дата окончания"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> по </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>

        <Autocomplete
          value={value}
          onChange={(event: any, newValue: any) => setValue(newValue)}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          options={REQUEST_TYPES}
          renderInput={(params) => (
            <TextField {...params} label="Категория статуса" />
          )}
        />

        <Autocomplete
          value={value}
          onChange={(event: any, newValue: any) => setValue(newValue)}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          options={REQUEST_TYPES}
          renderInput={(params) => (
            <TextField {...params} label="Тип события" />
          )}
        />
      </Box>

      <Box mt={5}>
        <StickyHeadTable />
      </Box>
    </Box>
  );
};
