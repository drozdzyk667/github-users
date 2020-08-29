import React from 'react';
import Icon from 'Icons';
import { Icons } from 'Icons/Icon.constants';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import UserAmountPicker from 'components/userAmountPicker';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    margin: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  searchButtonContainer: {
    flex: 1,
    margin: '0.5em',
  },
  searchIcon: {
    cursor: 'pointer',
  },
  searchIconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchText: {
    margin: '0 5px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    minWidth: '200px',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '1em',
    flexWrap: 'wrap',
  },
});

interface Props {
  searchQuery: string;
  handleSubmitSearchQuery: () => void;
  handleOnClearQuery: () => void;
  handleSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAmountUsersToFetch: (value: number) => void;
  maxUserToFetch: number;
}

const SearchContainer: React.FC<Props> = ({
  searchQuery,
  maxUserToFetch,
  handleSearchQuery,
  handleOnClearQuery,
  handleSubmitSearchQuery,
  handleChangeAmountUsersToFetch,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <TextField
        value={searchQuery}
        onChange={handleSearchQuery}
        label={t('enterUsername')}
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              {searchQuery && (
                <Icon
                  name={Icons.clear}
                  className={classes.searchIcon}
                  onClick={handleOnClearQuery}
                />
              )}
            </InputAdornment>
          ),
        }}
      />

      <Box className={classes.actionContainer}>
        <UserAmountPicker
          maxUserToFetch={maxUserToFetch}
          handleChangeAmountUsersToFetch={handleChangeAmountUsersToFetch}
        />
        <Box className={classes.searchButtonContainer}>
          <Button
            className={classes.button}
            color='primary'
            data-testid='search-button'
            variant='contained'
            disabled={!searchQuery}
            onClick={handleSubmitSearchQuery}
          >
            <Box className={classes.searchIconContainer}>
              <span className={classes.searchText}>{t('search')}</span>
              <Icon fontSize={'small'} name={Icons.search} />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchContainer;
