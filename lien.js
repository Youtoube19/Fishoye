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

// Récupère la chaîne de requête de l'URL parent
const queryString = window.location.search;

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

// Appel de la fonction pour récupérer les paramètres de requête de l'URL parent
const queryParams = getQueryParams(queryString);

// Utilisation des paramètres récupérés
console.log(queryParams);
