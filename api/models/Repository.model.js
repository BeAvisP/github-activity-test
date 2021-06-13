const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema(
  {
    githubID: { type: Number, required: true, unique: true },
    node_id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    full_name: { type: String, required: true, unique: true },
    private: { type: Boolean, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date},
    pushed_at: { type: Date},
    size: { type: Number},
    stargazers_count: { type: Number},
    watchers_count: { type: Number},
    forks_count: { type: Number},
    open_issues_count: { type: Number},
    default_branch: { type: String},
    network_count: { type: Number},
    subscribers_count: { type: Number},
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Repository = mongoose.model('Repository', repoSchema);
module.exports = Repository;
