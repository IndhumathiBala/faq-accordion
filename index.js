const answers = {
    q1: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.',
    q2: 'Yes, Frontend Mentor is free to use. There are also premium plans available with additional features.',
    q3: 'Yes, you can use Frontend Mentor projects in your portfolio. It’s a great way to showcase your skills and projects.',
    q4: 'If you are stuck on a challenge, you can seek help from the Frontend Mentor community, read the official guides, or ask questions on the forum.'
};


for(var i=0;i<4;i++)
    {
        document.querySelectorAll('.plus')[i].addEventListener('click',function(event){
            handleClick(event);
        });
    }


function handleClick(event)
{
    // alert("button clicked");
    console.log(event);
    var srcElement = event.srcElement;
    var qs = event.srcElement.classList[0];
    switch(qs)
    {
        case 'q1':
            if (srcElement.classList.contains('plus')) {
                srcElement.classList.remove('plus');
                srcElement.classList.add('minus');
                srcElement.src = 'assets/images/icon-minus.svg';
                document.querySelector('.a1').innerHTML=answers.q1;
            } else {
                srcElement.classList.remove('minus');
                srcElement.classList.add('plus');
                srcElement.src = 'assets/images/icon-plus.svg'; 
                document.querySelector('.a1').innerHTML="";
            }
            break;
        case 'q2':
            if (srcElement.classList.contains('plus')) {
                srcElement.classList.remove('plus');
                srcElement.classList.add('minus');
                srcElement.src = 'assets/images/icon-minus.svg'; // Change to minus icon
                document.querySelector('.a2').innerHTML=answers.q2;
            } else {
                srcElement.classList.remove('minus');
                srcElement.classList.add('plus');
                srcElement.src = 'assets/images/icon-plus.svg'; // Change back to plus icon
                document.querySelector('.a2').innerHTML="";
            }
            break;
        case 'q3':
            if (srcElement.classList.contains('plus')) {
                srcElement.classList.remove('plus');
                srcElement.classList.add('minus');
                srcElement.src = 'assets/images/icon-minus.svg'; // Change to minus icon
                document.querySelector('.a3').innerHTML=answers.q3;
            } else {
                srcElement.classList.remove('minus');
                srcElement.classList.add('plus');
                srcElement.src = 'assets/images/icon-plus.svg'; // Change back to plus icon
                document.querySelector('.a3').innerHTML="";
            }
            break;
        case 'q4':
            if (srcElement.classList.contains('plus')) {
                srcElement.classList.remove('plus');
                srcElement.classList.add('minus');
                srcElement.src = 'assets/images/icon-minus.svg'; // Change to minus icon
                document.querySelector('.a4').innerHTML=answers.q4;
            } else {
                srcElement.classList.remove('minus');
                srcElement.classList.add('plus');
                srcElement.src = 'assets/images/icon-plus.svg'; // Change back to plus icon
                document.querySelector('.a4').innerHTML="";
            }
            break;
    }
}