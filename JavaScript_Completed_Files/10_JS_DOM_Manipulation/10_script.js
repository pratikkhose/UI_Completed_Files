// Select the HTML elements
console.dir(document);

// title
console.log(document.title);

//head
console.log(document.head);

// body
console.log(document.body);

// links
console.log(document.links);

// Tag Selector
let nav1 = document.getElementsByTagName('nav');
console.log(nav1[0]);

// Id Selector
let nav2 = document.getElementById('abc');
console.log(nav2);

// Class Selector
let nav3 = document.getElementsByClassName('test');
console.log(nav3[0]);

// Query Selector
let nav4 = document.querySelector('.test a');
console.log(nav4);

// Change the Elements
let h2Tag = document.querySelector('h2');
console.log(h2Tag.innerText);
h2Tag.innerText = 'Good Evening';

// Change the Styles
h2Tag.style.backgroundColor = 'blue';
h2Tag.style.color = 'white';
h2Tag.style.textAlign = 'center';
h2Tag.style.padding = '10px';
h2Tag.style.boxShadow = '0 0 10px black';

// H1 Tag
let h1Tag = document.querySelector('h1');
h1Tag.innerHTML = `<span style="color: red">MEAN</span>
                   <span style="color: blue">Stack</span>`;

// Change the Attributes (Manipulate The Image)
let imageTag = document.querySelector('#my-image');
imageTag.style.width = '300px';
imageTag.style.margin = 'auto';
imageTag.style.display = 'block';
imageTag.style.borderRadius = '20px';
imageTag.style.boxShadow = '0 0 10px black';

// Get the attribute of a tag
console.log(imageTag.getAttribute('src'));

// Change the Attribute
imageTag.setAttribute('src','../img/image5.jpeg');

