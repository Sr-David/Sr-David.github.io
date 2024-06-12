window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var divVideoHeight = document.querySelector('.divVideo').offsetHeight;

    if (scrollPosition > divVideoHeight - 600) {
        var skills = {
            'java': 60,
            'MySql': 70,
            'python': 20,
            'html': 70,
            'css': 50,
            'javascript': 30,
            'wordpress': 60
        };

        var skillKeys = Object.keys(skills);
        var i = 0;

        (function animateSkill() {
            if (i < skillKeys.length) {
                var skill = skillKeys[i];
                var skillDiv = document.querySelector('.' + skill);
                skillDiv.style.width = skills[skill] + '%';
                console.log("Skill div "+skillDiv);
                i++;
                setTimeout(animateSkill, 300);
            }
        })();
    }
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var contenedorEdu = document.querySelector('.contenedorEdu').offsetHeight;
    

    if (scrollPosition > contenedorEdu + 300) {
        var bordes = document.querySelectorAll('.bordeEdu');
        bordes.forEach(function(borde) {
            borde.style.borderImage = 'linear-gradient(to bottom, orange 100%, transparent 0%) 1';
        });
    }
});



window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var contenedorExp = document.querySelector('.contenedorExp');
    if (contenedorExp) {
        var contenedorExpHeight = contenedorExp.offsetHeight;
        console.log("Contenedor " + contenedorExpHeight);
        console.log("Scroll position " + scrollPosition);

        if (scrollPosition > contenedorExpHeight + 1000) {
            var bordes = document.querySelectorAll('.bordeEdu2');
            bordes.forEach(function(borde) {
                borde.style.borderImage = 'linear-gradient(to bottom, orange 100%, transparent 0%) 1';
            });
        }
    }
});








function copiarTexto() {
   
    navigator.clipboard.writeText("david.calvo.va@gmail.com");
    alert("Email copied to clipboard:");
   
}


function irLinkedin(){
    window.open("https://www.linkedin.com/in/david-calvo-vates-578708270/");
}