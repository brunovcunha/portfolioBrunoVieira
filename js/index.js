window.addEventListener("load", () => {
    var btnProjetos = document.getElementById('btnProjetos');
    var btnWhats = document.getElementById('btnWhats');
    var btnLinkedin = document.getElementById('btnLinkedin');
    var btnGithub = document.getElementById('btnGithub');
    var btnTelegram = document.getElementById('btnTelegram');
    var btnContato = document.getElementById('btnContato')

    btnProjetos.addEventListener('click', () =>{
        window.open('https://github.com/brunovcunha', '_blank')
    });

    btnWhats.addEventListener('click', () => {
        window.open('https://wa.me/5534992224585', '_blank');
    });

    btnLinkedin.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/bruno-vieira-8b885b235/', '_blank');
    });

    btnGithub.addEventListener('click', () =>{
        window.open('https://github.com/brunovcunha', '_blank')
    });

    btnTelegram.addEventListener('click', () => {
        window.open('https://t.me/brunovcunha', '_blank');
    });

    btnContato.addEventListener('click', () => {
        window.open('mailto:brutj14@gmail.com?subject=&body=', '_blank');
    });

})