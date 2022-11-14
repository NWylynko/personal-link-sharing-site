
# Personal Link Sharing Site

A simple, single page website to display information, links, projects, etc.

Feel free to fork it to deploy your own version. It uses the new React Server Components to fetch data thanks to Next.js 13. All styling is just simple css modules. The Features can be removed or swapped out to suit your needs.

Things you can edit to make this your own:
- The `config.ts` file, this stores a lot of the stuff on the site, this is a great place to start to put in your own links, enable / disable features and more.
- Swap out the `image`, stored in the public folder, swap it out for a photo of yourself or any profile pic you want. (and the favicon)
- Edit the `CSS`, stored in the css files is all the styling for the site, make it your own by giving it a make over.
- Change the font, using the new `@next/fonts` module, you can use any google font or bring in your own one.

## Features

- ### Github Pinned Repositories
This pulls in the (up to) six pinned repositories from your github and displays them on the page

- ### FormSpree
Allow people to send you an email without giving out your email, sign up on the formspree website and put your token in.

- ### Wakatime statistics
Want to show off how dedicated you are, Wakatime tracks how long (and on what) you spend you time coding, show it off.

- ### Vercel Analytics
Simple, free, respectful analytics, we want to know how many people are looking at our site right.
