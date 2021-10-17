# ShovelEngine

A Simple 2D Open Source Game Engine for Computers and Mobiles.

# How Use

Download the source files and go to _"assets/game.js"_. Here you have the game file.

In Shovel you will have a loop script, you will draw and configure your objects in there.

# Game Configuration

### Game Name

_SHOVEL.game.name("Game Name")_

### Background Color

_SHOVEL.game.background("color in rgb, hex and etc")_

# Object

Every object you are going to create has to be outside the loop, inside you put the script to draw it on the screen

#### Creating a new object

_var ObjName = new SHOVEL.object(x, y, width, height, "color")_

#### Drawing the objects

_ObjName.setup()_

#### Collision of two objects

Inside the loop you should create an _"if"_ and in the if condition you will put _"ObjName.is.colliding(OtherObj)"_ and in the execution of the if put the action when the objects collide.

#### Drawing

##### Line

_SHOVEL.draw.line(x, y, x1, x2, "color", width)_

# Values

### Mouse

_SHOVEL.get.mouseX_  - eturn the mouse x position

_SHOVEL.get.mouseY_ - return the mouse y position
