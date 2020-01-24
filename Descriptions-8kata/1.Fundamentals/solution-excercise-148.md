# Total pressure calculation

Given the moleculer mass of two molecules ( M1 and M2 ), their masses present ( m1 and m2 ) in a vessel of volume ( V ) at a specific temperature ( T ). Find the total pressure exerted by the molecules ( Ptotal ) .

input
Six values :

m1
m2
M1
M2
V
T
output
One value :

Ptotal
notes
Units for each of the following are given as under :

m1 = gram
m2 = gram
M1 = gram.mole-1
M2 = gram.mole-1
V = dm3
T = Celsius
Ptotal = atmpspheric pressure (atm)
Remember : Temperature is given in Celsius while SI unit is Kelvin (K)

0 Celsius = 273.15Kelvin

The gas constant (R) has value of 0.082dm3.atm.K-1.mol-1

### Solution

const solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {

##### Pretty complicated pattern but not any other javascript methodes needed.

    // your code goes here
    return ((((givenMass1 _ 0.001/molarMass1 + givenMass2 _ 0.001/molarMass2)_0.082)_(temp + 273.15))/volume)\*1000;

}
