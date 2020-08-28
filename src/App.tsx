import React from 'react';
import GithubViewer from './pages/githubViewer';
import translation from 'resource/translations';
import { I18nextProvider as TranslationProvider } from 'react-i18next';

const App = () => {
  return (
    <TranslationProvider i18n={translation}>
      <GithubViewer />
    </TranslationProvider>
  );
};

export default App;
