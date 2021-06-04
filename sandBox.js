const btn=document.querySelectorAll('.btn-all');
const count=document.querySelector('.count');
let num;
btn.forEach((b)=>{
    b.addEventListener("click",(e)=>{
        if(e.target.textContent=='Decrease'){
            num=(Number)(count.textContent);
            num--;
            count.style.color='green';
        }
        else if(e.target.textContent=='Increase'){
            num=(Number)(count.textContent);
            num++;
            count.style.color='red';
        }
        else if(e.target.textContent=='Reset'){
            num=(Number)(count.textContent);
            num=0;
            count.style.color='Blue';
        }
        count.textContent=num;
        console.log(e.target.textContent);
    });
});