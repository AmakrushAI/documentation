module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['index', 'intro/environment', 'intro/installing-deps'],
    },
    {
      type: 'category',
      label: 'Development',
      collapsed: false,
      items: ['development/starting'],
    },
    {
      type: 'category',
      label: 'Infra',
      collapsed: false,
      items: [
        'infra/overview',
        'infra/setting-up',
        'infra/scaling-disk-size',
        'infra/scaling-vm-horizontally',
        'infra/scaling-vm-vertically',
      ],
    },
    {
      type: 'category',
      label: 'Devops',
      collapsed: false,
      items: ['devops/add-vms-to-swarm'],
    },
  ],

  // api: [{
  //   type: 'category',
  //   label: 'Getting Started',
  //   collapsed: false,
  //   items: ['components'],
  // }],
};
