const sortBtn = document.getElementById('sort');
const container = document.querySelector('.div-container');
const divs = document.querySelectorAll('.divs');
const divarr = Array.from(divs);

function sortDiv(){
    divarr.sort((a,b)=>{
        if(a.textContent > b.textContent) return 1;
        if(a.textContent < b.textContent) return -1;
        if(a.textContent = b.textContent) return 0;
    });

    divarr.forEach(div=>{
        container.appendChild(div);
    })
};

sortBtn.addEventListener('click', sortDiv);

