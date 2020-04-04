To get started:

1. clone this repository
2. `yarn install`
3. `gulp dev`
4. `gulp ship`

Edit files in the /src folder! The `gulp dev` command will build those files and output them to the /dis folder. Gulp watches for file changes, and anytime a /src file is changed it is build and output to /dis.
The `gulp ship` command build files and outputs to the /dis folder without launching watcher.

In your HelpDocs console, upload all of the `.hbs` files via the Templates page. Upload `index.css` and `scripts.js` via the Code page.