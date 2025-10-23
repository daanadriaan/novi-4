# Stap 1: Kies een basis-image. Alpine is een minimale docker basis
FROM node:22-alpine

# Stap 2: Stel de werkmap in de container in
WORKDIR /usr/src/appv

# Stap 3: Kopieer de package bestanden
COPY package*.json ./

# Stap 4: Installeer de dependencies
RUN npm install

# Stap 5: Kopieer de rest van de app-code
COPY . .

# Stap 6: Geef aan welke poort de app gebruikt
EXPOSE 3000

# Stap 7: Het commando om de app te starten
CMD [ "npm", "start" ]
