const sortBtn = document.getElementById('sort');
const shuffleBtn = document.getElementById('shuffle');
const container = document.querySelector('.div-container');
const divs = document.querySelectorAll('.divs');
const divArr = Array.from(divs);

function sortDiv(){
    divArr.sort((a,b)=>{
        if(a.textContent > b.textContent) return 1;
        if(a.textContent < b.textContent) return -1;
        if(a.textContent = b.textContent) return 0;
    });

    divArr.forEach(div=>{
        container.appendChild(div);
    })
};

sortBtn.addEventListener('click', sortDiv);

function shuffleDiv(array){
    for(let i=0; i<array.length; i++){
        let j = Math.floor(Math.random()*array.length);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    array.forEach(item=>{
        container.appendChild(item);
    })
};

shuffleBtn.addEventListener('click', ()=>{
    shuffleDiv(divArr);
});
