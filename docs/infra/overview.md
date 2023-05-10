---
title: Overview
---

<head>
  <title>Overview</title>
  <meta name="description" content="Overview of Infra management for Amakrush" />
</head>

### Basic Details

- Cloud Platform: Microsoft Azure
- Automation Tool: Terraform

Note:

* We are using centralized terraform state which is saved in Azure Blob Storage. Two persons will not be able to apply changes at same time as terraform uses state lock to avoid conflicting changes.
* Avoid running the changes from local setup, ssh key stored at user's home location is only allowed to ssh to all VMs created. In case run locally ansible will lose access to all the VMs. (In future we will start using hashicorp vault to save ssh keys to avoid this)

