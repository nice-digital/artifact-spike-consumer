# artifact-spike-consumer

Minimal consumer projec used for artifact registry spike work.

This repo is used to bvalidate package consumption behaviour when testing private artifact registries (e.g. AWS CodeArtifact, JFrog Artifactory).

<!--  TODO: update README after internal package publish during PAR-27 ticket */ -->
The repo will consume the internal spike package once published via ticket PAR-27:
`@nice-digital/artifact-spike-package`

It is use to verify:

- installation from the private registry
- dependency resolution
- version updates
- CI install behaviour
- upstream npm proxy behaviour

This repo is intentionally minimal code and is **not prodcution code**.

## Dependencies used in the spike

- `react`
- `react-dom`
- `lodash`
- `eslint`
- `jest`

These are included to help validate pulbic npm proxy/upstream behaviours.

Later in spike, the repo will also include:

- internal spike package `@nice-digital/artifact-spike-package`
- one or more existing organistional npm packages.