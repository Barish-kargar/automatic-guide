var items = document.querySelectorAll ("#list li"),
                tab = [], index;
        for(var i = 0; i < items.length; i++){
           tab.push(items[i].innerHTML);
         }
        for(var i = 0; i < items.length; i++)
        {
            items[i].onclick = function(){
               
               index = tab.indexOf(this.innerHTML);
               console.log(this.innerHTML + " Index = " + index);
               paragraph.addEventListener('click', function(){
                paragraph.style.textDecoration = "line-through";
            })
               
               paragraph.addEventListener('dblclick', function(){
                toDoContainer.removeChild(paragraph);
            })
            };
        }

