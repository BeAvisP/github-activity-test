const express = require('express');
const Repository = require('../models/Repository.model');
const router = express.Router();

// Route to get all repositories
router.get('/', (req, res, next) => {
  Repository.find()
    .then((repositories) => res.status(200).json(repositories))
    .catch((err) => res.status(500).json(err));
});

// Route to get a repository by ID
router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Repository.findOne({ _id: id })
    .then((repository) => res.status(200).json(repository))
    .catch((err) => res.status(500).json(err));
});

// Route to create a repository
router.post('/', (req, res, next) => {
  const {
    id: githubID,
    node_id,
    name,
    full_name,
    private,
    created_at,
    updated_at,
    pushed_at,
    size,
    stargazers_count,
    watchers_count,
    forks_count,
    open_issues_count,
    default_branch,
    network_count,
    subscribers_count,
  } = req.body;

  Repository.create({
    githubID,
    node_id,
    name,
    full_name,
    private,
    created_at,
    updated_at,
    pushed_at,
    size,
    stargazers_count,
    watchers_count,
    forks_count,
    open_issues_count,
    default_branch,
    network_count,
    subscribers_count,
  })
    .then((repository) => res.status(200).json(repository))
    .catch((err) => res.status(500).json(err));
});

// Route to edit the repository info for logged users
router.put('/:id', (req, res, next) => {
  const { id } = req.params;

  Repository.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    .then((repository) => res.status(200).json(repository))
    .catch((error) => res.status(500).json(error));
});

// Route to delete a repository
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Repository.findOneAndRemove({ _id: id })
    .then(() => res.status(200).json({ message: `repository ${id} deleted` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
