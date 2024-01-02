const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $('.player');
const playlist = $('.playlist');
const click =  $$('.song');
const audio = $('#audio');
//! List bài hát
const app = {
    currentIndex: 0,
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

    //hàm để render ra view
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
    //handleEven
    handleEnvens: function() {
        const cdWidth =  $('.cd').offsetWidth
        // this.listSong.map((song) => {
        //     $('.cd-thumb').innerHTML = `<img class="thumb"
        //     style="background-image: url('${song.img}');">`
        // })
        document.onscroll = function() {
            // const scroll = window.scrollY 
            const scroll = document.documentElement.scrollTop || window.scrollY   
            const cdNew = cdWidth - scroll
            // nếu cdNew > 0 thì 
            $('.cd').style.width = cdNew  > 0 ? cdNew + 'px' : 0;
            $('.cd').style.opacity = cdNew / cdWidth;
        }
        //lắng nghe sự kiện onclick song
        
        for(let i = 0; i < click.length; i++) {
            click[i].onclick = function(e) {
                
            }
        }
    },
    getCurrentSong: function() {
        return this.
    },
   
    //pthức start() để bắt đầu
    start: function() {
        this.render()
        this.handleEnvens()
    }
}

app.start();


