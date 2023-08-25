const reponse = await fetch("FishEyeData.json");
const FishEyeData = await reponse.json();
console.log(FishEyeData)
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
  let data = [];
  const  filters = document.querySelectorAll('.border')
    if (filters) {
      filters.forEach(item => {
        console.log(item);
        item.addEventListener("click", function (event) {
          item.style.backgroundColor = "red";

          const element = item.innerHTML.slice(1)
          // console.log('choix du tag',data);
          console.log('choix du tag',element);
          console.log('choix du tag',data.includes(element));
          if(data.includes(element)){
            const index = data.indexOf(element);
            data.splice(index,1)
            console.log(data)
            item.style.backgroundColor = "white";
          }else{
            data.push(element);
            console.log(data)
          }
          
        })
      })
    }

    function filtrerTags() {
      // Récupérer la liste des tags pour chaque image
      var portraitphotographeElement = document.querySelectorAll('.portraitphotographeElement .tag');
    
      // Filtrer les éléments en fonction du critère souhaité
      var critereFiltre = 'votre_critere_de_filtrage';
      var elementsFiltres = Array.from(portraitphotographeElement).filter(function(tag){
        return tag.innerHTML === critereFiltre;
      });
    
      // Faire quelque chose avec les éléments filtrés
      elementsFiltres.forEach(function(element) {
        // Manipuler les éléments filtrés ici
      });
    }
    
    // Exemple d'utilisation lors d'un clic sur un bouton
    var boutonFiltrer = document.querySelector('#boutonFiltrer');
    boutonFiltrer.addEventListener('click', filtrerTags);
    // tagElement.addEventListener("click", handleClick);
    // const tagElement = document.getElementById("myTag");
    
//      function tagListItems(event) {
//       console.log(event)
//          // Sélectionnez tous les éléments de la liste de tags
// const tagListItems = document.querySelectorAll('.border li');

// // Parcourir chaque élément de la liste de tags
// tagListItems.forEach((tagListItem) => {
//   // Ecouteur d'événement "click" sur chaque élément
//   tagListItem.addEventListener('click', () => {
//     // Obtenez la valeur du filtre à partir de l'attribut data
//     const filter = tagListItem.getAttribute('data-filter');

//     // Sélectionnez toutes les images
//     const images = document.querySelectorAll('.image');

//     // Parcourir chaque image
//     images.forEach((image) => {
//       // Obtenez les tags de l'image actuelle
//       const tags = image.querySelector('img').getAttribute('data-tags');

//       // Vérifiez si les tags incluent le filtre sélectionné
//       if (tags.includes(filter)) {
//         // Afficher l'image si le filtre correspond
//         image.style.display = 'block';
//       } else {
//         // Masquer l'image si le filtre ne correspond pas
//         image.style.display = 'none';
//       }
//     });
//   });
// });
//      }
    //   const x = event.clientX;
    //   const y = event.clientY;
    //   console.log(event)
    //   // Utilisez une API de synthèse vocale pour lire la position exacte du curseur.
    //   const speech = new SpeechSynthesisUtterance();
    //   speech.text = `La position du curseur est ${x} pixels à l'horizontale et ${y} pixels à la verticale.`;
    //   speechSynthesis.speak(speech);
    
    //   // Ajoutez ici des instructions supplémentaires selon vos besoins.
    //   if ('speechSynthesis' in window) {
    //     // Utilisez la langue française pour la synthèse vocale.
    //     speech.lang = 'fr-FR';
    //   } else {
    //     // Gérez le cas où la synthèse vocale n'est pas prise en charge.
    //     console.error("La synthèse vocale n'est pas prise en charge par votre navigateur.");
    //   }
    // }

    // function genererfilters(border) {
    //   var item = document.getElementById("item")
    //   var contenu = item.innerHTML;
    //   console.log(contenu)
    //   l
    // }

    // for (var i = 0; i < filters.length; i++) {
    //   filters[i].addEventListener("click", function () {
    //     // Supprimer la classe active de tous les filtres
    //     for (var j = 0; j < filters.length; j++) {
    //       filters[j].filter.remove("active");
    //     }

    //     // Ajouter la classe active au filtre cliqué
    //     this.filter.add("active");

    //     // Faire quelque chose lorsque le filtre est cliqué
    //     // Par exemple, filtrer une liste d'éléments en fonction du filtre sélectionné
    //     var filters = this.innerHTML;
    //     // exécuter une fonction de filtrage
    //     filterList(filters);
    //   });
    //
    // // genererhead.appendChild(filterList)
  }
  
  genernermenu(generertags(FishEyeData.photographers), navmenu)
  // genernerhead(genernermenu(FishEyeData.photographers), navmenu)
  
  cont.appendChild(imagejs);
  cont.appendChild(navmenu);
  cont.appendChild(photographes);

  cont.setAttribute('class', 'container')

  header.appendChild(cont)
  genererhead(FishEyeData.photographers)
  
  function generermain(main) {
    // Récupération de l'élément du DOM qui accueillera les fiches
    var sectionFiches = document.createElement("div");
    const dossiers = new Array("Mimi", "Ellie Rose", "Tracy", "Nabeel", "Rhode", "Marcel");
    for (let i = 0; i < main.length; i++) {

      var article = main[i];
      console.log(article)
      // Création d’une balise dédiée à une pièce automobile
      var mainElement = document.createElement("div");
      // Création des bales 
      var portraitphotographeElement = document.createElement("img");
      var portrait = article.portrait
      portraitphotographeElement.src = "./FishEye_Photos/Sample Photos/" + dossiers[i] + "/" + portrait
      console.log(portraitphotographeElement)
      portraitphotographeElement.alt = "..."
      portraitphotographeElement.setAttribute('class', 'dimension')
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
    sectionFiches.setAttribute('class', 'frex-wrap')
    document.querySelector("body").appendChild(sectionFiches)

  }

  // Premier affichage de la page
  generermain(FishEyeData.photographers);
  genererfilters(FishEyeData.tags)
  tagListItems(FishEyeData.event)
}