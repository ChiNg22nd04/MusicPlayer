const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $('.playlist');
const audio = $('#audio');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const repeatBtn = $('.btn-repeat');
const randomBtn = $('.btn-random');
//! List bài hát
const app = {
    currentIndex: 0,
    isPlaying: false,
    listSong: [ 
        {
            name: 'Chịu Cách Mình Nói Thua',
            singer: 'RHYDER | ft. BAN x COOLKID ',
            path: './assets/music/ChiuCachMinhNoiThua-RHYDERCoolkidBAN-12449134.mp3',
            img:'./assets/img/ccmnt.jpeg',
        },
        {
            name: 'Chỉ Một Đêm Nữa Thôi',
            singer: 'RPT MCK, TLinh',
            path: './assets/music/ChiMotDemNuaThoi-MCK-8804087.mp3',
            img: './assets/img/cmdnt.jpeg',
        },
        {
            name: 'Thôi Em Đừng Đi',
            singer: 'RPT MCK ( ft. Trung Trần )',
            path: './assets/music/ThoiEmDungDi-MCK-8804088.mp3',
            img: './assets/img/tedd.jpeg',
        },
        {
            name: 'MUỐN ĐƯỢC CÙNG EM',
            singer: 'FREAKY x CM1X (ft. QUỲNH GAI)',
            path: './assets/music/MuonDuocCungEm-Freaky-6792500.mp3',
            img: './assets/img/mdce.jpeg',
        },
        {
            name: 'Chịu Cách Mình Nói Thua',
            singer: 'RHYDER | ft. BAN x COOLKID ',
            path: './assets/music/ChiuCachMinhNoiThua-RHYDERCoolkidBAN-12449134.mp3',
            img:'./assets/img/ccmnt.jpeg',
        },
        {
            name: 'Chỉ Một Đêm Nữa Thôi',
            singer: 'RPT MCK, TLinh',
            path: './assets/music/ChiMotDemNuaThoi-MCK-8804087.mp3',
            img: './assets/img/cmdnt.jpeg',
        },
        {
            name: 'Thôi Em Đừng Đi',
            singer: 'RPT MCK ( ft. Trung Trần )',
            path: './assets/music/ThoiEmDungDi-MCK-8804088.mp3',
            img: './assets/img/tedd.jpeg',
        },
        {
            name: 'MUỐN ĐƯỢC CÙNG EM',
            singer: 'FREAKY x CM1X (ft. QUỲNH GAI)',
            path: './assets/music/MuonDuocCungEm-Freaky-6792500.mp3',
            img: './assets/img/mdce.jpeg',
        },
    ],  

    //* hàm để render ra view
    render: function() {
        const htmls = this.listSong.map((song) => {
            return `
            <div class="song">
                <div class="thumb"
                    style="background-image: url('${song.img}');">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
       `
            
        })
        $('.playlist').innerHTML = htmls.join('\n');
    },
    //* handleEven
    handleEnvens: function() {
        // xử lý phóng to thu nhỏ
        const cdWidth =  $('.cd').offsetWidth
        document.onscroll = function() {
            // const scroll = window.scrollY 
            const scroll = document.documentElement.scrollTop || window.scrollY   
            const cdNew = cdWidth - scroll
            // nếu cdNew > 0 thì 
            $('.cd').style.width = cdNew  > 0 ? cdNew + 'px' : 0;
            $('.cd').style.opacity = cdNew / cdWidth;
        }

        //lắng nghe sự kiện click play
        playBtn.onclick = function() {
            audio.play()
            player.classList.add('playing')
            //nếu đang playing thì phải pause còn k thì ngược lại
            if(app.isPlaying) {
                // app.isPlaying = false;
                audio.pause();
                // player.classList.remove('playing');
            }
            else {
                // app.isPlaying = true;
                audio.play();
                // player.classList.add('playing');
            }
        }

        //khi song được play lắng nghe trên thẻ audio
        audio.onplay = function() {
            app.isPlaying = true;
            player.classList.add('playing');
        }
        //khi song bị pause 
        audio.onpause = function() {
            app.isPlaying = false;
            player.classList.remove('playing');
        }
        //khi random song
        randomBtn.onclick = function() {
            randomBtn.classList.toggle('active')
        }
        //khi repeat song
        repeatBtn.onclick = function() {
            repeatBtn.classList.toggle('active')
        }
        //khi pre song
        prevBtn.onclick = function() {
            app.prevSong();
            audio.play();
        }
        //khi next song
        nextBtn.onclick = function() {
            app.nextSong();
            audio.play();
        }
    },
    //* hàm để xử lý khi click vào song
    songActive: function() {
        const songList = $$('.song')
        for (var i = 0; i < songList.length; i++) {
            songList[i].onclick = function() {
                console.log(this.name);
            }
        }
    },
    
    //* repeat song
    repeatSong: function() {
        if(repeatBtn.classList.contains('active')) {
            audio.loop = true;
        }
        else {
            audio.loop = false;
        }
    },

    //* random song
    randomSong: function() {
        if(randomBtn.classList.contains('active')) {
            this.currentIndex = Math.floor(Math.random() * this.listSong.length);
        }
        else {
            this.currentIndex = this.currentIndex;
        }
        console.log(this.currentIndex)
    },

    //* prev song
    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.listSong.length - 1;
        }
        this.loadCurrentSong();
    },

    //next song
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.listSong.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    //hàm để lấy ra bài hát hiện tại
    getCurrentSong: function() {
        return this.listSong[this.currentIndex].name;
    },
    //hàm để load bài hát hiện tại
    loadCurrentSong: function() {
    
        heading.textContent = this.listSong[this.currentIndex].name;
        cdThumb.style.backgroundImage = `url(${this.listSong[this.currentIndex].img})`;
        audio.src = this.listSong[this.currentIndex].path;
    },
   
    //pthức start() để bắt đầu
    start: function() {
        //lắng nghe và xử lý các sự kiện
        this.handleEnvens()
        //render playlist
        this.render()
        this.getCurrentSong()
        this.loadCurrentSong()
        this.songActive()
        this.nextSong()
        this.prevSong()
        this.repeatSong()
        this.randomSong()
    }
}

app.start();



