# Build, Push Image, and Deploy to Azure WebApp

This repository contains a NestJS application that is designed to be built and deployed using a GitHub Actions workflow. It builds a Docker image of the application, pushes it to GitHub Packages, and deploys the image to a Web App on Azure.

## Workflow

The GitHub Actions workflow is configured to be triggered on any push to the `main` branch. It includes two jobs: `build` and `deploy`.

### Build

The `build` job is responsible for:

- Checking out the code
- Setting up Node.js
- Caching NPM dependencies
- Logging in to the Container registry (GitHub Packages in this case)
- Building the application
- Setting up Docker Buildx
- Caching Docker layers
- Extracting metadata for Docker
- Building and pushing the Docker image to GitHub Packages
### Deploy

The `deploy` job is responsible for:

- Lowercasing the repository name
- Deploying the Docker image to an Azure Web App

## Setup

In order for the workflow to function correctly, you will need to set up a few environment variables and secrets:

- `APP_NAME`: The name of your Azure Web App
- `REGISTRY`: The URL of your Docker registry (set to `ghcr.io` for GitHub Packages)
- `IMAGE_NAME`: The name of your Docker image (by default, it's set to the name of your GitHub repository)
- `GITHUB_TOKEN`: A GitHub secret that is automatically provided to the workflow. It's used to authenticate with GitHub Packages.
- `AZUREAPPSERVICE_PUBLISHPROFILE_2F7DF488340C407A90F7BA7124811112`: A secret that holds the Azure App Service publish profile. This is used to deploy the Docker image to Azure.
## Dockerfile

The Dockerfile included in this repository is configured for a production environment. It starts with a `node:18-alpine` base image, sets the working directory, copies over necessary files, installs dependencies, and exposes port 3000. The command to start the application is `npm run start:prod`.

## Getting Started

To use this workflow:

1. Fork or clone this repository.
2. Set up the necessary secrets in your GitHub repository settings.
3. Make sure you have an Azure Web App created with the same name as `APP_NAME`.
4. Push to the `main` branch and watch the Actions tab!

Please note that you will need to have Node.js and Docker installed to build and run the application locally.

Happy coding!
