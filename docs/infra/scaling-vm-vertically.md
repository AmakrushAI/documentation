---
title: Scaling VM Vertically
---

<head>
  <title>Scaling VM Vertically</title>
  <meta name="description" content="Overview of Infra management for Amakrush" />
</head>

Pre-requisites:

- Ensure you have followed steps from setup document.

Next Steps:

- Go to variables.tf file
- To update the instance size of VM instances, update the value of variable corresponding to VM Type.
- For ex. If you want to update the instance size of GPU Based Instances, update the value of variable `gpu_instance_size`
- Run ```terraform plan``` to review changes
- Run ```terraform apply``` to apply changes 