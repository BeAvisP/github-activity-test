import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SCRepositoryDetailsPage from './RepositoryDetailsPage.styled';
import githubService from '../../services/github.service';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { IoIosReturnLeft, IoIosEye, IoIosStar, IoIosSave } from 'react-icons/io';
import { CgGitFork } from 'react-icons/cg';

function RepositoryDetailsPage() {
  const [repoInfo, setRepoInfo] = useState();
  const [contributorsInfo, setContributorsInfo] = useState();
  const { org, repo } = useParams();
  const history = useHistory();

  useEffect(
    () => {
      githubService
        .getRepo(org, repo)
        .then((repo) => setRepoInfo(repo))
        .catch((err) => console.error(err));
      githubService
        .getRepoContributors(org, repo)
        .then((repo) => setContributorsInfo(repo))
        .catch((err) => console.error(err));
    },
    [],
    []
  );

  return (
    <SCRepositoryDetailsPage>
      <IoIosReturnLeft className='icons return' onClick={() => history.push(`/${org}`)}/>
      <IoIosSave className='icons save'/>
      <div className='wrapper'>
        <h1>{repoInfo?.name}</h1>
        <div className='details'>
          <section className='owner-details'>
            <Link to={{ pathname: repoInfo?.owner.html_url }} target={'_blank'}>
              <img src={repoInfo?.owner.avatar_url} className='avatar' />
            </Link>
            <h3>{repoInfo?.owner.login} repository</h3>
          </section>
          <section className='item-details'>
            <div className='info-wrapper'>            
              <div className='dates'>
                <p>Created: {dayjs(repoInfo?.created_at).format('DD/MM/YYYY')} </p>
                <p>Last updated: {dayjs(repoInfo?.updated_at).format('DD/MM/YYYY')}</p>
                <p>Last pushed: {dayjs(repoInfo?.pushed_at).format('DD/MM/YYYY')}</p>
              </div>
              <div className='interactions'>
                <p><IoIosEye className='icons' /> {repoInfo?.watchers_count} </p>
                <p> <IoIosStar className='icons' /> {repoInfo?.stargazers_count} </p>
                <p> <CgGitFork className='icons' /> {repoInfo?.forks_count} </p>
              </div>          
            </div>
            <p>Description: {repoInfo?.description} </p>
            <Link to={{ pathname: repoInfo?.html_url }} target={'_blank'}>
              Go to repo
            </Link>
          </section>
        </div>
        <section>
          <h2>Contributors</h2>
          <div className='commit-list'>
            {contributorsInfo?.map((contributor, index) => {
              let topContributor =
                index / contributorsInfo.length <= 0.1 ? true : false;
              return (
                <div key={contributor.id} className='commit-details'>
                  <Link to={{ pathname: contributor.html_url }} target={'_blank'}>
                    <img
                      src={contributor.avatar_url}
                      className={topContributor ? 'top-avatar' : 'avatar'}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </SCRepositoryDetailsPage>
  );
}

export default RepositoryDetailsPage;
