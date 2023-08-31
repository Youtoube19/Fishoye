export function generertags(photographes) {
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
    
  export function genernermenu(tags, balise) {
    let ul = document.createElement("ul")
    tags.forEach(tag => {
      console.log(`#${tag}`)
      let li = document.createElement("li")
      li.setAttribute('class', 'border')
      li.innerHTML = `#${tag}`
      ul.appendChild(li)
    })
  
    balise.appendChild(ul)
    
  }

  var filters = document.getElementsByClassName("ul");

