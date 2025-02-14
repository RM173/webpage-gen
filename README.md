# 1. Creating a new webpage

To create a new webpage with the URL `my_domain/my_webpage_name`, create a new `my_webpage_name` object in `config.js` in the same format as the other objects in that file. 
Add the corresponding images to the `public` folder. Commit to GitHub, and the webpage will automatically be deployed.

---

# 2. Creating the website initially

1. **Buy a domain name.**
2. Update the following files to reflect your domain name and logo:
   - `public/index.html`
   - `package.json`
   - `package-lock.json`
   - `public/manifest.json`
   - `public/favicon.ico`
3. Deploy as a web app on DigitalOcean (or any other cloud provider), and make sure to enable auto-deployments when GitHub changes.
4. Add your environment variables (for `src/api/firebase.js`) to DigitalOcean. This is used to send user sign-ups.

---

# 3. Viewing sign ups in Firebase

- Log in to the Firebase console to see the email addresses of users who signed up for the beta of a given webpage.
- Make sure to add your Firebase details (those specified in `src/api/firebase.js`) to the environment variables on DigitalOcean. If you don’t do this, the website will still work, but the user emails won’t be stored anywhere.

# 4. Testing the website on your local computer
- Run `npm install` to install the dependencies.
- Run `npm start` to start the development server.
- Try the different webpage URL endings as defined in config.js (the default goes to /myaipets)