const btnsave = document.querySelector('#btnsave');

btnsave.addEventListener('click', function(){
    
    let firstname = document.getElementById('firstname').value;
    let surname = document.getElementById('surname').value;
    let profession = document.getElementById('profession').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let mail = document.getElementById('mail').value;
    let telephone = document.getElementById('telephone').value;
    let others = document.getElementById('others').value;
    let others2 = document.getElementById('others2').value;
    let experience = document.getElementById('experience').value;
    let technologies = document.getElementById('technologies').value;
    let languages = document.getElementById('languages').value;
    let training = document.getElementById('training').value;
    let courses = document.getElementById('courses').value;
    
    window.location.href = `add/${firstname}/${surname}/${profession}/${city}/${country}/${mail}/${telephone}/${others}/${others2}/${experience}/${technologies}/${languages}/${training}/${courses}`

})