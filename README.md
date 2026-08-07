# FORMATION DOCKER SITAN-INFO

## Description

Docker : stocker, gérer et déployer des applications conteneurisées.

## Prérequis

- Docker installé
- docker-compose installé

## 1. Vérifier Docker

```bash
docker --version
docker-compose --version
```

## 2. Lancer un conteneur de test

```bash
docker run -d --name test-nginx -p 8080:80 nginx:alpine
```

Commandes utiles :

```bash
docker ps
docker logs test-nginx
docker stop test-nginx
docker rm test-nginx
```

## 3. Construire l'image

```bash
docker build -t sitan-api:v1 .
```

```bash
docker images | grep sitan
```

## 4. Commandes essentielles

```bash
docker build -t mon-image .        # Construire une image
docker images                     # Lister les images locales
docker-compose up -d              # Démarrer les services en arrière-plan
docker-compose down               # Arrêter les services
docker-compose ps                 # Voir l’état des conteneurs
docker-compose logs -f api        # Suivre les logs de l’API
docker exec -it sitan-api sh      # Ouvrir un terminal dans le conteneur
docker system prune -f            # Nettoyer les ressources inutilisées
```

## 5. Deployment

Ajouter ici les commandes et la procédure de déploiement pour votre projet.

## Resources

- Documentation officielle : https://docs.docker.com
- Docker Hub : https://hub.docker.com
- Guide d’installation : https://docs.docker.com/engine/install
- Cheat sheet : https://docs.docker.com/get-started/docker_cheatsheet.pdf
- Docker en ligne : https://labs.play-with-docker.com

