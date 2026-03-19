# Spike checklist 

## 1. Baseline setup

- [x] Create consumer repo structure
- [x] Add initial public npm dependencies (`jest`, `eslint`, `lodash`)
- [x] Create `src/index.js`
- [x] Create `src/verify-script.js`
- [x] Confirm npm install works locally against normal npm registry as a baseline.
- [x] Record any relevant baseline behaviours
- [x] Create and prepare the `@nice-digital/artifact-spike-package` repo

## 2. Private registry configuration

- [x] Configure consumer repo to use candidate private registry
- [x] Confirm developer authentication flow works
- [x] Confirm public npm dependencies install successfully via upstream/proxy
- [x] Record any npm config, registry and token handling behaviour

## 3. Internal package validation

- [ ] Publish the internal spike package @nice-digital/artifact-spike-package`
- [ ] Add the internal spike package to artifact-spike-consumer repo.
- [ ] Confirm the internal spike installs succesfully
- [ ] Confirm the consumer spike repo can load and verify the internal spike package

## 4. Versioning validation

- [ ] Create a new version of package: `@nice-digital/artifact-spike-package`.
- [ ] Publish new version of spike package
- [ ] Confirm version update behaviour works as expected, registry should hold two versions of the spike package.
- [ ] Update or reinstall spike package in consumer spike repo.
- [ ] Record any issues with package resolution or version selection.

## 5. CI validation

- [ ] Configure CI test pipeline
- [ ] Confirm CI can authenticate to candidate private registry
- [ ] Confirm CI can install dependencies successfully
- [ ] Run consumer repo `npm run verify` in CI.
- [ ] Record CI auth, token and install behaviour

## Optinal realism checks

- [ ] Add one exisiting org npm package 
- [ ] Confirm it installs successfully using private registry
- [ ] Record any issues..

## Vulnerability scanning

- [ ] Decide on scanning tools to assess
- [ ] Test scanning appraoch in developer workflow
- [ ] Test scanning approach through CI
- [ ] Optionally add known vulnerable dependency versions to test handling vulnerability scenarios
- [ ] Record findings, limitations, costs and reccommendations
