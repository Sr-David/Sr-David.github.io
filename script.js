window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var divVideoHeight = document.querySelector('.divVideo').offsetHeight;
    console.log(scrollPosition);
    console.log("DIV VIDEO: "+ divVideoHeight);
    if (scrollPosition > divVideoHeight - 600) {
        var skills = {
            'java': 60,
            'MySql': 70,
            'python': 20,
            'html': 80,
            'css': 60,
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