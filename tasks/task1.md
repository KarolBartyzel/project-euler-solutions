*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.*
*Find the sum of all the multiples of 3 or 5 below 1000.*

**It can be done in multiple ways. My solution bases on 3 assumptions:**
1. Sum of all multiples of 3 can be found using sum of arithmetic progression (3, 6, ...999).
2. Sum of all multiples of 5 can be found using sum of arithmetic progression (5, 10, ...995).
3. Sum of all multiples of 3 and 5 at the same time can be found using sum of arithmetic progression (15, 30, ...990).

## So the result of our task is: 1. + 2. - 3.