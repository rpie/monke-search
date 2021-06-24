<h1 align="center">
	<img src="https://i.pinimg.com/originals/f4/26/14/f426142ae405d6971e518bde32078898.gif" width="170px"><br>
    Monke Search - a RESTful API 🐒
</h1>
<p align="center">
	Search API to lookup Discord users based off their username, discriminator, snowflake etc
</p>

<p align="center">
	<a href="https://nodejs.org" target="_blank">
    	<img src="https://img.shields.io/badge/Node-12.XX+-7DCDE3?style=for-the-badge" alt="Node">
     </a>
	<a href="https://nodejs.org" target="_blank">
    	<img src="https://img.shields.io/badge/Version-1.0.0-7DCDE3?style=for-the-badge" alt="Version">
     </a>
     <a href="https://nodejs.org" target="_blank">
    	<img src="https://img.shields.io/badge/LICENSE-ISC-7DCDE3?style=for-the-badge" alt="LICENSE">
     </a>
</p>

## Install ✨

You need to install [Node.js](https://nodejs.org)! Make sure you install the `LTS` version.

If you're on Linux (Ubuntu 20.04 LTS):
```
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -E
$ sudo apt install nodejs
$ node -v
```

If you're on Windows, download the files from GitHub (you wont have Git installed by default)

Alternatively, if you're on Linux, this command should work (Ubuntu 20.04 LTS):
```
$ sudo apt install git
$ git clone https://github.com/monkemen/monke-search.git
$ cd monke-search
```

Make a file in `data/` called `config.json` and copy the contents of `config.example.json` after filling out all the correct details.

If you're on windows, rename `.env.example` to `.env` and open it with notepad

Alternatively, if you're on Linux
```
mv .env.example .env
```
and then you can edit it using nano or vim
```
nano .env
```

If you're on Windows, open a command prompt in the directory where you extracted the Zip archive.

```
$ npm i
$ yarn install
```

Once you have finished install all of the dependencies, you may start the bot.

```
$ npx yarn run start
```
OR
```
$ yarn run start
```