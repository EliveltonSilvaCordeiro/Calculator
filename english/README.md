# Calculator

<span>
  <img src="https://img.shields.io/badge/STATUS-FINISHED-success" alt="Status: Finished">
  <img src="https://img.shields.io/badge/RELEASE_DATA-AUGUST%202022-informational" alt="Release Data: August 2022">
  <img src="https://img.shields.io/badge/LICENCE-MIT-important" alt="Licence: MIT">
</span>

&nbsp;

## 📖 Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

##  👀 Overview

### 📷 Screenshot

#### 💻 Desktop - Laptop G (1440 X 886)


#### 📱 Mobile - Moto G4 (360 X 640)


&nbsp;

### 🔗 Links

- Live Site URL: 

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
