
function genererChaineBinaire(longueur) {
    let resultat = '';
    for (let i = 0; i < longueur; i++) {
        resultat += Math.floor(Math.random() * 2) + '\n';
    }
    return resultat;
}

function afficherChaine() {
    const chaine1 = genererChaineBinaire(10);
    document.getElementById('resultat1').textContent = chaine1;
    const chaine2 = genererChaineBinaire(9);
    document.getElementById('resultat2').textContent = chaine2;
    const chaine3 = genererChaineBinaire(10);
    document.getElementById('resultat3').textContent = chaine3;
    const chaine4 = genererChaineBinaire(8);
    document.getElementById('resultat4').textContent = chaine4;
    const chaine5 = genererChaineBinaire(10);
    document.getElementById('resultat5').textContent = chaine5;
    const chaine6 = genererChaineBinaire(21);
    document.getElementById('resultat6').textContent = chaine6;
    const chaine7 = genererChaineBinaire(14);
    document.getElementById('resultat7').textContent = chaine7;
    const chaine8 = genererChaineBinaire(16);
    document.getElementById('resultat8').textContent = chaine8;
    const chaine9 = genererChaineBinaire(19);
    document.getElementById('resultat9').textContent = chaine9;
    const chaine10 = genererChaineBinaire(18);
    document.getElementById('resultat10').textContent = chaine10;
    const chaine11 = genererChaineBinaire(20);
    document.getElementById('resultat11').textContent = chaine11;
    const chaine12 = genererChaineBinaire(15);
    document.getElementById('resultat12').textContent = chaine12;
    const chaine13 = genererChaineBinaire(21);
    document.getElementById('resultat13').textContent = chaine13;
    const chaine14 = genererChaineBinaire(20);
    document.getElementById('resultat14').textContent = chaine14;
    const chaine15 = genererChaineBinaire(16);
    document.getElementById('resultat15').textContent = chaine15;
    const chaine16 = genererChaineBinaire(18);
    document.getElementById('resultat16').textContent = chaine16;
    const chaine17 = genererChaineBinaire(19);
    document.getElementById('resultat17').textContent = chaine17;
    const chaine18 = genererChaineBinaire(17);
    document.getElementById('resultat18').textContent = chaine18;
    const chaine19 = genererChaineBinaire(23);
    document.getElementById('resultat19').textContent = chaine19;
    const chaine20 = genererChaineBinaire(22);
    document.getElementById('resultat20').textContent = chaine20;
    const chaine21 = genererChaineBinaire(24);
    document.getElementById('resultat21').textContent = chaine21;
    const chaine22 = genererChaineBinaire(23);
    document.getElementById('resultat22').textContent = chaine22;
    const chaine23 = genererChaineBinaire(22);
    document.getElementById('resultat23').textContent = chaine23;
    const chaine24 = genererChaineBinaire(24);
    document.getElementById('resultat24').textContent = chaine24;
    

}
window.onload = afficherChaine;

document.addEventListener('mousemove', function(event) {
    const paragraph1 = document.getElementById('resultat1');
    const paragraph2 = document.getElementById('resultat2');
    const paragraph3 = document.getElementById('resultat3');
    const paragraph4 = document.getElementById('resultat4');
    const paragraph5 = document.getElementById('resultat5');
    const paragraph6 = document.getElementById('resultat6');
    const paragraph7 = document.getElementById('resultat7');
    const paragraph8 = document.getElementById('resultat8');
    const paragraph9 = document.getElementById('resultat9');
    const paragraph10 = document.getElementById('resultat10');
    const paragraph11 = document.getElementById('resultat11');
    const paragraph12 = document.getElementById('resultat12');
    const paragraph13 = document.getElementById('resultat13');
    const paragraph14 = document.getElementById('resultat14');
    const paragraph15 = document.getElementById('resultat15');
    const paragraph16 = document.getElementById('resultat16');
    const paragraph17 = document.getElementById('resultat17');
    const paragraph18 = document.getElementById('resultat18');
    const paragraph19 = document.getElementById('resultat19');
    const paragraph20 = document.getElementById('resultat20');
    const paragraph21 = document.getElementById('resultat21');
    const paragraph22 = document.getElementById('resultat22');
    const paragraph23 = document.getElementById('resultat23');
    const paragraph24 = document.getElementById('resultat24');
    
 
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    
    const moveX = (window.innerWidth / 2 - mouseX ) / 20;
    const moveY =  (window.innerHeight / 2 - mouseY) / 20;

    const moveX2 = (window.innerWidth / 2 - mouseX ) / 15;
    const moveY2 =  (window.innerHeight / 2 - mouseY) / 15;

    paragraph1.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph3.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph4.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph5.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph6.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph7.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph8.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph9.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph10.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph11.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph12.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph13.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph14.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph15.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph16.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph17.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph18.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph19.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph20.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph21.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph22.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    paragraph23.style.transform = `translate(${moveX}px, ${moveY}px)`;
    paragraph24.style.transform = `translate(${moveX2}px, ${moveY2}px)`;




});

//<img src="https://via.placeholder.com/400" alt="Placeholder Image" class="hidden" id="animatedImage">
    

    

document.addEventListener('scroll', function() {
    var images = document.querySelectorAll('.icompetence');
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    images.forEach(function(image) {
        var rect = image.getBoundingClientRect();

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            image.style.opacity = 1;
            image.style.transform = 'scale(1)';
        } else {
            image.style.opacity = 0;
            image.style.transform = 'scale(0.75)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var projects = document.querySelectorAll('.projects');
    var container = document.getElementById('zoneprojet');

    projects.forEach(function(project) {
        project.addEventListener('mouseover', function() {
            var id = project.id;
            switch(id) {
                case 'morpion':
                    container.style.backgroundImage = "url('morpion.png')";
                    project.style.color = "red";
                    break;
                case 'wordle':
                    container.style.backgroundImage = "url('wordle.png')";
                    project.style.color = "red";
                    break;
                case 'covoiturage':
                    container.style.backgroundImage = "url('covoiturage.png')";
                    project.style.color = "red";
                    break;
                default:
                    container.style.backgroundImage = "";
            }
            container.style.backgroundSize = "cover";
            container.style.backgroundPosition = "center";
        });

        project.addEventListener('mouseout', function() {
            container.style.backgroundImage = "";
            project.style.color = "black";
            container.style.background = "none";
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
        
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

