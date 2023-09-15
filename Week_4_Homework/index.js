document.querySelector("title").innerHTML = "Kyle Ward's Initial Capstone";

//Building the DOM items
const body = document.querySelector("body");
const newHeader = document.createElement("header");
const newMain = document.createElement("main");
const newFooter = document.createElement("footer");
const newH1 = document.createElement("h1"); newH1.classList.add("introSpan");
const newH2 = document.createElement("h2");
const newH2_2 = document.createElement("h2");
const newNav = document.createElement("nav");
const fixedImage = document.createElement("div"); fixedImage.setAttribute("id","fixedImage");
const introDiv = document.createElement("div"); introDiv.classList.add("intro");
const introSpan = document.createElement("span"); introSpan.classList.add("introSpan");
const middleSection = document.createElement("div"); middleSection.classList.add("middleSection");
const col1 = document.createElement("div"); col1.classList.add("col1");
const col2 = document.createElement("div"); col2.classList.add("col2");
const orderedList1 = document.createElement("ol"); orderedList1.classList.add("list1");
const orderedList1_listItem1 = document.createElement("li");
const orderedList1_listItem2 = document.createElement("li");
const orderedList1_listItem3 = document.createElement("li");
const orderedList1_h2 = document.createElement("h2");
const middleSpan1 = document.createElement("div"); middleSpan1.classList.add("middleSpan1");
const middleSpan2 = document.createElement("div"); middleSpan2.classList.add("middleSpan2");
const testimonials = document.createElement("div"); testimonials.classList.add("testimonials");

//Body
body.prepend(newHeader,newMain,newFooter);

//Header
newHeader.prepend(newNav, fixedImage);
newNav.innerHTML = "PassLockr";

//Intro Div
newMain.prepend(introDiv);
introDiv.prepend(newH1, introSpan);
newH1.innerHTML = "Password management has never been so simple";
introSpan.innerHTML = "INSERT MARKETING IMAGE HERE";

//Middle Div
newMain.append(middleSection);
middleSection.prepend(col1,col2);
col1.prepend(middleSpan1,middleSpan2);
middleSpan1.append(newH2);
newH2.innerHTML = "Security streamlined, we do all the database management so you don't have to";
middleSpan2.append(newH2_2);
newH2_2.innerHTML = "Generate and save new complex passwords";
col2.prepend(orderedList1_h2,orderedList1);
orderedList1_h2.innerHTML = "Get started with 3 easy steps";
orderedList1.prepend(orderedList1_listItem1,orderedList1_listItem2,orderedList1_listItem3);
orderedList1_listItem1.innerHTML = "Create a new account and login";
orderedList1_listItem2.innerHTML = "Add all your platforms and respective passwords";
orderedList1_listItem3.innerHTML = "That's it!";

newMain.append(testimonials);



//Added items below to meet homework requirements
const newUL = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const p1 = document.createElement("p");
const a1 = document.createElement("a");
const a2 = document.createElement("a");

testimonials.prepend(newUL);
li1.prepend(a1);
li2.prepend(a2);
newUL.prepend(li1,li2);
a1.innerHTML = "Link 1 - Google"; a1.href = "https://www.google.com/"; a1.target="_blank";
a2.innerHTML = "Link 2 - Savvy Coders"; a2.href = "https://savvycoders.com/"; a2.target="_blank";
testimonials.append(p1);
p1.innerHTML = "Coding is fun, thank you Savvy Coders";
