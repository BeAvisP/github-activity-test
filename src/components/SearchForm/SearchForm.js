import React, { useState } from 'react';
import SCSearchForm from './SearchForm.styled';
import toast from 'react-hot-toast';
import githubService from '../../services/github.service';
import { useHistory } from 'react-router-dom';

const SearchForm = ({ handleOrgInfo, setReposList }) => {
  const [orgName, setOrgName] = useState('');
  const history = useHistory();

  const searchOrg = (e) => {
    e.preventDefault();
    if (orgName.trim()) {
      githubService
        .getOrgInfo(orgName)
        .then((res) => {
          res.message === 'Not Found'
            ? toast.error('Organization not found')
            : (handleOrgInfo(res),
            githubService
              .getOrgRepos(orgName)
              .then((res) => {
                res.message === 'Not Found'
                  ? toast.error('Repositories not found')
                  : (setReposList(res),
                  history.push(`/${orgName}`));
              })
              .catch((err) => console.error(err)));
        })
        .catch((err) => console.error(err));
    } else {
      toast.error('You should set an organization');
    }
  };

  return (
    <SCSearchForm className='search'>
      <form onSubmit={searchOrg}>
        <label className='hidden' htmlFor='search'>
          Github organization
        </label>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Github organization'
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </SCSearchForm>
  );
};

export default SearchForm;
