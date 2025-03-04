// Бирюльки (написать игру). Написать страницу, при входе на которую появляется
// таблица, например, 5*5 с кнопками без надписей, имеющими ненулевые размеры,
// например, 40*80. При нажатии на кнопку на ней появляется число. При нажатии на
// другую кнопку, число исчезает, если числа не совпадают, либо исчезают обе
// кнопки, если числа совпадают.


window.addEventListener(
    'load',
    Main
)

const numbers = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]

function Main(){
   table = document.createElement('table')
   tr = document.createElement('tr')
   td = document.createElement('td')
   btn = document.createElement('button')

   for (let i = 0; i < 4; i++) {
    tr = document.createElement('tr')
    btn = document.createElement('button')
    tr.appendChild(btn)
    table.appendChild(tr)

    for (let j = 1; j < 4; j++) {
        td = document.createElement('td')
        btn = document.createElement('button')
        td.appendChild(btn)
        tr.appendChild(td)
    }   
   }
  
   document.body.appendChild(table)

   giveButtonValue()

   Play()

   



   
}

function giveButtonValue(){
    buttons = document.querySelectorAll('button')

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = numbers[i]
            
        }
     
    };


function randomNum() {
    let rand = 0 + Math.random() * 15;
    return Math.floor(rand)
}

function Play(){
    arr = []
    content = 0
    buttons = document.querySelectorAll('button')

    buttons.forEach(el => {
        el.addEventListener(
            'click',
            ()=>{
                          
                          
                el.style.color = 'black'
                console.log(el);

                if(el.textContent != content)  {
                    console.log('no');
                    content = el.textContent
                    console.log(content);
                }
                else{
                    el.style.background = 'red'
                    el.disabled = true
                    console.log('yes');
                    
                }

                // arr.push(el.textContent)
                // if (arr.length == 2){
                //     console.log('sdsdsd');
                //     if (arr[0] != arr[1]){
                //         arr.length = 0
                //         console.log(arr);
                        
                //     }
                //     else{
                //         console.log('same');
                        
                //         // el.style.visibility = 'collapsed'

                //         this.remove()

                //     }
                // }

            }
        )        
    });


}



