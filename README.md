## Current behaviors

Renovate can't detect sigs.k8s.io/cluster-api package updates, it always complain the below error:
```
DEBUG: Failed to look up go package sigs.k8s.io/cluster-api
```
Also it can't ignore the path that is defined in `ignorePaths` field.

## Expected behaviors

Renovate can detect sigs.k8s.io/cluster-api package updates and ignore the path I define in the `ignorePaths` field.

Note: My repository is hosted on the gitlab, so the endpoint is gitlab. But for convenience, I put the minimal reproduction codes on the github host.