import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import UserRepoStats from './UserRepoStats';
import { Repo } from './UserRepoList';
import UserRepoInfo from './UserRepoInfo';

const useStyles = makeStyles({
  root: { display: 'flex', flexDirection: 'column' },
});

export interface RepoItemProps {
  repo: Repo;
  color: any;
}

const UserRepoItem: React.FC<RepoItemProps> = ({ color, repo }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <UserRepoInfo repo={repo} />
      <UserRepoStats color={color} repo={repo} />
    </Box>
  );
};

export default UserRepoItem;
