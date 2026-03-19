# PAR-25 — Open questions and decisions

## Purpose

Record the remaining decisions needed to finalise the recommended local developer auth and npm configuration approach.

## Open questions

### AWS access

- Is AWS SSO / IAM Identity Center the standard local developer entry point?
- Do developers need one AWS account / role or multiple?
- Is there an existing organisational standard for AWS CLI profile setup?

### CodeArtifact auth

- Is `aws codeartifact login` acceptable as the standard local developer flow?
- Is CLI-only sufficient, or is helper/re-auth scripting needed? 
  - helper would still use CLI taking the documented [manual approach from AWS CA documentation](https://docs.aws.amazon.com/codeartifact/latest/ug/npm-auth.html#configuring-npm-without-using-the-login-command), but automated via [bash script as descibed here](https://oneuptime.com/blog/post/2026-02-12-codeartifact-npm/view#token-refresh-script)

### npm config

- Is root `~/.npmrc` mutation acceptable?
- Should registry config and auth config be split between project-level and user-level config?
- What minimum npm config standard is required for consistency across repos?

### Token lifecycle

- What token lifetime / re-auth expectation is acceptable in practice?
- Is manual re-auth acceptable for local development?

#### resource links

- [AWS CA npm auth flow docs](https://docs.aws.amazon.com/codeartifact/latest/ug/npm-auth.html#configuring-npm-without-using-the-login-command) 
- [Example bash script for token refresh](https://oneuptime.com/blog/post/2026-02-12-codeartifact-npm/view#token-refresh-script)

## Why these questions matter

- They affect the final recommended local setup
- They affect consistency across repos
- They affect developer friction and support burden
- They affect whether the setup is workable without repeated manual intervention

## Current status

- These questions have been identified through spike testing
- Final answers are awaiting stakeholder/platform input

## Deferred / related

- Publish permissions and wider publish flow are deferred to [PAR-27](https://nicedigital.atlassian.net/browse/PAR-27)