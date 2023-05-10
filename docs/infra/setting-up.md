---
title: Setup
---

<head>
  <title>Setup</title>
  <meta name="description" content="Overview of Infra management for Amakrush" />
</head>

Pre-requisites:

- Install Terraform
- Install Azure CLI
- Setup Azure CLI Credentials using AZ Login
- Setup a storage container on Azure to save terraform state 

Next Steps:

- Clone the [infra](https://github.com/AmakrushAI/infra) repo
- Update the following block in terraform.tf with details of storage conatiner created by you

```tf
backend "azurerm" {
            resource_group_name  = "tfstate"
            storage_account_name = "tfstatejsv8r"
            container_name       = "tfstate"
            key                  = "./terraform.tfstate"
        }
```

- Run  ```terraform init``` to initalize code and install necessary requirements
- Run ```terraform plan``` to review changes
- Run ```terraform apply``` to apply changes 