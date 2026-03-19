# PAR-25 — Developer auth and install flow

## Purpose

Document the local developer authentication and package install flow tested during the spike.

## Tested AWS auth flow

1. Access AWS via IAM Identity Center / SSO
2. Configure local CLI profile using `aws configure sso`
3. Verify AWS auth using `aws sts get-caller-identity --profile <profile>`
4. Verify CodeArtifact visibility using `aws codeartifact list-domains --profile <profile>`

## Tested CodeArtifact npm auth flow

- Command tested:
  - `aws codeartifact login --tool npm --repository <repo> --domain <domain> --profile <profile>`

## Observed npm config behaviour

- `aws codeartifact login` modified user-level `~/.npmrc`
- Existing config was observed to be commented out
- Registry was replaced with the CodeArtifact endpoint

## Install flow observations

- `npm ci` completed successfully in local testing
- After clearing `node_modules` and npm cache, package requests were observed hitting CodeArtifact
- In this test, `package-lock.json` `resolved` values did not change

## Friction / usability notes

- Root `.npmrc` mutation may conflict with existing developer setups
- Registry/auth split may need standardisation
- Re-auth expectations still need to be agreed
- Token handling should avoid frequent manual copy/paste where possible

## Current status

- Login and install flow is tested during spike
- Flow is not yet confirmed as the final local developer standard

## Related tickets

- [PAR-25](https://nicedigital.atlassian.net/browse/PAR-25)
- [PAR-27](https://nicedigital.atlassian.net/browse/PAR-27)