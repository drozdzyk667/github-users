import React from 'react';
import {
  ExtendedResponseUserItems,
  SMALL_LOADER_SIZE,
  GithubReposUri,
} from 'pages/githubViewer/GithubViewer.constants';
import Icon from 'Icons';
import { Icons } from 'Icons/Icon.constants';
import { AccordionContext } from 'pages/githubViewer/GithubViewer';
import useFetch from 'helpers/useFetch';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
  Theme,
} from '@material-ui/core';
import UserRepoList from 'components/userRepo';
import UserProfile from './UserProfile';
import LoaderWithError from 'components/loader/LoaderWithError';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: theme.shadows[4],
    margin: '1em',
    flex: 1,
  },
  summary: {
    background: '#f7f7f7',
    boxShadow: theme.shadows[2],
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
  },
  textWrap: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
  },
}));

export interface UserProps {
  user: ExtendedResponseUserItems;
}

const FIRST_REPO_ITEM = 0;
const MAX_REPO_ITEMS = 3;

const UserItem: React.FC<UserProps> = ({ user }) => {
  const classes = useStyles();
  const { handleExpandAccordion } = React.useContext(AccordionContext);
  const { response, error, isLoading } = useFetch(
    user.isExpanded,
    GithubReposUri(user.repos_url)
  );

  const sortedReposByStars = response
    ?.sort(
      (a: { stargazers_count: number }, b: { stargazers_count: number }) =>
        b.stargazers_count - a.stargazers_count
    )
    .slice(FIRST_REPO_ITEM, MAX_REPO_ITEMS);

  return (
    <Accordion
      expanded={user.isExpanded}
      onChange={() => handleExpandAccordion(user.id)}
      className={classes.root}
    >
      <AccordionSummary
        className={classes.summary}
        expandIcon={<Icon name={Icons.expandMore} />}
      >
        <Typography className={classes.textWrap} variant='h4'>
          {user.login}
        </Typography>
      </AccordionSummary>
      <UserProfile user={user} />
      <AccordionDetails className={classes.details}>
        {user.isExpanded && (
          <LoaderWithError
            error={error}
            isLoading={isLoading}
            loaderSize={SMALL_LOADER_SIZE}
          >
            <UserRepoList repos={sortedReposByStars} />
          </LoaderWithError>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default UserItem;
