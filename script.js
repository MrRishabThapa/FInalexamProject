let provinces=document.querySelectorAll('.provinces');


provinces.forEach(province => {
    province.addEventListener('click', function() {
        console.log('You clicked on'+ this.innerText);
    });
});

