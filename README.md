[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# To do list
1. Add wireframe and user stories to this read me
2. include an explanation of the app and how to work it
3. add link to deployed application
4. user can sign in, sign up and sign out
5. start tic tac toe game
6. player plays against themselves, revolve between x and o
7. user can only select available spaces in the game
8. user is notified of win or tie (game results)
9. user cant add to the board when the game is over
10. user can play again when the game is over
11. API requests for sign in, sign up, sign out, post games, and patch games id
12. display message after successful or failed sign up, in, and out
13. do not rely on refreshing the page for any functionality. do not delete or start over. 


## Structure

### App

Developers should store JavaScript files in [`app`](app).
The "manifest" or entry-point is
[`app/app.js`](app/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

### Config

Developers should set `apiUrls.production` and `apiUrls.development` in
[`app/config.js`](app/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

### Styles

Developers should store styles in [`app/styles`](app/styles) and load them
from [`app/styles/index.scss`](app/styles/index.scss). Bootstrap version 3 is
included in this template.

### Forms and Using `getFormFields`

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

### Deployment

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys main branch


## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
