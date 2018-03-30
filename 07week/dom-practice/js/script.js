'use strict';

window.onload = function() {
// Counting the number of lists.
    var list = document.getElementsByTagName('ul');
    var message = "This page has " + list[0].children.length + " list items!";
    alert(message);

// Adding an h2 under the "<h1> Shopping Cart".
    var newh2 = document.createElement('h2');
    newh2.innerHTML = "You have " + list[0].children.length + " items in your shopping cart";
    document.getElementsByTagName('h1')[0].appendChild(newh2);

  // Adding items to the list
    var newLi = document.createElement('li');

    var text = document.createElement('input');
    text.setAttribute('id', 'input');
    text.setAttribute("type", "text");
    text.setAttribute("value", " ");
    list[0].appendChild(text);

    var btn = document.createElement('button');
    btn.setAttribute('id', 'button');
    var btnText = document.createTextNode("Add");
    btn.appendChild(btnText);
    list[0].appendChild(btn);

    var rmvBtn = document.createElement('button');
    rmvBtn.setAttribute('id', 'remove');
    var rmvTxt = document.createTextNode("Remove");
    rmvBtn.appendChild(rmvTxt);
    list[0].appendChild(rmvBtn);


    document.getElementById("button").addEventListener("click", addItem);

    document.getElementById("remove").addEventListener("click", rmvItem);

    function addItem() {
      newLi.setAttribute('id', input.value);
      newLi.appendChild(document.createTextNode(input.value));
      list[0].prepend(newLi);
    }

    function rmvItem() {
      var item =  document.getElementById(input.value);
      list[0].removeChild(item);
    }
};

// 1. Alert the user to how many list items there are on the page. !!! \m/ !!!
// 2. Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript. \m/
// 3. Create the ability to add more items to the list using JavaScript.
// 4. Create the ability to remove an item from the shopping cart using javascript.
