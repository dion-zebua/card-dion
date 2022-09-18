const doors = document.querySelectorAll('.doors');
doors.forEach(e => {
    setTimeout(function(){
        e.classList.add('active');
    } , 1000);
});


let open = document.querySelector('.open p');
open.addEventListener('click',function(){

        
    
    document.body.innerHTML = `
        <div class="kotak">
            <img class="profile" src="img/profile-img.png" alt="">
            <h1>Dion Zebua</h1>
            <div class="job">
                <div class="container">
                    <p class="title">Tidak ada quotes disini, I just wanna be a Programmer</p>
                </div>
            </div>
            <div class="btn">
                <a href="https://github.com/dion-zebua">github</a>
                <a href="mailto:dionzebua04@gmail.com">gmail</a>
            </div>
            <div class="sosmed">
                <a href="https://www.instagram.com/papyon_n/?hl=en">
                    <img src="img/instagram.png" alt="">
                </a>
                <a href="https://www.facebook.com/profile.php?id=100018919392749">
                    <img src="img/facebook.png" alt="">
                </a>
                <a href="https://t.me/dionZebua">
                    <img src="img/telegram.png" alt="">
                </a>
            </div>
        </div>
        <span class="a"></span>
        <span class="b"></span>
        <span class="c"></span>

        <audio controls autoplay loop style="display: none;">
            <source src="mymusic.aac" type="">
        </audio>
    `;


});