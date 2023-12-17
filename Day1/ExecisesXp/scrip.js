// EXE1
// 1-2
// const div=document.getElementById("container")
// console.log(div)
// const body=document.body
// const listName=document.querySelector(".list").children[1].textContent="Richard"
// console.log(listName);

// 3
// const delName=document.getElementsByTagName("li")[3].remove()
// console.log(delName);

// 4



// EXE2
// 1-2-3-4
// const div1=document.querySelector("div")
// div1.style.backgroundColor="lightblue"
// div1.style.padding="20px"
// const myLi=document.querySelector("ul").children[0];
// const pete=document.querySelector("ul").children[1]

// console.log(myLi)
// myLi.style.display="none"
// pete.style.border="3px solid lightblue"
// body=document.body
// body.style.fontSize="x-large"

// EXE3
// 1-2
// const myNav=document.querySelector("div")
// myNav.setAttribute("id","socialNetworkNavigation")
// console.log(myNav);
// 3
// const myul=document.querySelector("ul")
// const newLi=document.createElement("li")
// newLi.innerHTML=`<a href="#">back</a>`
// myul.append()
// console.log("newLi:",newLi);
// const newText=document.createTextNode("Logout")
// console.log("logout",newText);

// EXE4

const books = [
    {
      title: "Harry Potter 1",
      author: "JK ROWLING",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
      alreadyRead: true,
    },
    {
      title: "Harry Potter 2",
      author: "JK ROWLING",
      image: "https://prodimage.images-bn.com/pimages/9780545139700_p0_v5_s1200x630.jpg",
      alreadyRead: false,
    },
  ];
  
  const container = document.querySelector(".listBooks");
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const thTitle = document.createElement("th");
  const thAuthor = document.createElement("th");
  const thimage = document.createElement("th");
  thTitle.textContent = "Title";
  thAuthor.textContent = "Author";
  thimage.textContent = "Img";
  table.style.border = "1px solid";
  container.append(table);
  table.append(headerRow);
  headerRow.append(thTitle, thAuthor, thimage);
  
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdImage = document.createElement("td");
    if (books[i].alreadyRead) {
      tdAuthor.style.color = "red";
      tdTitle.style.color = "red";
    }
    tdTitle.textContent = books[i].title;
    tdAuthor.textContent = books[i].author;
    tdImage.innerHTML = `<img src='${books[i].image}' width="100px"/>`;
    table.append(tr);
    tr.append(tdTitle, tdAuthor, tdImage);
  }