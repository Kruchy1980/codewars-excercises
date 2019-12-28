// Be Concise I - The Ternary Operator
// Here it loocks a little better but if you copy that code make sure you eliminate all bwhite spaces except these ones in strings

describeAge = (age) => { return age < 13 ? "You're a(n) kid" : age < 18 ? "You're a(n) teenager" : age < 65 ? "You're a(n) adult" : "You're a(n) elderly" }


//Another solutions much shorter but not much readable as well

describeAge=a=>`You're a(n) ${a<13?"kid":a<18?"teenager":a<65?"adult":"elderly"}`;