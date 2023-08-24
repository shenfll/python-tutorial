# Welcome to my Python tutorial!
I can't wait to show you how to program your SPIKE Prime in Python! Before you get started, you need:  
  
- A SPIKE Prime robot in a configuration with two wheels.  
- The SPIKE Legacy app.  
- A computer with Bluetooth support or a micro-USB to USB-A cable.  
## Lesson 1
To start off you will need to create a new Python project in the SPIKE Legacy app. It doesn't matter what you name it, but if you are lazy you can accept the default name and go to the code editor. By default the code editor should look like this.
```
from spike import PrimeHub, LightMatrix, Button, StatusLight, ForceSensor, MotionSensor, Speaker, ColorSensor, App, DistanceSensor, Motor, MotorPair
from spike.control import wait_for_seconds, wait_until, Timer
from math import *

hub = PrimeHub()

hub.light_matrix.show_image('HAPPY')
```
The `import` statements in the Python code import modules that allow you to control the robot from your code. In the code you can see that the `PrimeHub` module is being imported. However, in this tutorial we will be using a different module called `hub`. This tutorial will help you learn the basics of using this module, but if you want to learn more, you can find more information about the hub module [here](https://lego.github.io/MINDSTORMS-Robot-Inventor-hub-API/). Because we aren't using the `PrimeHub` module you will need to delete all of code in the code editor and replace it with the statement `import hub` to import the `hub` module. Next we can start doing things with the `hub` module by writing the statement `print(hub.status())`. This will display the robot's status in the console at the bottom of the screen. Now you're code editor should look like this:
```
import hub
print(hub.status())
```
Now you can test your code by running it on your robot. Press the big yellow play button in the bottom right corner of the code editor to start your program. You should see something like the following in the console at the bottom of the screen.
```
{'gyroscope': (0, 0, 0), 'port': {'C': [], 'D': [], 'B': [0, 0, -64, 0], 'E': [0, 0, -156, 0], 'A': [], 'F': [0, 0, 23, 0]}, 'accelerometer': (21, 23, 961), 'yaw_pitch_roll': (0, 1, -1), 'position': (0, 1, -1), 'display': '00000:00000:00000:00000:00000'}
```