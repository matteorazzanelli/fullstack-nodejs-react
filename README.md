[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">FullStack Project - Robots</h3>
  <p align="center">Project created for <strong>Start2Impact</strong> course: <em>Full Stack Final Project</em></p>
</div>

### Built With

* [Node.js](https://nodejs.org/en)
* [MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/) (or get the following italian only [guide](https://www.html.it/guide/guida-mysql/)) or alternatively follow [this](https://www.html.it/pag/52749/impostare-un-ambiente-php-su-linux/) guide (italian only)
* [REST API](https://www.html.it/guide/rest-api-e-database-la-guida/) (italian only)
* [HTML 5](https://developer.mozilla.org/en-US/docs/Glossary/HTML)
* [CSS 3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://www.javascript.com/)
* [React](https://react.dev/)
* [Create React App](https://github.com/facebook/create-react-app)

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->
## Getting Started

1. Clone the repo

```sh
git clone git@github.com:matteorazzanelli/fullstack-nodejs-react.git
```

2. Project setup: if you have both *mysql* and *lampp* environment installed, this may cause conflict; to resolve this just type 
```
service mysql stop
```
```
sudo /opt/lampp/lampp restart
```

3. Nodejs environment setup [here](https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm)


4. Rename *example.env* in *.env* and modify the following parameters with yours
```
DB_HOST=<YOUR_HOST>
DB_USER=<YOUR_USER>
DB_PSSWORD=<YOUR_PASSWORD>
DB_NAME=<YOUR_DATABASE_NAME>
```

5. Go to [phpMyAdmin](http://localhost/phpmyadmin/index.php) (eventually follow [thish](ttps://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-20-04) guide); go to the *Import* section, choose the *migrations.sql* file that is present in this folder and click on the *Import* button at the bottom. 

6. Go to both work directories
```
cd fullstack-nodejs-react/frontend
```
```
cd fullstack-nodejs-react/backend
```

7. Install dependencies
```
npm install
```

8. Run
```
npm start
```

<!-- USAGE -->
## Usage

First register a user by using the signup form and enter to the home page with the login.
Check the name, email and password rules in FormValidation.js if you encounter difficulties to find a suitable combination.
Then, you have the possibility to add, delete and modify a robot associated with that logged user.  


<!-- CONTACT -->
## Link & Contact

Matteo Razzanelli - matteo.razzanelli89@gmail.it

Start2impact personal page - https://talent.start2impact.it/profile/matteo-razzanelli

Project Repository: [Full Stack App](https://github.com/matteorazzanelli/fullstack-nodejs-react)

<!-- MARKDOWN LINKS & IMAGES -->
[issues-shield]: https://img.shields.io/github/issues/matteorazzanelli/fullstack-nodejs-react/repo.svg?style=for-the-badge
[issues-url]: https://github.com/matteorazzanelli/fullstack-nodejs-react/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/matteo-razzanelli/