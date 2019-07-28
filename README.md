Create a new repo in github
Clone the repo in desktop (git clone <>.git)
Copy all the folders inside this mew repo in desktop
run npm install gh-pages
Change homepage url,predeploy,deploy in package.json
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
 "homepage": "https://abhi020290.github.io/mytodos/",
Run npm run deploy
