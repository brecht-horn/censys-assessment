
# Censys Technical Assessment

## Getting Started

- First, Fork or clone the project.

- Next, install dependencies using "npm" (or equivalent based on operating system):

```shell
npm i
```

- Then, run in the root directory:

```shell
npm run dev
```

- Finally, open your browser and navigate to:

```shell
http://localhost:5173
```

## How To Use

Once you have opened the page in your browser, you can click inside the search field at the top (next to the Censys logo), and enter anything you'd like to search for before pressing return or clicking the search button.

Additionally, you may scroll to the bottom of the page and click the "next" link to load next page of results, or the "prev" link to load the previous page.




## Testing Instructions

In order to test the application, from the root directory, run:

```shell
npm run test
```

## General Approach
I created this app using Javascript, React and Vite, to leverage their readability, testability, and performance capabilities. I'm personally a big fan of how react abstracts way my interaction with the DOM and creates easy state management with 'UseState'.

What I would improve given more time --
- Incorporate the .env file for added security. It gave me some problems but rather than spend too much time on it during the assessment, I simply moved on.
- Convert the codebase to TypeScript for the added type safety.
- Return more information in the results such as location, etc, and add filtering options to more closely mirror the actual Censys search engine page.
- Add more extensive testing - I'd love to fully test the codebase to feel very confident with it
- Deploy it

Thank you very much for the opportunity! If you have any questions, please don't hesitate to email me at <brecht.horn@mac.com>

### Created by

Brecht Horn 
[GitHub](https://github.com/brecht-horn) | [LinkedIn](https://www.linkedin.com/in/brecht-horn-a9b839213/)
