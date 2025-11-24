First Project — Body Color Change
Description

This is a simple JavaScript project that changes the background color of the webpage when a user clicks on one of the color buttons. It's a beginner-friendly project to learn DOM manipulation, event handling, and the use of the switch statement.

code : 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target.id);
    switch (e.target.class) {
      case 'grey':
        body.style.background = 'grey';
        break;

      case 'white':
        body.style.background = 'white';
        break;

      case 'blue':
        body.style.background = 'blue';
        break;

      case 'yellow':
        body.style.background = 'yellow';
        break;

      default:
        console.log('Unknown color');
    }
  });
});

```