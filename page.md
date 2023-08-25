# Welcome to FLL team #3249's Python tutorial!
We can't wait to show you how to program your SPIKE Prime in Python! Before you get started, you need:  
  
- A SPIKE Prime robot in a configuration with two wheels.  
- The SPIKE Legacy app.  
- A computer with Bluetooth support or a micro-USB to USB-A cable.  
## Lesson 1
### Getting started
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
## Lesson 2
### Moving your robot
To control the motors on your robot, you will need to first figure out which motors plug in to which ports on your hub. If you move the wheels with your hands, you can observe the port indicators in the top left of the code editor to figure it out. For example, when I turn the left track on my tank robot the value under the indicator for port E changes. This means that port E is connected to my left motor, and I repeated the same for the right motor, finding that it is connected to port F. To go forward, we need the left and right motors to run in unison, so we will need to create a `MotorPair`. To create the `MotorPair` for ports E and F as the left and right motors, we can write the statement `hub.port.E.motor.pair(hub.port.F.motor)`. Then, if we want to use this `MotorPair` to do things, we will need to assign it to a variable. I will be calling my variable `motors`. You should have this so far in your code editor:
```
import hub
print(hub.status())
motors = hub.port.E.motor.pair(hub.port.F.motor)
```
The easiest way to use your `MotorPair` is to have the motors go forward for a given amount of time. This is done with the `run_for_time` function. Now you can write `motors.run_for_time(10000)` to run your motors for 10,000 milliseconds or 10 seconds. At this point you can test the code you have written by running it on the robot. It should look like this right here:
```
import hub
print(hub.status())
motors = hub.port.E.motor.pair(hub.port.F.motor)
motors.run_for_time(10000)
```
If your robot is spinning out of control now, you're not alone. My robot looks like this:
<iframe src="https://drive.google.com/file/d/1gXJN349A7SKQn3RxHQGo-DhUwIff3_Xv/preview"></iframe>
If you watched the video, you saw how my robot wasn't going straight, it was turning to the left. This is because the left motor is opposite of the right motor, causing it to spin in the opposite direction. We can fix this in our code by telling the robot to move the left motor at a negative speed. To do this, we will change our statement to `motors.run_for_time(10000,-75,75)`. Now that that problem is fixed, we can move on to something important: the ability to multiple different movements. First we need to import the `time` module to be able to keep track of how long the motors have been running for. To do this, append `, time` to your existing import statement. Once your `run_for_time` statement starts, we can wait for the 10,000 milliseconds or 10 seconds to finish. To do this we will add `time.sleep_ms(10000)`. After this we can proceed to do a different task, like moving backwards, To move backwards we can add a statement similar to our `run_for_time` one but with inverted speeds. Now your code should look like this:
```
import hub, time
print(hub.status())
motors = hub.port.E.motor.pair(hub.port.F.motor)
motors.run_for_time(10000,-75,75)
time.sleep_ms(10000)
motors.run_for_time(10000,75,-75)
```
Feel free to try out your code at this point. Here is a video of mine:
<iframe src="https://drive.google.com/file/d/1qjULLO2J4O2kE_qj-iAUg90j2u5qoqkI/preview"></iframe>