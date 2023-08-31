const reponse = await fetch("FishEyeData.json");
const FishEyeData = await reponse.json();
console.log(FishEyeData)

constructionOfHeader();

function constructionOfHeader() {
  let header = document.querySelector("header")
  let cont = document.createElement("div");

  var imagejs = document.createElement("img")
  imagejs.src = "./Fishoye.png"
  imagejs.setAttribute('class', 'size')
  cont.appendChild(imagejs)
  header.appendChild(cont)
}

// function constructionOfBody(body) {
     
// Récupère la chaîne de requête de l'URL parent
const queryString = window.location.search;
console.log(queryString.params)
// Utilisez une fonction pour extraire les paramètres de requête et les stocker dans un objet
function getQueryParams(queryString) {
  const params = {};
  const searchParams = new URLSearchParams(queryString);
 
  for (let param of searchParams.entries()) {
    const [key, value] = param;
    params[key] = value;
  }

  return params;
}

function getMediaByPhotographers(photographeId) {
 
  console.log(photographeId)
  const page = FishEyeData.media
  var data = page.filter(i => { console.log(i.photographerId)
  return i.photographerId == photographeId;
  })
  console.log(data)
  return data
}

// Appel de la fonction pour récupérer les paramètres de requête de l'URL parent
const queryParams = getQueryParams(queryString);

// Utilisation des paramètres récupérés
// console.log(queryParams.parametre);
// getMediaByPhotographers(queryParams.parametre)

function getPhotographById(photographeId) {
  console.log(photographeId)
  const page = FishEyeData.media
  var data = page.find(i => { console.log(i.photographerId)
  return i.photographerId == photographeId;
  })
  return data
}
let mediaPhotographes = getMediaByPhotographers(queryParams.parametre)


function genererPage(Page) {

  console.log('Page',Page)
  const dossiers = new Array("photographeId");
  for (let i = 0; i < Page.length; i++) {

    var article = Page[i];
    console.log('*****************')
    console.log(article)
    console.log('*****************')
  var mainElement = document.createElement("div");
  
  var imagephotographeElement = document.createElement("img");
  // var mainElement = document.createElement("div");
  
  // var videophotographeElement = document.createElement("video/mp4");
    if(typeof article.image !== "undefined"){
        imagephotographeElement.src = article.image;
        }
    else{
      // imagephotographeElement.src = article.video;
    }
      //  console.log('article.image',article.image)
      console.log(imagephotographeElement)
      imagephotographeElement.alt = "..."
      imagephotographeElement.setAttribute('class', 'dimension2')
      // console.log(videophotographeElement)
      // videophotographeElement.alt = "..."
      // videophotographeElement.setAttribute('type', 'video/mp4')
      // videophotographeElement.setAttribute('class', 'background-clip')

      var titlephotographeElement = document.createElement("h2");
      titlephotographeElement.innerText = article.title;

      var sectionphotographes = document.createElement("div");
      sectionphotographes.appendChild(imagephotographeElement);
      sectionphotographes.appendChild(titlephotographeElement);
      mainElement.setAttribute('class', 'flex-column')
      mainElement.appendChild(sectionphotographes);
      // mainElement.appendChild(videophotographeElement);
      document.body.appendChild(mainElement)
}
}
// Premier affichage de la page
genererPage(mediaPhotographes);
// }