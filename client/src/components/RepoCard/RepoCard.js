import React from 'react';
import Skeleton from 'react-loading-skeleton';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import SCRepocCard from './RepoCard.styled';

export default function RepoCard({ repo }) {
  return (
    <SCRepocCard className='content'>
      <h3>{repo?.name || <Skeleton width={100} />}</h3>
      {repo.language ? <h5>Language: {repo.language} </h5> : null}
      <h5>
          Last updated:{' '}
        {dayjs(repo?.updated_at).format('DD/MM/YYYY') || (
          <Skeleton width={80} />
        )}
      </h5>
      {repo ? (
        repo.description && <p>{repo.description}</p>
      ) : (
        <Skeleton width={180} count={2} />
      )}
      <Link to={`/${repo.owner.login}/${repo.name}`}>Check Details</Link>
    </SCRepocCard>
  );
}
