# Animted React Native Drawer




https://user-images.githubusercontent.com/48880552/216325719-b874864d-fdda-4ddd-8e30-88fef508dadc.mp4

This project is made on <b>React Native</b>, and I am using typescript in it.


This implements an animated drawer, the drawer animates when clicked on the menu. The navigation in total has 4 screens.


The packages responsible for integrating the navigation within the app are:
```bash
@react-navigation/drawer
@react-navigation/native
@react-navigation/native-stack
@react-navigation/stack
```


For the animation part, I have used the built in "Animated" library of React-Native

On clicking the menu, its spinning based on the interpolated ranges. Then it spins based on the values of the ranges and the duration that is given.


All of the main code can be found within `App.tsx` file <br>
<b>Assets</b> and <b>Fonts</b> are placed in the `./assets/` folder <br>
Rest of the components are placed in the `./Components/` folder
