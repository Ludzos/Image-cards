PROJECT NAME

***IMAGE-CARDS***

This application is a recreaction of a Figma design. An application that retrieves user data from an API (https://randomuser.me/api/?results=50.).
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
  I believe the reason for this is that the retrieved user data changes/updates during search.
* Listview for mobile is not responsive. Card clips out from the right side. Tried to solve this through different ways wihout any luck :( . 
* Maximize accessibility through HTML and WAI-ARIA (Not yet done)
* Unit testing for the major functionalities (Not yet done)

Bugs: 

*There's a square showing on the right side of the avatar (See attached picture below). This square appears on all cards, both grid and list designs are affected by this. Not sure if it's due to the design itself or if it only appears after you export the design.  

![random](https://user-images.githubusercontent.com/88338317/170104132-e1498403-c686-48d6-9cce-8c880bc5e45b.jpg)

