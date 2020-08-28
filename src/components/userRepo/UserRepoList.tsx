import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import UserRepoItem from './UserRepoItem';
import { ERROR_MESSAGE } from 'pages/githubViewer/GithubViewer.constants';
import { LangColors } from 'theme/Colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '800px',
    flexWrap: 'wrap',
  },
  error: { margin: 'auto auto', padding: '2em 0' },
  singleContainer: {
    minWidth: '280px',
    width: '320px',
    height: '240px',
    margin: '0.5em',
    borderRadius: '6px',
    border: '1px solid lightgray',
  },
});

interface RepoListProps {
  repos: any[];
}

export interface Repo {
  id: number;
  name: string;
  svn_url: string;
  description: string;
  language: keyof typeof LangColors;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  owner: {
    login: string;
  };
}

const UserRepoList: React.FC<RepoListProps> = ({ repos }) => {
  const classes = useStyles();
  const DEFAULT = LangColors.default;
  const getRepoColor = (language: keyof typeof LangColors) =>
    language ? LangColors[language] || DEFAULT : DEFAULT;

  return (
    <Box className={classes.root}>
      {!repos?.length ? (
        <Typography className={classes.error}>{ERROR_MESSAGE}</Typography>
      ) : (
        repos.map((repo: Repo) => (
          <Box
            key={repo.id}
            className={classes.singleContainer}
            style={{
              borderTop: `6px solid ${getRepoColor(repo.language)}`,
            }}
          >
            <UserRepoItem
              key={repo.id}
              color={getRepoColor(repo.language)}
              repo={repo}
            />
          </Box>
        ))
      )}
    </Box>
  );
};

export default UserRepoList;
