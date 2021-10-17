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

#### Object Values

#### all values are object variables so they can be edited like a variable

##### x

_ObjName.x_ returns the x position of an object

##### y

_ObjName.y_ returns the y position of an object

##### width

_ObjName.width_ returns the width of an object

##### height

_ObjName.height returns the height of an object

##### color

_ObjName.color returns the color of an object

#### Collision of two objects

Inside the loop you should create an _"if"_ and in the if condition you will put _"ObjName.is.colliding(OtherObj)"_ and in the execution of the if put the action when the objects collide.

#### Drawing

##### Line

_SHOVEL.draw.line(x, y, x1, x2, "color", width)_

# Values

### Mouse

_SHOVEL.get.mouseX_ - returns the x mouse position

_SHOVEL.get.mouseY_ - returns the y mouse position
