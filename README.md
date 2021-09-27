Live: https://brsyvz.github.io/etch-a-sketch/

## Contents:
1 - [About](#about)\
2 - [Game logic](#gl)

<img width="645" alt="Screenshot_90" src="https://user-images.githubusercontent.com/55483569/133145960-d7724c4b-5d47-44c4-937d-9889cfc89e1f.png">
<h3 id="about">About</h3>

This project is an Implementation of mechanical drawing toy called [Etch-A-Sketch](https://en.wikipedia.org/wiki/Etch_A_Sketch). 

- As a default we have 32x32 (32 row 32 column) grid on the container.
- When our mouse passes over on those grids, we will fill the grids depend on selected color.
- we can add more grids into the container (up to 80x80).
- we can set custom grid from 1 to 80.   for example: custom 8 grid means 8 row 8 column box.


<h3 id="gl">Game logic</h3>

- The "generateGrids" function is a key on this project. 
- The "generateGrids" function creates grid of square div elemenets inside the container depend on the row and colum number we provide.
- The "generateGrids" function takes two arguments, rows andolumns.


