import math
pi = math.pi
def circle(radius):
     return pi * radius**2
 
def cube(side):
     return side**3
 
def cylinder(radius, height):
     return 2*pi*radius + 2*pi*height
 
def sphere(radius):
     return 2*pi*(radius**2)

def triangle(base,height):
    return (base*height)/2
 
print(triangle(5,4))
