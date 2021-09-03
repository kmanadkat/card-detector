## Card Detector - React Js & Tailwind CSS

[Preview on Netlify](https://card-detector.netlify.app/)

### 📜 Overview

This is a mini project built witb React Js and Tailwind CSS. It majorly demonstrates how we can control input fields leveraging Javascript and breaking down UI in chunk of components using React Js framework.

Based on the input card number, it detects type of card from following category:

1. Master Card
2. Visa
3. Maestro
4. RuPay

> The default card type is set to Visa. The card information shown in below snapshot is sample content - not real, do not waste your time 😄

Detection happens using the utility function `getCardType` in `/src/utils/cardTypes.js`. Behind the scenes it is Regex based detection.


<img src="./preview.png" />


### ⚙️ Installation & Setup

You should have `npm` and `node` installed in your machine, to confirm type `node --version` in terminal. Ideally, you should have node v14+. 

Below are steps to setup project in your system :

1. Clone the `main` branch of this repository
2. Open Terminal in project folder (containing `package.json` file)
3. Run `npm install` and wait for all dependencies to download
4. Finally run `npm start` this will automatically launch application in default browser at `http://localhost:3000`



### 🚧 Disclaimer

All the images/logos used in this project is for educational purpose only. All the logos of card types are from wikipedia under creative commons licence.
