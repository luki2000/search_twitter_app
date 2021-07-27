# Basic search Twitter app 

Basic search Twitter app commbines frontend (Angular) with a backend web api service (python/flask/tweepy) to search for tweets and group them in most popular hashtags.
We search ten most popular hashtags out of 250 tweets but results may vary depending on the search term.


## How to run the application

  1.  Clone the project
  2.  Ensure that python, node/npm are all installed
  4.  Open a terminal like CMD or bash
  3.  Navigate to backend directory with your favourite command line and install dependencies via the comand:
        `pip install -r requirements.txt`
  4.  Run the script main.py script with the command:
        `python main.py`
  5.  Server should be up and running
  6.  Open a second terminal and navigate to frontend/twitter-clone directory where the package.json file resides
  7.  To install dependencies run the command:
        `npm install`
  8.  Now run `npm start`
  9.  After a short period of time you should be able to go to your browser and type out in the url bar 'localhost:4200'
  10. Also you can run test with `npm test`
  
  
## How to use
  
  1. Simply enter a search term in the input text located top right and watch the magic unfold.  
