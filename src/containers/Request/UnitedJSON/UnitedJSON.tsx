import { Autocomplete, Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const REQUEST_TYPES = [
    { label: 'ФНС - Субсидирование МСП', url: '11111' },
    { label: 'ФНС - Идентификатор клиента', url: '22222' },
    { label: 'ФНС - Проверка акцизов', url: '3333333' },
    { label: 'ФНС - Проверка приостановлений REST', url: '444444' },
    { label: '<Имя сервиса>', url: '5555555' },
]
const VERSION = [
    { label: 'v1', url: '11111' },
    { label: 'v2', url: '22222' },
    { label: 'v3', url: '3333333' },
    { label: 'v4', url: '444444' },
    { label: 'v5', url: '5555555' },
]


export const UnitedJSON = () => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [versionValue, setVersionValue] = useState(null);
    const [inputVersionValue, setInputVersionValue] = useState('');
    const [inputJSON, setInputJSON] = useState('');

    const FILTERED_REQUEST_TYPES = REQUEST_TYPES.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase()))

    return (
        <Box px={5}>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e)
            }
            }>
                <Box display='flex' gap={10} >
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
                        renderInput={(params) => <TextField  {...params} label="Сервис" />}
                        sx={{ mx: 3 }}
                    />

                    <Autocomplete
                        fullWidth
                        openOnFocus
                        autoHighlight
                        freeSolo
                        disablePortal
                        value={versionValue}
                        onChange={(event: any, newValue: any) => {
                            setVersionValue(newValue);
                        }}
                        inputValue={inputVersionValue}
                        onInputChange={(event, newInputValue) => {
                            setInputVersionValue(newInputValue);
                        }}
                        options={VERSION}
                        renderInput={(params) => <TextField  {...params} label="Версия" />}
                        sx={{ mx: 3 }}
                    />
                </Box>

                <Box display='flex' gap={10} mt={10} width='100%' alignItems='stretch'>
                    <Box width='100%' flex={1}  >
                        <Typography variant='h5' align='center'>Запрос</Typography>
                        <Paper sx={{ marginTop: '2rem', flexGrow: 1 }}>
                            <TextField
                                label="Введите json"
                                multiline
                                fullWidth
                                rows={20}
                                value={inputJSON}
                                onChange={(e) => setInputJSON(e.target.value)}
                            />
                        </Paper>
                    </Box>
                    <Box width='100%' display='flex' flexDirection='column' flex={1} >
                        <Typography variant='h5' align='center'>Ответ</Typography>
                        <Paper sx={{ marginTop: '2rem', flexGrow: 1, p: 2, border: '1px solid #26262640' }}>
                            <Typography variant='body1' color='#262626'>
                                Результат
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
                <Box display='flex' gap={10} mt={2} width='100%' alignItems='stretch' justifyContent='space-between'>
                    <Box width='50%' px={3}>
                        <Button
                            type='submit'
                            fullWidth
                            sx={{ boxShadow: '0px 4px 4px rgba(38, 38, 38, 0.25), inset 0px 4px 4px rgba(38, 38, 38, 0.05)' }}
                        >Отправить запрос</Button>
                    </Box>
                    <Box width='50%'></Box>
                </Box>
            </form>
        </Box >
    );
};

