---
title: Scaling VM Horizontally
---

<head>
  <title>Scaling VM Horizontally</title>
  <meta name="description" content="Overview of Infra management for Amakrush" />
</head>

Pre-requisites:

- Ensure you have followed steps from setup document.

Next Steps:

- Go to variables.tf file
- To update the number of VM instances, update the value of variable corresponding to VM Type.
- For ex. If you want to update the number of GPU Based Instances, update the value of variable `gpu_instance_count`
- Run ```terraform plan``` to review changes
- Run ```terraform apply``` to apply changes 