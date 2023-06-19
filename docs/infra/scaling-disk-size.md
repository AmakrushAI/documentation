---
title: Scaling VM Disk Size
---

<head>
  <title>Scaling VM Disk Size</title>
  <meta name="description" content="Overview of Infra management for Amakrush" />
</head>

Pre-requisites:

- Ensure you have followed steps from setup document.

Next Steps:

- Go to variables.tf file
- To update disk size of VM, update the value of variable corresponding to VM Type.
- For ex. If you want to update VM disk size of all GPU Based Workers, update the value of variable `gpu_disk_size`
- Run ```terraform plan``` to review changes
- Run ```terraform apply``` to apply changes 

Note:

- You can expect a minimal downtime as during upgradation of VM Disk Size as machine has to be stopped for increasing size and then restarted