import React, { useState, useEffect } from 'react';
import SCOrganizationListPage from './OrganizationListPage.styled';
import RepoCard from '../../components/RepoCard/RepoCard';
import SearchForm from '../../components/SearchForm/SearchForm';
import githubService from '../../services/github.service';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function OrganizationListPage() {
  const [orgInfo, setOrgInfo] = useState();
  const [reposList, setReposList] = useState([]);
  const { org } = useParams();

  const handleOrgInfo = (newValue) => {
    setOrgInfo(newValue);
  };

  useEffect(() => {
    if (org) {
      githubService
        .getOrgInfo(org)
        .then((res) => {
          res.message === 'Not Found'
            ? toast.error('Organization not found')
            : (setOrgInfo(res),
            githubService
              .getOrgRepos(org)
              .then((res) => {
                res.message === 'Not Found'
                  ? toast.error('Repositories not found')
                  : setReposList(res);
              })
              .catch((err) => console.error(err)));
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <SCOrganizationListPage>
      <SearchForm handleOrgInfo={handleOrgInfo} setReposList={setReposList} />
      <section>
        {typeof orgInfo === 'undefined' ? (
          <h1>Search for an organization repositories</h1>
        ) : reposList.length > 0 ? (
          <>
            <h1>{orgInfo.name} Repo's</h1>
            <div className='list-container'>
              {reposList.map((repo) => {
                return <RepoCard key={repo.id} repo={repo} />;
              })}
            </div>
          </>
        ) : (
          <h1>Organization repos not found</h1>
        )}
      </section>
    </SCOrganizationListPage>
  );
}

export default OrganizationListPage;
