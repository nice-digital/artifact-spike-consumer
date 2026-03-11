# artifact-spike-consumer

Minimal consumer projec used for artifact registry spike work.

This repo is used to bvalidate package consumption behaviour when testing private artifact registries (e.g. AWS CodeArtifact, JFrog Artifactory).

<!--  TODO: update README after internal package publish during PAR-27 ticket */ -->
The repo will consume the internal spike package once published via ticket PAR-27:
`@nice-digital/artifact-spike-package`

and is use to verify:

- installation from the private registry
- dependency resolution
- version updates
- CI install behaviour
- upstream npm proxy behaviour

this repo is intentionally minimal code and is **not prodcution code**.