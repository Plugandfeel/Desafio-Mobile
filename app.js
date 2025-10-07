const saudacao = document.getElementById ('saudacao');
const frase = document.getElementById('frase');
const icone = document.getElementById('icone');

const frasesManha = [
    'Bom dia!',
    'Que seu dia seja lindo !',
    'Há sempre um bom motivo para sorrir', 
    'tempo amigo, seja legal!',
    'Levanta, você não é herdeiro',
    'Sua conta bancária diz: levanta pelo amor de Deus!',
];
    
const frasesTarde = [
    'Boa tarde!', 
    'Aproveite cada momento do seu dia!', 
    'Que sua tarde seja linda!', 
    'Lá o tempo espera, lá é primavera'];
const frasesNoite = [
    'Boa noite!',
    'Agora é o momento do descanso dos justos!', 
    'Calada a noite preta!',
    'Hora de preparar o espírito para o próximo dia',
    'Bora dormir cedo que amanhã é dia útil!',
    'Para insônia persistente, melatonina ou clonazepam'

];

    function atualizaSaudacao(){
        const hoje = new Date();
        const hora = hoje.getHours();
        let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
        if (hora>= 5 && hora <12){
            msgSaudacao = 'Bom dia';
            imgFundo ="url(bomDiaFundo.jpg)";
            imgIcone = 'sol.png';
            frasesDoMomento = frasesManha;
        } else if (hora >= 12 && hora <18){
            msgSaudacao = 'Boa Tarde';
            imgFundo = "url(boaTardeFundo.jpg)";
            imgIcone = 'por-do-sol.png';
            frasesDoMomento = frasesTarde;
        } else{
            msgSaudacao = 'Boa noite';
            imgFundo ="url(boaNoiteFundo.jpg)";
            imgIcone = 'noite.png';
            frasesDoMomento = frasesNoite;
        }

        saudacao.textContent = msgSaudacao;
        document.body.style.backgroundImage = imgFundo;
        icone.src = imgIcone;
        const randomIndex = Math.floor(Math.random() * frasesDoMomento.length);
        frase.textContent = frasesDoMomento [randomIndex];
    }
    atualizaSaudacao();
    setInterval (atualizaSaudacao, 8000);