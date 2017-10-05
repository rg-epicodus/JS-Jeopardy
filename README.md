# JS Team Project - Jeopardy Web Application

  Jeopardy Web Application. This is a project to recreate the game show 'Jeopardy' in Javascript.  Please let us know if you have any hints or ideas for addition via the [Contributing](#contributing) area below.  Thank you.


Table of contents
=================

  * [Table of contents](#table-of-contents)
  * [Project Info](#project-info)
    * [Documentation](#documentation)
  * [Installation](#installation)
  * [Specifications](#specifications)
  * [Known Bugs](#known-bugs)
  * [Contributing](#contributing)
  * [License](#license)

### Project Info

  Repository for information about the project


### Documentation

  Collaboration workflow will follow this method:
  ![ScreenShot](/img/scrumProcess.jpg)




## Installation

* Clone the repo from git hub using:
````
$ git clone https://github.com/rg-epicodus/JS-Jeopardy.git
````
* Open the project in your favorite editor, this was created in Atom.
* Experiment!

_To use this project you will need the following installed properly on your computer._
* [Node.js](https://nodejs.org/en/)
* Once installed, you will need to install gulp and bower:

````
$ npm install gulp
$ npm install Bower
````

_This API doesn't require an API key, but to find the documentation on how it works visit [jService](http://jservice.io/)_

* To store the data, including questions and answers, you will need to create a FireBase account and project. [FireBase](https://firebase.google.com/)
* Copy your the 'key' that is provided into a file that you create in the project called .env.
* In this file write:
````
 var config = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    projectId: "xxxx",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

````
* Add to the .js file that will be used.
````
firebase.initializeApp(config);
````
* Make sure to rebuild the file after making any changes to the js files, using:
````
$ gulp build
````
 or by using:
````
$ gulp serve
````
* Open in your favorite browser, if you just use gulp build, otherwise it will be launched by gulp serve.


## Specifications

| Behavior      | Example Input         | Example Output        |
| ------------- | ------------- | ------------- |
| The project will pull questions/answers/categories from an API  | Though those candy may be crushed, our holiday spirits are not | CandyCanes |
| The user will be able to input the answer to a question | Though those candy may be crushed, our holiday spirits are not | CandyCanes |
| The application will keep track of the users score | Score: 0 | Score: 200 |

## Known Bugs

  If you locate a bug, please forward to

* "Stephanie Mayer" <smayer0926@gmail.com>
* "Rich Garrick" <richg341@gmail.com>
* "Trevor Gill" <trevor.gill@gmail.com>
* "Shyamal Punekar" <shyamal.Punekar@gmail.com>
* "Kimberly Lu" <kimlu4@comcast.net>

## Contributing

If you would like to contribute to the project repository please do the following:

1. Fork this project.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
6. Some examples of API calls for project:
  *  http://jservice.io/api/random for random question
  *  http://jservice.io/api/categories random category
  *  http://jservice.io/api/clues random 100 clues
  *  http://jservice.io/api/categories?count=100 displays 100 categories
  *  http://jservice.io/api/category?id=306 displays clues from potpourri
  *  http://jservice.io/api/category?id=18416 last category id
  *  http://jservice.io/api/categories?count=6&offset=4500 6 random categories offset by a potential random number
  *  http://jservice.io/api/clues?category=500 clues from a random category
  *  http://jservice.io/api/clues?category=306&value=200&max_date=2002-01-01T12:00:00.000Z clues from cat 306 with value 200 and air date of 2002 or later

## License
The MIT License (MIT)
Copyright 2017 Rich Garrick, Stephanie Mayer, Trevor Gill, Shyamal Punekar, Kimberly Champ

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
