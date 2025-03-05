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

        console.log(buttons);
        
     
    };


function randomNum() {
    let rand = 1 + Math.random() * 8;
    return Math.floor(rand)
}

function Play(){

    count = 1
    buttons = document.querySelectorAll('button')

    buttons.forEach(el => {
        el.addEventListener(
            'click',
            ()=>{

                el.setAttribute('class', 'chosen')

            setTimeout(()=>{
                if(count == 2){
                   chosen_els =  document.querySelectorAll('.chosen')
                   console.log(chosen_els);

                   if(chosen_els[0].textContent ==chosen_els[1].textContent){
                    console.log('yes');
                    chosen_els[0].setAttribute('class', 'destroy')
                    chosen_els[1].setAttribute('class', 'destroy')
                    count = 0
                   }
                   else{
                    count = 0
                    chosen_els[0].removeAttribute("class")
                    console.log(chosen_els[0]);
                    chosen_els[1].removeAttribute("class")
                    chosen_els = []
                   }
                }
                count++
                }, 700
            )
                

            }
        )        
    });


}



