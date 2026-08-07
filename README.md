

## Description

[Nest](https://https://www.docker.com/) Effortlessly store, manage, and deploy containerized apps.

## 1. Vérifier Docker

```bash
$ docker --version && docker-compose --version
```

## 2. Lancer un premier conteneur pour tester

```bash
# creation d'un container
$ docker run -d --name test-nginx -p 8080:80 nginx:alpine

# 3. Explorer les commandes
docker ps
docker logs test-nginx
docker stop test-nginx
docker rm test-nginx
```

## Construction

```bash
# Construction de l'image (nommez-la bien)
docker build -t sitan-api:v1 .

# Inspecter l'image
docker images | grep sitan
```

## Récapitulatif des commandes essentielles
```bash
Commande	Utilité
docker build -t mon-image | .	Construire une image
docker images	| Lister les images locales
docker-compose up -d	| Démarrer les services en arrière-plan
docker-compose down	| Arrêter les services
docker-compose ps	| Voir l’état des conteneurs
docker-compose logs -f api	| Voir les logs en direct de l’API
docker exec -it sitan-api sh	| Ouvrir un terminal dans le conteneur
docker system prune -f	| Nettoyer les ressources inutilisées
```


## Deployment


## Resources

Check out a few resources that may come in handy when working with docker:

- Visit the [Documentation Officielle](https://doc.docker.com) to learn more about the docker.

- Visit the [Docker hub](https://hub.docker.com) for images publique

- Visit the [Guide install](https://docs.docker.com/engine/install)

- Visit the [Sheat sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf) for the help memorie

- Visit the [Docker in Web](https://labs.play-with-docker.com) Pour Bac à sable en ligne (sans installation)

