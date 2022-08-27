# Calculator
![7° Front-End](https://user-images.githubusercontent.com/105513033/187050514-3a7bc4a3-7b9e-4490-99da-bc8406eec328.png)

<span>
  <img src="https://img.shields.io/badge/STATUS-FINISHED-success" alt="Status: Finished">
  <img src="https://img.shields.io/badge/RELEASE_DATA-AUGUST%202022-informational" alt="Release Data: August 2022">
  <img src="https://img.shields.io/badge/LICENCE-MIT-important" alt="Licence: MIT">
</span>

&nbsp;

## 📖 Table of contents

- [Overview](#overview)
  - [Details](#details)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

##  👀 Overview

### 🗒️ Details
> - The calculator works with the ```eval()``` function that can calculate strings.
> - The buttons can be accessed with their corresponding keyboard keys, the buttons that does not have their keys on custom keyboards can be accessed by the following keys:

> | **Button** | **Key** |
> |:---:|:---:|
> | CE | Z |
> | ⌫ | X |
> | x² | S |
> | √ | D |
> | ⁺ ∕ ₋ | A |
> | = | Enter |

&nbsp;

### 📷 Screenshot

#### 💻 Desktop - Laptop G (1440 X 886)
![Laptop G simulation screenshot](https://user-images.githubusercontent.com/105513033/187050518-ab0e49cd-01ce-4bce-8b3a-8ebb4f9e29f3.png)

#### 📱 Mobile - Moto G4 (360 X 640)
![Moto G4 simulation screenshot](https://user-images.githubusercontent.com/105513033/187050520-8d6ee88d-6289-4193-8060-0d5c28ad7576.png)

&nbsp;

### 🔗 Links

- Live Site URL: [Live Site by Vercel](https://calculator-git-master-eliveltonsilvacordeiro.vercel.app/)

&nbsp;

## ⌛ My process

### 🚧 Built with

- Flexbox
- Mobile-first workflow
- Sass syntax

&nbsp;

### 📝 What I learned

Get values from clicked buttons by **eventListener**, this knowledge would be a big help in the [Interactive Rating Component](https://github.com/EliveltonSilvaCordeiro/Interactive-Rating-Component) project.

```HTML
<!-- HTML -->

<div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
</div>
```

```JavaScript
// JavaScript

const container = document.getElementsByTagName('div')[0]

container.addEventListener('click', event => {
  if (event.target.matches('p')) {
    const button = event.target;
    console.log(button.textContent);
  }
})
```
&nbsp;

Recieve values from user's keyboard by eventListener

```HTML
<!-- HTML -->
<h1></h1>
```

```JavaScript
// JavaScript
document.addEventListener("keypress", event => {
    document.getElementsByTagName('h1')[0].innerText = event.key
})

```

&nbsp;

### 📈 Continued development

#### My plans are:

- Create a portifolio for myself

&nbsp;

## 👤 Author

- Github - [EliveltonSilvaCoredeiro](https://github.com/EliveltonSilvaCordeiro/)
