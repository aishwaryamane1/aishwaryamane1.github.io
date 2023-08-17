// tip - ctrl + shift + L       =>   will select all oocurences of current string or element

const music = new Audio('./audio/Arijit Singh/1.mp3');
//music.play();

const songs = [
    {
        id: 1,
        songName: 'Neki Ki Raah<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/1.jpg"
    },
    {
        id: 2,
        songName: 'Khairiyat<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/2.jpg"
    },
    {
        id: 3,
        songName: 'Desh Mere<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/3.jpg"
    },
    {
        id: 4,
        songName: 'Dhokha<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/4.jpg"
    },
    {
        id: 5,
        songName: 'Tera Yaar Hoon Main<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/5.jpg"
    },
    {
        id: 6,
        songName: 'Chunar<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/6.jpg"
    },
    {
        id: 7,
        songName: 'Galti Se Mistake<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/7.jpg"
    },
    {
        id: 8,
        songName: 'Hamari Adhuri Kahani <br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/8.jpg"
    },
    {
        id: 9,
        songName: 'What Jhumka? <br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/9.jpg"
    },
    {
        id: 10,
        songName: 'Humdard<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/10.jpg"
    },
    {
        id: 11,
        songName: 'Mere Yaara<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/11.jpg"
    },
    {
        id: 12,
        songName: 'Nashe Si Chadh Gayi<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/12.jpg"
    },
    {
        id: 13,
        songName: 'Ae Watan<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/13.jpg"
    },
    {
        id: 14,
        songName: 'Agar Tum Saath Ho<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/14.jpg"
    },
    {
        id: 15,
        songName: 'Pachtaoge<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/15.jpg"
    },
    {
        id: 16,
        songName: 'Kesariya<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/16.jpg"
    },
    {
        id: 17,
        songName: 'Tere Hawale<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/17.jpg"
    },
    {
        id: 18,
        songName: 'Naina Ashq Na Ho<br> <div class="subtitle">Arijit Singh</div>',
        poster: "./img/Arijit_Posters/18.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id , songName , poster} = element;
    
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id ;
    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>
    `;
    search_results.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup' , ()=> {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML ;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = 'flex';
        } else {
            items[index].style.display = 'none';
        }

        if (input.value == 0) {
            search_results.style.display = 'none';
        } else {
            search_results.style.display = '';
        }
    }
});
//search data end



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click' , ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})





let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})




const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105, .0)';
    })
}




let index = 0;
let poster_play = document.getElementById('poster_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `./audio/Arijit Singh/${index}.mp3`;
        poster_play.src = `./img/Arijit_Posters/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `./audio/Arijit Singh/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download' , songName.split('<br>')[0]) ;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background =  'rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , ()=> {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    
    if (sec1 < 10 ) {
        sec1 = `0${sec1}`;
    } 
    currentEnd.innerText = `${min1} : ${sec1}` ;
    


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10 ) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2} : ${sec2}` ;

    let progressBar = parseInt((music_curr / music_dur) * 100) ;
    seek.value = progressBar;
    //console.log(seek.value);
    
    let seekbar = seek.value;
    bar2.style.width =  `${seekbar}%` ;
    dot.style.left = `${seekbar}%` ;

});


seek.addEventListener('change' , () => {
    music.currentTime = seek.value * music.duration / 100 ;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];


vol.addEventListener('change' , ()=> {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100 ;
});

let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click' , ()=> {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    } 
        music.src = `./audio/Arijit Singh/${index}.mp3`;
        poster_play.src = `./img/Arijit_Posters/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background =  'rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

});

next.addEventListener('click' , ()=> {
    index ++ ;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    } 
    music.src = `./audio/Arijit Singh/${index}.mp3`;
        poster_play.src = `./img/Arijit_Posters/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background =  'rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click' , ()=> {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat'
            break;
            
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random'
            break;

        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next'
            break;
    }
});



const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `./audio/Arijit Singh/${index}.mp3`;
        poster_play.src = `./img/Arijit_Posters/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background =  'rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `./audio/Arijit Singh/${index}.mp3`;
        poster_play.src = `./img/Arijit_Posters/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background =  'rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}
const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1) ;
    }
    music.src = `./audio/Arijit Singh/${index}.mp3`;
        poster_play.src = `./img/Arijit_Posters/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background =  'rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}



music.addEventListener('ended' , () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    
    }
});

let menu_button = document.getElementById('menu_button');
let menu = document.getElementsByClassName('menu')[0];

menu_button.addEventListener('click' , ()=> {
    menu.style.transform = "unset";
    menu_button.style.opacity = 0;
});

let song = document.getElementsByClassName('song')[0];

let widthMatch = window.matchMedia("(max-width: 930px)");

widthMatch.addEventListener('change', function(mm){
    if (mm.matches) {
        song.addEventListener('click' , ()=> {
            menu.style.transform = "translateX(-100%)";
            menu_button.style.opacity = 1;
        });
    }
    else {
        song.addEventListener('click' , ()=> {
            menu.style.transform = "translateX(0%)";
        }) 
    }
});






