// Name: Anastasiya Aleksandrova
//File Name: main.js
//Date: 11/2/2021

//function that calls,uses, and displays string objects/methods
document.addEventListener("DOMContentLoaded", function() {
    let my_name = "Anastasiya Pickles";
    let add_to_div1 = document.getElementById("firstElement"),
        letter = my_name.length - 7,
        lname1 = my_name.charAt(letter);
    add_to_div1.innerHTML = "My last name does not starts with a " + lname1 + ".";
    let lname2 = my_name.slice(11,18),
        add_to_div2 = document.getElementById("secondElement");
    add_to_div2.innerHTML = "My last name is not " + lname2 + ".";
    let rpc = "Aleksandrova",
        new_lname = my_name.replace("Pickles", "Aleksandrova"),
        add_to_div3 = document.getElementById("thirdElement");
    add_to_div3.innerHTML = "My last name is " + new_lname + ".";
});


//set it function for cookies Try This
 function set_it() {
    var getName = prompt("Enter your name: ");
 var saveName ="Welcome= " + getName + "&";
   var expires = new Date("Jan 1, 2022");
   var expireDate= "expires=" + expires.toGMTString();
   saveName += expireDate;
   var saveName = escape(saveName);
   document.cookie = saveName;
}
//event listener that calls set it
document.addEventListener("onload", set_it);
//cookies read it function that gets called when window loads
 window.onload = function read_it() {
  var wCookie = document.cookie, 
      newCookie = unescape(wCookie),
      values = newCookie.split("&"),
      fValue = values[0],
      sValue = values[1],
      theName = fValue.split("=");
  let greeting = document.getElementById('greet');
  greeting.innerHTML = theName + "!";
};
//function that is called when DOM content loads, writes to index and uses window properties
document.addEventListener("DOMContentLoaded", function() {
    window.name = "Project 7";
    property = document.getElementById("windowProperty");
    property.innerHTML += "The window name property can assign and hold the name of a window. For example, the name of this window has been assigned " + window.name + ". ";
    property.innerHTML += "Another window property is the window length property which holds the number of frames in a window. The number of frames of this window is " + window.length + ".";
});
//function that is called, writes to index an explaination of window methods, and uses a window method.
document.addEventListener("DOMContentLoaded", function() {
    methods = document.getElementById("windowMethod");
    methods.innerHTML += "The prompt() method of the window object pops up a message that asks the viewer to enter data into the prompt dialog. An example of the prompt() method is the prompt message that came up when the website is first opened, asking the user to enter their name. Another property of the window object is the addEventListener() method that is used on the string object function, the set_it function, and the window object functions. The print() method is also a window method that allows the viewer to print the current window. <br><br> An example is below:<br><br>";
    methods.innerHTML += '<form> <input type="button" value="Print Page" onclick="print();"></form>';
});
//checks if cookie exist; if it does then read_it is called
if (document.cookie) {
    read_it();
}//cookie does not exist; set_it is called followed by read_it once cookie is created
else {
    set_it();
    read_it();
}









