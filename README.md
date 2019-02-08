
### Installation

Install the project on your computer (open your terminal then paste this) :
```
git clone https://github.com/kahantar/cas_pratique.git
```

Install postgresql and open it :
```
apt-get install postgresql postgresql-cli

su - postgres

psql postgres

ALTER USER postgres WITH ENCRYPTED PASSWORD "null";

CREATE DATABASE database_development;

```

Download the database:
```
cd cas_pratique/backend

npm i -g sequelize-cli

sequelize db:migrate

node data.js

```

Launch the server (open 2 terminals):
```
Terminal 1 :

cd cas_pratique/backend
npm install
npm start


Terminal 2 :

cd cas_pratique/frontend
npm install
npm start
```

Open the project in your Navigator :
```
http://localhost:3000 (Paste this in the url)
```
