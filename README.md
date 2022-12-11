# DailyWritings

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Practices](#practices)
  - [Material UI](#material-ui)
  - [Icons](#icons)
  - [Styles](#styles)

<br>

## About the Project

---

### Name: DailyWritings

### Created by: Samuli Salminen

### Date: 11.12.2022

### Course: Full Stack -ohjelmointi TTC2080-3014 - TTV21SM - Pe

### Time spent: approx. 40h

---

<br>

(p.s. If you're busy, just skip this part. Otherwise keep reading at your own risk.)

This project was created for my school course. The basic idea is to have an easy way to write a journal/diary/some other entry on a daily basis. How innovative! Oh I know, there's like a million of these apps on app stores already. So why would I make yet another one. Well, to make the world a better place... Just kidding. My motives were purely selfish. I thought if I would create my own app, then I would be motivated enough to keep a journal which I used to do (a long time ago). Well, that didn't happen. So I guess you could say that this project failed, because it didn't reach the underlying goal. Although that is true, there were some other (also selfish) benefits from doing this project.

All joking aside, some other motives I had for making this project, were to learn about React.js, React Context API and authentication (JWT). Mission accomplished. Since all of those were outside the scope of my shool course I decided to follow a course from one of my favourite online teachers Brad Traversy. Here is the link to his course if you're interested: <a href='https://www.udemy.com/course/modern-react-front-to-back/'>React Front To Back</a>. Obviously my code is going to look a little different from Brad's course code, because I wasn't building the same app, but most of the syntax for routing on the server side and context on the client side should be pretty similar. The whole UI is of course different and I used Material UI's component library were Brad used something else (can't remember what).

### Some problem areas

The beginning of the project was all smooth sailing. I started with the backend testing my routes with <a href='https://www.postman.com/'>Postman</a>. Everything was working and running fine. When I began to apply Context to the frontend problems and bugs started to surface. I used a lot of time debugging things and occasionally upgrading/downgrading npm packages etc to make thing work. But problems just seemed to pile up the further I went. At this point I realized that the course I was following was already a few years old (a rookie mistake). The course was not updated and used old syntax, tech and packages. When I realized this, I decided to completely re-do the Context part of the front (the backend was still solid without any problems). Luckily for me, every student from past two years were having the same kind of problems and there was actually an updated repo to learn the new way of doing things.

Either way, these problems had taken so much time to figure out, that I had to dumb down my app to only a few functionalities. For example, at the moment a new user can create an account, but there is no way to change your account information from UI or even no way to delete you account from UI. Originally I was planning to create that functionality, but at the moment it is only possible to delete a user by logging into the database and manually delete the user document.

Well, problems aside, at least I've got a working app now, even if it lacks in functionality.

<br>

## Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://javascript.info/">JavaScript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://mui.com/">Material UI</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://javascript.info/">JavaScript</a></li>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/home">MongoDB</a></li>
  </ul>
</details>

<br>

## Features

At the moment user can:

- Create an account
- Login
- Logout
- Create a writing
- Edit a writing
- Delete a writing

Future developments could include user's ability to:

- Edit their profile
- Delete account
- Mark a writing to favourites
- Anchor a writing to top
- Search field for searching writings
- Set the order of writings (date, alphabetical, lenght etc...)
- Share a writing via social media
- Print a writing (pdf)
- Bulk actions (delete, other...)
- Usually with these kinds of apps there is also fail safe for accidental deletes. So maybe the delete operation should be a two step process. I know I would be mad if I deleted a writing which I was working on for a long time, just because I accidentally clicked on the "delete" button next to the "edit" I actually wanted to click.

<br>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the project root:

`PORT`

`MONGO_URI`

`JWT_SECRET`

<br>

## Getting Started

Clone the project

```
git clone git@github.com:samueeli/daily-writings.git
```

Add .env file with your specified variables as listed above in [Environment Variables](#environment-variables) (if you don't have a mongoDB database set up already, you have to do it before you can add the env).

<br>

Install dependencies for server and client

```
npm install
```

Start the server and client

```
npm run dev
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

<br>

## Practices

<br>

### Material UI

Material UI should be used to create all UI elements were that is possible.

### Icons

In this project I use Feather Icons from the React Icons library. Those should be used in most cases in the app to maintain the designed style. For exceptions, the Material Icons library was also added.

### Styles

Currently theme styles are not specified, so styles for MUI components come from the library's default values. In the future it would be beneficial to use ThemeProvider and create theme.js where MUI properties and styles could be cutomized to create a custom styles for the app.

For global styles use the App.css file.

For component specific styles create a component specific style sheet.

Example:

I have a component called "Register.js". To create a style sheet use this naming convention: ComponentName.styles.css. So in this case I would create a file called "Register.styles.css".

Also, since I'm not using style modules here, css class scope could be an issue. So to make sure the scope stays inside the specific component the css classes should be prefixed with the component name like so:

```
<div className="RegisterContainer">
  <Content>
</div>
```

And in the style sheet:

```
.RegisterContainer {
  width: 100%;
}
```
