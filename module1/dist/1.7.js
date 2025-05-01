"use strict";
{ // this second use for practice otherwise we can,t redeclear same function into other file 
    //learn spread operator
    var bros1 = ['sakib', 'racel', 'sabbir'];
    var bros2 = ['eyasin', 'nafiz'];
    bros1.push.apply(bros1, bros2);
}
