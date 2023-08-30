// import {FishEyeData} from "./data";
const reponse = await fetch("FishEyeData.json");
    const FishEyeData = await reponse.json();
console.log('data',FishEyeData.media)
constructionOfHeader();

function constructionOfHeader() {
  let titrePage = "Passer au contenu";

  let h3div = document.createElement("div")

  let h3 = document.createElement("h3")
  h3.innerText = titrePage
  h3.setAttribute('class', 'pass')
  h3div.setAttribute('class', 'upperdiv')
  h3div.appendChild(h3)
  //functionConstructionOfHeader
  let header = document.querySelector("header")
  header.appendChild(h3div)

  let cont = document.createElement("div");

  var imagejs = document.createElement("img")
  imagejs.src = "./Fishoye.png"
  imagejs.setAttribute('class', 'size')

  // let nav = document.createElement("div");

  // Create a new element
  var navmenu = document.createElement('div');

  // Assign an ID to the element
  navmenu.id = 'myElementId';
  // var navmenu = document.createElement("nav")
  navmenu.setAttribute('id', 'myElementId')

  let photographes = document.createElement("strong")

  photographes.innerHTML = "Nos photographes"
  photographes.setAttribute('class', 'couleur')

  function generertags(photographes) {
    var tags = [];
    photographes.forEach(photographe => {
      photographe.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
    })

    return tags
  }
  function genernermenu(tags, balise) {
    let ul = document.createElement("ul")
    tags.forEach(tag => {
      console.log(`#${tag}`)
      let li = document.createElement("li")
      li.setAttribute('class', 'border')
      li.innerHTML = `#${tag}`
      ul.appendChild(li)
    })
    // let navmenu = document.querySelector(".navset")
    balise.appendChild(ul)
    // let newli.innerHTML = li.slice(0,5);
  }

  var filters = document.getElementsByClassName("ul");


  function genererhead(photographers) {

    console.log(photographers);
    //     let filterList;
    let dataTags = [];
    const filters = document.querySelectorAll('.border')
    console.log(filters)
    if (filters) {
      filters.forEach(item => {
        console.log(item);
        item.addEventListener("click", function (event) {
          item.style.backgroundColor = "red";
          const element = item.innerHTML.slice(1)
          // console.log('choix du tag',data);
          console.log('choix du tag', element);
          console.log('choix du tag', dataTags.includes(element));
          if (dataTags.includes(element)) {
            const index = dataTags.indexOf(element);
            dataTags.splice(index, 1)
            console.log(dataTags)
            item.style.backgroundColor = "white";
          } else {
            dataTags.push(element);
            console.log(dataTags)
          }
          genererfilters(dataTags)
        })
      })
    }
  }
  function genererfilters(dataTags) {

    let photos = [];
    FishEyeData.photographers.forEach(item => {
      if (dataTags.every(element => item.tags.includes(element))) {
        photos.push(item)
      }
    })
    document.querySelector('main').innerHTML = '';
    generermain(photos);

  }

  genernermenu(generertags(FishEyeData.photographers), navmenu)

  cont.appendChild(imagejs);
  cont.appendChild(navmenu);
  cont.appendChild(photographes);

  cont.setAttribute('class', 'container')

  header.appendChild(cont)
  genererhead(FishEyeData.photographers)

  function generermain(main) {
    // Récupération de l'élément du DOM qui accueillera les fiches
    
    const dossiers = new Array("Mimi", "Ellie Rose", "Tracy", "Nabeel", "Rhode", "Marcel");
    for (let i = 0; i < main.length; i++) {

      var article = main[i];
      console.log(article)
      // Création d’une balise dédiée à une pièce automobile
      var mainElement = document.createElement("a");
      mainElement.id = 'myElementId';
      mainElement.setAttribute('id','myElementId')
      mainElement.setAttribute('href', `inel.html?parametre=${article.id}`) 
      // Création des bales 
      var portraitphotographeElement = document.createElement("img");
      // var portrait = article.portrait
      portraitphotographeElement.src = article.portrait;
      
      // portraitphotographeElement.href = "lien.js"
      //  "./FishEye_Photos/Sample Photos/" + dossiers[i] + "/" + portrait
      console.log(portraitphotographeElement)
      portraitphotographeElement.alt = "..."
      portraitphotographeElement.setAttribute('class', 'dimension')
      // function goToPage() {
      // //   window.location.href = 'Index.html';
      // // }
      // // goToPage(portraitphotographeElement)

      // console.log(FishEyeData.photographers[0].id)
      var namephotographeElement = document.createElement("h2");
      namephotographeElement.innerText = article.name;

      var sectionphotographes = document.createElement("div");
      sectionphotographes.appendChild(portraitphotographeElement);
      sectionphotographes.appendChild(namephotographeElement);
      namephotographeElement.setAttribute('class', 'red')
      sectionphotographes.setAttribute('class', 'blur')

      let description = document.createElement("div")
      var taglinephotographeElement = document.createElement("p");
      taglinephotographeElement.innerText = article.tagline;
      var countryphotographeElement = document.createElement("p");
      countryphotographeElement.innerText = `${article.city}, ${article.country}`;
      countryphotographeElement.setAttribute('class', 'blure')
      var pricephotographeElement = document.createElement("p");
      pricephotographeElement.innerText = `${article.price}€/jour`;
      pricephotographeElement.setAttribute('class', 'margin1')
      description.appendChild(countryphotographeElement)
      description.appendChild(taglinephotographeElement)
      description.setAttribute('class', 'margin')

      // On rattache l’image à pieceElement (la balise article)
      mainElement.appendChild(sectionphotographes);
      //Ajout des éléments au DOM pour l'exercice
      mainElement.appendChild(description)
      sectionFiches.appendChild(mainElement)

      let taglinephotographe = document.createElement("div");
      taglinephotographe.appendChild(pricephotographeElement)
      taglinephotographe.setAttribute('class', 'filterset')
      mainElement.appendChild(taglinephotographe)
      genernermenu(article.tags, taglinephotographe)

    }
    sectionFiches.setAttribute('class', 'flex-wrap')
    document.querySelector("body").appendChild(sectionFiches)

  }

  var sectionFiches = document.createElement("main");
  // Premier affichage de la page
  generermain(FishEyeData.photographers);
}