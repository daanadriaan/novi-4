# ~~Draaien~~
- ~~`docker build -t novi .`~~
- ~~`docker run -p 3000:3000 --name demo-app-les2 novi`~~
# ~~Stoppen~~
- ~~`docker stop demo-app-les2 && docker rm demo-app-les2`~~

# Draaien
- `docker compose up --build`
# Stoppen
- `docker down`

# Kubernetes
- Aanmaken `kubectl apply -f k8s/`
- `kubectl get pods`
- `kubectl get services`
- `kubectl get deployments`
- `kubectl rollout restart deployment novi-app-deployment`
