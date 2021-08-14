// call() ||  apply() || bind() in javascrpit
var user = {
    name:'Hulk',
    age:18,
    getName : function( a ){
        console.log('user name is ' +this.name +" "+a);
    },
}

var user2 = {
    name:'Iron man'
}
//==============bind() method======================

let x = user.getName.bind(user2);
x("super_Hero");

//===============call() method=====================
user.getName.call(user2,'super_Hero');

//===============apply() method====================

user.getName.apply(user2,['super_Hero']);
