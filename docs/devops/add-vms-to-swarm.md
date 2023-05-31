---
title: Adding newly added VMs to Swarm
---

<head>
  <title>Adding newly added VMs to Swarm</title>
  <meta name="description" content="Overview of Infra management for Amakrush" />
</head>

Pre Requisistes:

- Ensure you have followed steps from setup document.

Next Steps:

- Run the base_setup.yml file by using commnand `ansible-playbook base_setup.yml -i azure_rm.yml`

Verification:

- SSH into manager node
- Run `docker node ls` and verify if the node is successfully added 