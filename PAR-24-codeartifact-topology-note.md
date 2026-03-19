# PAR-24 — AWS CodeArtifact topology note

## Purpose
Document the CodeArtifact topology created for the spike and the rationale for using it.

## Current spike topology

- One CodeArtifact domain: `nice-digital`
- One repository acting as public npm upstream/proxy: `npm-store`
- One internal repository used by developers and TeamCity: `npm-internal`

## Behaviour

- Internal repository can consume public packages via upstream
- Internal repository can host internal packages
- Public upstream/proxy is configured for spike use - currently set to open policies, full permissions.

## Rationale

- Simple structure for spike validation
- Supports both public package consumption and internal package hosting
  - We will prove out internal package hosting and consumption in [PAR-27](https://nicedigital.atlassian.net/browse/PAR-27)
- Gives a workable starting point for developer and CI flows
- Can be refined later as permissions and publish flows are defined

## Current limitations / caveats

- Current spike permissions are broad / open
- Final hardened permission model is not yet defined
- Upstream policy detail still needs confirmation
- Publish model is deferred to PAR-27

## Diagrams

- See attached diagram(s)
![AWS CodeArtifact Repository topology](./public/images/AWS%20CodeArtifact%20Package-2026-03-18-101243.png)
![CodeArtifact Developer/Machine Flow](./public/images/Developer%20Machine%20Package-2026-03-18-102909.png)
![npm install flow via CodeArtifact](./public/images/Untitled%20diagram-2026-03-18-102515.png)

## Deferred items

- Final permissions model
- Final publish model
- Upstream policy constraints
- Any later topology refinements from PAR-27

## Related tickets

- [PAR-24](https://nicedigital.atlassian.net/browse/PAR-24)
- [PAR-25](https://nicedigital.atlassian.net/browse/PAR-25)
- [PAR-27](https://nicedigital.atlassian.net/browse/PAR-27)