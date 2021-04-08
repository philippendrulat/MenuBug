# MenuBug
Ionic Bug to show menu and Gestures interfere

To reproduce:
* `npm start`
* Go to http://localhost:4200
* open developer console
* The gesture is registered on the upper half of the screen
* If you try to swipe open the menu on the upper half of the screen, it won't open. The lower half works

Steps to recreate this repo:
* ionic start sidemenu
* remove the split pane around the menu in app.component.html
* Create the gesture in [src/app/folder/gesture.directive.ts]
* register the gesture in [src/app/folder/folder.mudule.ts]
* add the gesture to the div with the id container in [src/app/folder/folder.page.html]
* enlarge the div in folder.page.scss and stick to upper screen
