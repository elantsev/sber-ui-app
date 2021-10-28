import { Autocomplete, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { StyledLink, StyledPaper } from './style';

const REQUEST_TYPES = [
    { label: 'Единый запрос json', url: 'united_json' },
    { label: '<Имя ГО>', url: 'name_go' },
]


export const Request = () => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const FILTERED_REQUEST_TYPES = REQUEST_TYPES.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase()))

    return (
        <Box>
            <Autocomplete
                fullWidth
                openOnFocus
                autoHighlight
                freeSolo
                disablePortal
                value={value}
                onChange={(event: any, newValue: any) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                options={REQUEST_TYPES}
                renderInput={(params) => <TextField  {...params} label="Введите тип запроса" />}
            />

            <Box mt='5rem' display='flex' flexWrap='wrap' justifyContent='space-evenly' justifyItems='start' alignContent='stretch' gap={5}>
                {FILTERED_REQUEST_TYPES.map((item, i) => (
                    <StyledLink to={`/request/${item.url}`} key={i} >
                        <StyledPaper elevation={3} sx={{ margin: 'auto', height: '100%' }}>
                            <Box display='flex' width='15.625rem' height='100%' minHeight='9.375rem' p={2} >
                                <Typography margin='auto' variant='h5' >
                                    {item.label}
                                </Typography>
                            </Box>
                        </StyledPaper>
                    </StyledLink>
                ))}
            </Box>

        </Box >
    );
};

