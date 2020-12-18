# Self-manageable Travel Agency Website.


## Introduction

This is a project made of a main page that can be accessed by any internet user.
This page was designed to meet the needs of a travel agency including:
- Tourist packages showroom
- Carousel Ads
- Submission of forms
- Newsletter subscription


**Try it yourself remotely**   
*Demo* : http://vps-1831098-x.dattaweb.com/

---

It also includes an administrator website that requires to log in. Authentication and authorization after login are handled using JWT.     
This section is in charge of :
- Content Management
- Receiving and handling forms and subscriptions

Administrator's credentials:

- user     : admin
- password : passAdmin123!!

**Try it yourself remotely**   
*Demo* : http://vps-1831098-x.dattaweb.com/admin/

---

## Run this proyect locally

Just clone or download this repository.

- To get the api to work, on root folder:

```
cd backend
npm install
nodemon serverBackend.js
```

-- 

- To render the main page on your browser, on root folder:

```
cd frontWeb
npm install
npm start
```


- To render the admin page on your browser, on root folder:

```
cd frontAdmin
npm install
npm start
```








