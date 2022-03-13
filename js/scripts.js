var elList = document.querySelector(".list")



for (const element of pokemons) {
   
   let item = document.createElement("li")
   let img = document.createElement("img")
   let num = document.createElement("p")
   let pokname = document.createElement("h2")
   let count = document.createElement("div")
   let countMeaning = document.createElement("span")
   let countPic = document.createElement("img")
   let talents = document.createElement("h3")
   let list = document.createElement("ul")
   
   
   for (const weakness of element.weaknesses) {
      
      let exposeItem = document.createElement("li")
      let ability = document.createElement("p")

      ability.textContent = weakness
      ability.setAttribute("class", "talents-items")
      exposeItem.appendChild(ability)
      list.appendChild(exposeItem)
   }


   item.setAttribute("class", "item")
   img.setAttribute("src", element.img)   
   img.setAttribute("class", "img")
   pokname.setAttribute("class", "name")
   count.setAttribute("class", "count")
   countPic.setAttribute("src", "./img/candy.png")
   countPic.setAttribute("class", "candy")
   countPic.setAttribute("width", "24px")
   countPic.setAttribute("height", "24px")
   countMeaning.setAttribute("class", "candy-text")
   list.setAttribute("class", "sublist")


   num.textContent = `Pokemon Number - "${element.id}"`
   pokname.textContent = `"${element.name}"`
   countMeaning.textContent = element.candy_count
   talents.textContent = "Pokemon Elements:"
   if (element.candy_count == null){
      countMeaning.textContent = "Rare Pokemon cannot be obtained for candy";
   }
   
   
   elList.appendChild(item)
   item.appendChild(img)
   item.appendChild(num)
   item.appendChild(pokname)
   item.appendChild(count)
   count.appendChild(countPic)
   count.appendChild(countMeaning)
   item.appendChild(talents)
   item.appendChild(list)

}