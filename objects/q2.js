/*An object's keys are strings, but the values can be any type, including other objects.*/

1 - //invalid
'1' //valid
undefined - //invalid
'hello world' //valid
true //invalid
'true' //valid

/*Solution:
All the listed values are valid keys. Note, though, that JavaScript coerces the non-string key values to strings.
Given the listed values, 1 and '1' represent the same key, as do true and 'true'. This equivalency will bite you at some point; it's inevitable, so be ready.*/
