import React, { ReactNode } from 'react';
import { ERROR_MESSAGE } from 'pages/githubViewer/GithubViewer.constants';
import Loader from 'components/loader';
import InfoDialog from 'components/infoDialog';

interface LoaderProps {
  error: string;
  isLoading: boolean;
  children: ReactNode;
  loaderSize: number;
}

const LoaderWithError: React.FC<LoaderProps> = ({
  children,
  error,
  isLoading,
  loaderSize,
}) => {
  return error ? (
    <InfoDialog message={ERROR_MESSAGE} />
  ) : (
    <Loader isLoading={isLoading} size={loaderSize}>
      {children}
    </Loader>
  );
};

export default LoaderWithError;
