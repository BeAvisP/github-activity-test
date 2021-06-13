<h1 align="center">github-activity-test by Beatriz Avis</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/NishyIR" target="_blank">
    <img alt="Twitter: NishyIR" src="https://img.shields.io/twitter/follow/NishyIR.svg?style=social" />
  </a>
</p>

`React` app that use github API to fetch organization repos and show it's details.

To track the repos, an API built with `NodeJS` and `Express` connected to `MongoDB` with `Mongoose` has been implemented. So, the user can track any repo and the information is saved to the DDBB.

## Download

```sh
git clone https://github.com/BeAvisP/github-activity-test.git

cd github-activity-test
```

## Install API

```sh
npm install
```

This command will install all the dependencies needed to run de API.

## Install CLIENT

```sh
npm install
```

This command will install all the dependencies needed to run de frontend client.

## API Initial configuration

In order to start using the API you need to have configure your `.env` file.

Here is a mockup of the file:

```
PORT=3001
ENV=development
DB_URL=mongodb://localhost:27017/github-activity
PUBLIC_DOMAIN=http://localhost:3000
SECRET=basic-secret-auth
```

## Usage

To build and run the `API`:

```sh
cd api

npm start
```

The URL of the API will be `localhost:3001`

To run the `React` app:

```sh
cd client

npm start
```

The URL of the client will be `localhost:3000`.
By default a browser window will be opened when the app is running.

## Endpoints Table

| HTTP Method | Endpoint         | Request Body                                                                                                                                                                                           | Success status | Error Status | Description                          |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------------ | ------------------------------------ |
| GET         | `/api/repos/`    |                                                                                                                                                                                                        | 200            | 500          | Get all saved repos in the DDBB      |
| GET         | `/api/repos/:id` |                                                                                                                                                                                                        | 200            | 500          | Get a repo by it's ID from the DDBB  |
| POST        | `/api/repos/`    | { id, node_id, name, full_name, private, created_at, updated_at, pushed_at, size, stargazers_count, watchers_count, forks_count, open_issues_count, default_branch, network_count, subscribers_count } | 200            | 500          | Save a new repo in the DDBB          |
| PUT         | `/api/repos/:id` | { id, node_id, name, full_name, private, created_at, updated_at, pushed_at, size, stargazers_count, watchers_count, forks_count, open_issues_count, default_branch, network_count, subscribers_count } | 200            | 500          | Edit repo by it's ID from the DDBB   |
| DELETE      | `/api/repos/:id` |                                                                                                                                                                                                        | 200            | 500          | Delete repo by it's ID from the DDBB |

## Author

👤 **Beatriz Avis**

- Twitter: [@NishyIR](https://twitter.com/NishyIR)
- Github: [@BeAvisP](https://github.com/BeAvisP)
- LinkedIn: [@beatrizavis](https://linkedin.com/in/beatrizavis)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
