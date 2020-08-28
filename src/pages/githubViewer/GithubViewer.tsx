import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useFetch from 'helpers/useFetch';
import UserList from 'components/userList';
import {
  GithubUsersUri,
  FetchedUserData,
  HUGE_LOADER_SIZE,
  ExtendedResponseUserItems,
  MAX_USERS_TO_FETCH,
} from './GithubViewer.constants';
import Header from 'components/header';
import SearchContainer from 'components/search';
import LoaderWithError from 'components/loader/LoaderWithError';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto auto',
    padding: '1em',
    maxWidth: '800px',
  },
});

interface IContextProps {
  handleExpandAccordion: (id: number) => void;
}

export const AccordionContext = React.createContext<IContextProps>({
  handleExpandAccordion: () => null,
});

const GithubViewer = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [maxUserToFetch, setMaxUsersToFetch] = React.useState<number>(
    MAX_USERS_TO_FETCH
  );
  const [isSend, setIsSend] = React.useState<boolean>(false);
  const { response, error, isLoading } = useFetch(
    isSend,
    GithubUsersUri(searchQuery, maxUserToFetch)
  );

  const handleChangeAmountUsersToFetch = (
    value: React.SetStateAction<number>
  ) => {
    setMaxUsersToFetch(value);
  };

  const determineIfResIsCorrect = (
    response: any
  ): response is FetchedUserData => !!(response as FetchedUserData)?.items;

  const [users, setUsers] = React.useState<ExtendedResponseUserItems[]>([]);

  React.useEffect(() => {
    setUsers(
      determineIfResIsCorrect(response)
        ? response?.items?.map((item) => ({ ...item, isExpanded: false }))
        : []
    );
  }, [response]);

  const handleExpandAccordion = React.useCallback(
    (id: number) =>
      setUsers(
        users.map((user) =>
          user.id === id
            ? { ...user, isExpanded: !user.isExpanded }
            : { ...user, isExpanded: false }
        )
      ),
    [users]
  );

  const handleSearchQuery = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setIsSend(false);
    setSearchQuery(event.target.value);
  };

  const handleSubmitSearchQuery = () => {
    setIsSend(true);
  };

  const handleOnClearQuery = () => {
    setIsSend(false);
    setSearchQuery('');
  };

  return (
    <Box className={classes.root}>
      <Header />
      <SearchContainer
        searchQuery={searchQuery}
        maxUserToFetch={maxUserToFetch}
        handleSearchQuery={handleSearchQuery}
        handleOnClearQuery={handleOnClearQuery}
        handleSubmitSearchQuery={handleSubmitSearchQuery}
        handleChangeAmountUsersToFetch={handleChangeAmountUsersToFetch}
      />
      {isSend && (
        <LoaderWithError
          error={error}
          isLoading={isLoading}
          loaderSize={HUGE_LOADER_SIZE}
        >
          <AccordionContext.Provider value={{ handleExpandAccordion }}>
            <UserList users={users} />
          </AccordionContext.Provider>
        </LoaderWithError>
      )}
    </Box>
  );
};

export default GithubViewer;
