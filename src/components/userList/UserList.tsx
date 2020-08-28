import React from 'react';
import { Box } from '@material-ui/core';
import UserItem from './UserItem';
import InfoDialog from 'components/infoDialog';
import {
  ExtendedResponseUserItems,
  ERROR_MESSAGE,
  NO_SEARCH_RESULTS,
} from 'pages/githubViewer/GithubViewer.constants';

interface UserProps {
  users: ExtendedResponseUserItems[];
}

const UserList: React.FC<UserProps> = ({ users }) => {
  if (!users?.length)
    return <InfoDialog message={`${ERROR_MESSAGE} ${NO_SEARCH_RESULTS}`} />;

  return (
    <Box>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Box>
  );
};

export default UserList;
