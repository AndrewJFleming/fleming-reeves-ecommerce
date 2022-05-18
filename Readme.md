<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AndrewJFleming/fleming-reeves-ecommerce">
    <img src="client/src/images/logo.png" alt="Logo" height="80">
  </a>

  <h3 align="center">Fleming Reeves Ecommerce</h3>

  <p align="center">
    A collaborative ecommerce project built with the MERN stack by Andrew Fleming and Cody Reeves.
    <br />
    <br />
    <a href="https://www.linkedin.com/in/andrew-j-fleming-web-dev">Andrew Fleming LinkedIn</a>
    ·
    <a href="https://www.linkedin.com/in/codingreeves/">Cody Reeves LinkedIn</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Project Screen Shot][project-screenshot]](https://github.com/AndrewJFleming/fleming-reeves-ecommerce)

This is a collaborative MERN stack project between Andrew Fleming and Cody Reeves. Our primary goal was to gain experience working in a team environment, using the Trello project management software for coordinating tasks for our weekly sprints. The initial release of the app was completed over the course of 4 week-long sprints.

Though both of us had experience with the MaterialUI CSS framework, a secondary goal for this collaborative project was to improve our skills working with the Material UI components, the styled-components feature as well as the custom theme feature.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [JsonWebToken](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [MaterialUI](https://mui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Below you'll find some instructions on what you'll need to run the project locally on your machine, how to install the app and how to get the app running.

### Prerequisites

- yarn
  ```sh
  npm install --global yarn
  ```

### Installation

Before you run the admin or client Embossed apps locally, you'll need to install their required dependencies.

1. Clone the repo

   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```

2. Navigate to the desired directory.

   ```sh
   cd client
   ```

   or

   ```sh
   cd admin
   ```

   or

   ```sh
   cd server
   ```

3. Install NPM packages for each directory.

   ```sh
   yarn
   ```

4. Rename the .env.example file in the client and server directories to .env

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The client uses the Node.js server to interact with this project's MongoDB database.

1. Start the client or admin app locally.

   ```sh
   npm start
   ```

2. Navigate to the the server directory and start the server with the same command.
   ```sh
   yarn run start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Use useMemo or useCallback for performance optimization.
- [ ] Add product variants.
- [ ] Add product categories.
- [ ] Add Stripe payment processing to cart checkout.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Andrew Fleming - [LinkedIn Profile](https://www.linkedin.com/in/andrew-j-fleming-web-dev) - aflemi1@gmail.com

Cody Reeves - [LinkedIn Profile](https://www.linkedin.com/in/codingreeves/) - codingreeves.com/

<p align="right">(<a href="#top">back to top</a>)</p>

[project-screenshot]: client/src/images/screenshot.png
