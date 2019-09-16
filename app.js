//Initial Values
const buttons = ['Cats', 'Dogs','Lions'];


function renderButtons(){
    
   for (let i = 0; i < buttons.length; i++) {
       const buttonName = buttons [i];

       const button =`
       <div class="wrap-buttons">
            <button 
                class="btn btn-search"
                data-name="${buttonName}"
            >${buttonName}</button>
            <button
                data-name="${buttonName}"
                class="btn btn-delete fas fa-times"
            ></button>
            </div>
       `;

       $('.recent-search').append(button);
   }
}
renderButtons();