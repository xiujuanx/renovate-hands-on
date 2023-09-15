module.exports = {
    endpoint: 'https://gitlab.eng.vmware.com/api/v4/',
    platform: 'gitlab',
    token: process.env.RENOVATE_TOKEN,
    enabledManagers: ["gomod"],
    suppressNotifications: ["dependencyLookupWarnings"],
    hostRules: [
      {
        matchHost: 'github.com',
        token: process.env.GITHUB_COM_TOKEN,
      },
    ],
    repositories: [
      {
          repository: 'xiujuanx/renovate_hands_on',
          baseBranches: ["main"],
          branchPrefix: "topic/renovate-bot/",
          additionalBranchPrefix: "{{{baseBranch}}}/",
          packageRules: [
            {
              "matchPackagePatterns": ["*"],
              "enabled": false,
            },
            {
              "matchPackageNames": ["sigs.k8s.io/cluster-api"],
              "enabled": true,
              "description": "Only enable Renovate for cluster-api dependency",
            },
          ],
          ignorePaths: ["**/helloworld/**"],
      },
    ],
    postUpdateOptions: ["gomodTidy", "gomodMassage"],
    allowPostUpgradeCommandTemplating: true,
  };
