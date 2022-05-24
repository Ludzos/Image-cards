PROJECT NAME

***IMAGE-CARDS***

This application is a recreaction of a Figma design. An application that retrives user data from an API (https://randomuser.me/api/?results=50.).
Display's image cards for every user with name, avatar, city.

***************************************************************

INSTALLATION & SETUP INSTRUCTIONS 

App was used with create-react-app boilerplate. 

Installation:

Clone down this repository. You will need `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`http://localhost:3000` 

***************************************************************

PROJECT STATUS

Implemented features & functionality: 

(Completed)
* Switch between grid and list view
* Sorting by name (ascending and descending) 
* lazy loading of the cards
* Error states
* Loader icon while loading
* Infinite scroll

(Uncompleted)
* Search by name works partially. Sometimes it finds the user and filters out the rest and other times it wont.
  I believe it's because user data changes during search.
* Listview for mobile is not responsive. Card clips out from the right side. (Tried to solve through different ways wihout any luck)
* Maximize accessibility through HTML and WAI-ARIA (Not yet done)
* Unit testing for the major functionalities (Not yet done)

Additional bugs: 
*There's a square showing on the right side of the avatar. This square appears both for the grid and list cards. Not sure if it has to do with the design itself or-
 if it only appears after you download the SVG's.  
