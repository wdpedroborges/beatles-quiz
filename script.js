const pergunta = document.getElementById('pergunta');
const tempoGeral = document.getElementById('tempoGeral');
const tempoPergunta = document.getElementById('tempoPergunta');
const btnConfig = document.getElementById('btnConfig');
const btnDica = document.getElementById('btnDica');
const btnProxima = document.getElementById('btnProxima');
const btnEnviar = document.getElementById('btnEnviar');
const respostaCorreta = document.getElementById('respostaCorreta');
const sugestoes = document.getElementById('sugestoes');
const respostaUsuario = document.getElementById('respostaUsuario');
const controlesUsuario = document.getElementById('controlesUsuario');
const btnCompartilhar = document.getElementById('btnCompartilhar');

const configuracoes = document.getElementById('configuracoes');
const dicas = document.getElementById('dicas');
const resultadoFinal = document.getElementById('resultadoFinal');

let dataset = [
    ['Nome', 'Álbum', 'Áudio'],
    [["A Hard Day's Night","A Hard Day's Night","musicas/01 A Hard Day's Night.mp3"],["I Should Have Known Better","A Hard Day's Night","musicas/02 I Should Have Known Better.mp3"],["If I Fell","A Hard Day's Night","musicas/03 If I Fell.mp3"],["I'm Happy Just To Dance With You","A Hard Day's Night","musicas/04 I'm Happy Just To Dance With You.mp3"],["And I Love Her","A Hard Day's Night","musicas/05 And I Love Her.mp3"],["Tell Me Why","A Hard Day's Night","musicas/06 Tell Me Why.mp3"],["Can't Buy Me Love","A Hard Day's Night","musicas/07 Can't Buy Me Love.mp3"],["Any Time At All","A Hard Day's Night","musicas/08 Any Time At All.mp3"],["I'll Cry Instead","A Hard Day's Night","musicas/09 I'll Cry Instead.mp3"],["Things We Said Today","A Hard Day's Night","musicas/10 Things We Said Today.mp3"],["When I Get Home","A Hard Day's Night","musicas/11 When I Get Home.mp3"],["You Can't Do That","A Hard Day's Night","musicas/12 You Can't Do That.mp3"],["I'll Be Back","A Hard Day's Night","musicas/13 I'll Be Back.mp3"],["Come Together","Abbey Road","musicas/01 Come Together.mp3"],["Something","Abbey Road","musicas/02 Something.mp3"],["Maxwell's Silver Hammer","Abbey Road","musicas/03 Maxwell's Silver Hammer.mp3"],["Oh! Darling","Abbey Road","musicas/04 Oh! Darling.mp3"],["Octopus's Garden","Abbey Road","musicas/05 Octopus's Garden.mp3"],["I Want You (She's So Heavy)","Abbey Road","musicas/06 I Want You (She's So Heavy).mp3"],["Here Comes The Sun","Abbey Road","musicas/07 Here Comes The Sun.mp3"],["Because","Abbey Road","musicas/08 Because.mp3"],["You Never Give Me Your Money","Abbey Road","musicas/09 You Never Give Me Your Money.mp3"],["Sun King","Abbey Road","musicas/10 Sun King.mp3"],["Mean Mr. Mustard","Abbey Road","musicas/11 Mean Mr. Mustard.mp3"],["Polythene Pam","Abbey Road","musicas/12 Polythene Pam.mp3"],["She Came In Through The Bathroom Window","Abbey Road","musicas/13 She Came In Through The Bathroom Window.mp3"],["Golden Slumbers","Abbey Road","musicas/14 Golden Slumbers.mp3"],["Carry That Weight","Abbey Road","musicas/15 Carry That Weight.mp3"],["The End","Abbey Road","musicas/16 The End.mp3"],["Her Majesty","Abbey Road","musicas/17 Her Majesty.mp3"],["No Reply","Beatles For Sale","musicas/01 No Reply.mp3"],["I'm A Loser","Beatles For Sale","musicas/02 I'm A Loser.mp3"],["Baby's In Black","Beatles For Sale","musicas/03 Baby's In Black.mp3"],["Rock And Roll Music","Beatles For Sale","musicas/04 Rock And Roll Music.mp3"],["I'll Follow The Sun","Beatles For Sale","musicas/05 I'll Follow The Sun.mp3"],["Mr. Moonlight","Beatles For Sale","musicas/06 Mr. Moonlight.mp3"],["Kansas City - Hey, Hey, Hey, Hey","Beatles For Sale","musicas/07 Kansas City - Hey, Hey, Hey, Hey.mp3"],["Eight Days A Week","Beatles For Sale","musicas/08 Eight Days A Week.mp3"],["Words Of Love","Beatles For Sale","musicas/09 Words Of Love.mp3"],["Honey Don't","Beatles For Sale","musicas/10 Honey Don't.mp3"],["Every Little Thing","Beatles For Sale","musicas/11 Every Little Thing.mp3"],["I Don't Want To Spoil The Party","Beatles For Sale","musicas/12 I Don't Want To Spoil The Party.mp3"],["What You're Doing","Beatles For Sale","musicas/13 What You're Doing.mp3"],["Everybody's Trying To Be My Baby","Beatles For Sale","musicas/14 Everybody's Trying To Be My Baby.mp3"],["Help!","Help!","musicas/01 Help!.mp3"],["The Night Before","Help!","musicas/02 The Night Before.mp3"],["You've Got To Hide Your Love Away","Help!","musicas/03 You've Got To Hide Your Love Away.mp3"],["I Need You","Help!","musicas/04 I Need You.mp3"],["Another Girl","Help!","musicas/05 Another Girl.mp3"],["You're Going To Lose That Girl","Help!","musicas/06 You're Going To Lose That Girl.mp3"],["Ticket To Ride","Help!","musicas/07 Ticket To Ride.mp3"],["Act Naturally","Help!","musicas/08 Act Naturally.mp3"],["It's Only Love","Help!","musicas/09 It's Only Love.mp3"],["You Like Me Too Much","Help!","musicas/10 You Like Me Too Much.mp3"],["Tell Me What You See","Help!","musicas/11 Tell Me What You See.mp3"],["I`ve Just Seen A Face","Help!","musicas/12 I`ve Just Seen A Face.mp3"],["Yesterday","Help!","musicas/13 Yesterday.mp3"],["Dizzy Miss Lizzy","Help!","musicas/14 Dizzy Miss Lizzy.mp3"],["Two Of Us","Let It Be","musicas/01 Two Of Us.mp3"],["Dig A Pony","Let It Be","musicas/02 Dig A Pony.mp3"],["Across The Universe","Let It Be","musicas/03 Across The Universe.mp3"],["I Me Mine","Let It Be","musicas/04 I Me Mine.mp3"],["Dig It","Let It Be","musicas/05 Dig It.mp3"],["Let It Be","Let It Be","musicas/06 Let It Be.mp3"],["Maggie Mae","Let It Be","musicas/07 Maggie Mae.mp3"],["I've Got A Feeling","Let It Be","musicas/08 I've Got A Feeling.mp3"],["One After 909","Let It Be","musicas/09 One After 909.mp3"],["The Long And Winding Road","Let It Be","musicas/10 The Long And Winding Road.mp3"],["For You Blue","Let It Be","musicas/11 For You Blue.mp3"],["Get Back","Let It Be","musicas/12 Get Back.mp3"],["Magical Mystery Tour","Magical Mystery Tour","musicas/01 Magical Mystery Tour.mp3"],["The Fool On The Hill","Magical Mystery Tour","musicas/02 The Fool On The Hill.mp3"],["Flying","Magical Mystery Tour","musicas/03 Flying.mp3"],["Blue Jay Way","Magical Mystery Tour","musicas/04 Blue Jay Way.mp3"],["Your Mother Should Know","Magical Mystery Tour","musicas/05 Your Mother Should Know.mp3"],["I Am The Walrus","Magical Mystery Tour","musicas/06 I Am The Walrus.mp3"],["Hello Goodbye","Magical Mystery Tour","musicas/07 Hello Goodbye.mp3"],["Strawberry Fields Forever","Magical Mystery Tour","musicas/08 Strawberry Fields Forever.mp3"],["Penny Lane","Magical Mystery Tour","musicas/09 Penny Lane.mp3"],["Baby You're A Rich Man","Magical Mystery Tour","musicas/10 Baby You're A Rich Man.mp3"],["All You Need Is Love","Magical Mystery Tour","musicas/11 All You Need Is Love.mp3"],["I Saw Her Standing There","Please Please Me","musicas/01 I Saw Her Standing There.mp3"],["Misery","Please Please Me","musicas/02 Misery.mp3"],["Anna (Go To Him)","Please Please Me","musicas/03 Anna (Go To Him).mp3"],["Chains","Please Please Me","musicas/04 Chains.mp3"],["Boys","Please Please Me","musicas/05 Boys.mp3"],["Ask Me Why","Please Please Me","musicas/06 Ask Me Why.mp3"],["Please Please Me","Please Please Me","musicas/07 Please Please Me.mp3"],["Love Me Do","Please Please Me","musicas/08 Love Me Do.mp3"],["P.S. I Love You","Please Please Me","musicas/09 P.S. I Love You.mp3"],["Baby It's You","Please Please Me","musicas/10 Baby It's You.mp3"],["Do You Want To Know A Secret","Please Please Me","musicas/11 Do You Want To Know A Secret.mp3"],["A Taste Of Honey","Please Please Me","musicas/12 A Taste Of Honey.mp3"],["There's A Place","Please Please Me","musicas/13 There's A Place.mp3"],["Twist And Shout","Please Please Me","musicas/14 Twist And Shout.mp3"],["Taxman","Revolver","musicas/01 Taxman.mp3"],["Eleanor Rigby","Revolver","musicas/02 Eleanor Rigby.mp3"],["I'm Only Sleeping","Revolver","musicas/03 I'm Only Sleeping.mp3"],["Love You To","Revolver","musicas/04 Love You To.mp3"],["Here, There And Everywhere","Revolver","musicas/05 Here, There And Everywhere.mp3"],["Yellow Submarine","Revolver","musicas/06 Yellow Submarine.mp3"],["She Said She Said","Revolver","musicas/07 She Said She Said.mp3"],["Good Day Sunshine","Revolver","musicas/08 Good Day Sunshine.mp3"],["And Your Bird Can Sing","Revolver","musicas/09 And Your Bird Can Sing.mp3"],["For No One","Revolver","musicas/10 For No One.mp3"],["Doctor Robert","Revolver","musicas/11 Doctor Robert.mp3"],["I Want To Tell You","Revolver","musicas/12 I Want To Tell You.mp3"],["Got To Get You Into My Life","Revolver","musicas/13 Got To Get You Into My Life.mp3"],["Tomorrow Never Knows","Revolver","musicas/14 Tomorrow Never Knows.mp3"],["Drive My Car","Rubber Soul","musicas/01 Drive My Car.mp3"],["Norwegian Wood (The Bird Has Flown)","Rubber Soul","musicas/02 Norwegian Wood (The Bird Has Flown).mp3"],["You Won't See Me","Rubber Soul","musicas/03 You Won't See Me.mp3"],["Nowhere Man","Rubber Soul","musicas/04 Nowhere Man.mp3"],["Think For Yourself","Rubber Soul","musicas/05 Think For Yourself.mp3"],["The Word","Rubber Soul","musicas/06 The Word.mp3"],["Michelle","Rubber Soul","musicas/07 Michelle.mp3"],["What Goes On","Rubber Soul","musicas/08 What Goes On.mp3"],["Girl","Rubber Soul","musicas/09 Girl.mp3"],["I'm Looking Through You","Rubber Soul","musicas/10 I'm Looking Through You.mp3"],["In My Life","Rubber Soul","musicas/11 In My Life.mp3"],["Wait","Rubber Soul","musicas/12 Wait.mp3"],["If I Needed Someone","Rubber Soul","musicas/13 If I Needed Someone.mp3"],["Run For Your Life","Rubber Soul","musicas/14 Run For Your Life.mp3"],["Sgt Peppers Lonely Hearts Club Band","Sgt. Pepper's Lonely Hearts Club Band","musicas/01 Sgt Peppers Lonely Hearts Club Band.mp3"],["With A Little Help From My Friends","Sgt. Pepper's Lonely Hearts Club Band","musicas/02 With A Little Help From My Friends.mp3"],["Lucy In The Sky With Diamonds","Sgt. Pepper's Lonely Hearts Club Band","musicas/03 Lucy In The Sky With Diamonds.mp3"],["Getting Better","Sgt. Pepper's Lonely Hearts Club Band","musicas/04 Getting Better.mp3"],["Fixing A Hole","Sgt. Pepper's Lonely Hearts Club Band","musicas/05 Fixing A Hole.mp3"],["She's Leaving Home","Sgt. Pepper's Lonely Hearts Club Band","musicas/06 She's Leaving Home.mp3"],["Being For The Benefit Of Mr Kite","Sgt. Pepper's Lonely Hearts Club Band","musicas/07 Being For The Benefit Of Mr Kite.mp3"],["Within You Without You","Sgt. Pepper's Lonely Hearts Club Band","musicas/08 Within You Without You.mp3"],["When I'm Sixty-Four","Sgt. Pepper's Lonely Hearts Club Band","musicas/09 When I'm Sixty-Four.mp3"],["Lovely Rita","Sgt. Pepper's Lonely Hearts Club Band","musicas/10 Lovely Rita.mp3"],["Good Morning Good Morning","Sgt. Pepper's Lonely Hearts Club Band","musicas/11 Good Morning Good Morning.mp3"],["Sgt Peppers..(Reprise)","Sgt. Pepper's Lonely Hearts Club Band","musicas/12 Sgt Peppers..(Reprise).mp3"],["A Day In The Life","Sgt. Pepper's Lonely Hearts Club Band","musicas/13 A Day In The Life.mp3"],["Back In The U.S.S.R.","The Beatles (White Album) [Disc 1]","musicas/01 Back In The U.S.S.R..mp3"],["Dear Prudence","The Beatles (White Album) [Disc 1]","musicas/02 Dear Prudence.mp3"],["Glass Onion","The Beatles (White Album) [Disc 1]","musicas/03 Glass Onion.mp3"],["Ob-La-Di, Ob-La-Da","The Beatles (White Album) [Disc 1]","musicas/04 Ob-La-Di, Ob-La-Da.mp3"],["Wild Honey Pie","The Beatles (White Album) [Disc 1]","musicas/05 Wild Honey Pie.mp3"],["The Continuing Story Of Bungalow Bill","The Beatles (White Album) [Disc 1]","musicas/06 The Continuing Story Of Bungalow Bill.mp3"],["While My Guitar Gently Weeps","The Beatles (White Album) [Disc 1]","musicas/07 While My Guitar Gently Weeps.mp3"],["Happiness Is A Warm Gun","The Beatles (White Album) [Disc 1]","musicas/08 Happiness Is A Warm Gun.mp3"],["Martha My Dear","The Beatles (White Album) [Disc 1]","musicas/09 Martha My Dear.mp3"],["I'm So Tired","The Beatles (White Album) [Disc 1]","musicas/10 I'm So Tired.mp3"],["Blackbird","The Beatles (White Album) [Disc 1]","musicas/11 Blackbird.mp3"],["Piggies","The Beatles (White Album) [Disc 1]","musicas/12 Piggies.mp3"],["Rocky Raccoon","The Beatles (White Album) [Disc 1]","musicas/13 Rocky Raccoon.mp3"],["Don't Pass Me By","The Beatles (White Album) [Disc 1]","musicas/14 Don't Pass Me By.mp3"],["Why Don't We Do It In The Road","The Beatles (White Album) [Disc 1]","musicas/15 Why Don't We Do It In The Road.mp3"],["I Will","The Beatles (White Album) [Disc 1]","musicas/16 I Will.mp3"],["Julia","The Beatles (White Album) [Disc 1]","musicas/17 Julia.mp3"],["Birthday","The Beatles (White Album) [Disc 2]","musicas/01 Birthday.mp3"],["Yer Blues","The Beatles (White Album) [Disc 2]","musicas/02 Yer Blues.mp3"],["Mother Nature's Son","The Beatles (White Album) [Disc 2]","musicas/03 Mother Nature's Son.mp3"],["Everybody's Got Something To Hide Except Me And My Monkey","The Beatles (White Album) [Disc 2]","musicas/04 Everybody's Got Something To Hide Except Me And My Monkey.mp3"],["Sexy Sadie","The Beatles (White Album) [Disc 2]","musicas/05 Sexy Sadie.mp3"],["Helter Skelter","The Beatles (White Album) [Disc 2]","musicas/06 Helter Skelter.mp3"],["Long, Long, Long","The Beatles (White Album) [Disc 2]","musicas/07 Long, Long, Long.mp3"],["Revolution 1","The Beatles (White Album) [Disc 2]","musicas/08 Revolution 1.mp3"],["Honey Pie","The Beatles (White Album) [Disc 2]","musicas/09 Honey Pie.mp3"],["Savoy Truffle","The Beatles (White Album) [Disc 2]","musicas/10 Savoy Truffle.mp3"],["Cry Baby Cry","The Beatles (White Album) [Disc 2]","musicas/11 Cry Baby Cry.mp3"],["Revolution 9","The Beatles (White Album) [Disc 2]","musicas/12 Revolution 9.mp3"],["Good Night","The Beatles (White Album) [Disc 2]","musicas/13 Good Night.mp3"],["It Won't Be Long","With The Beatles","musicas/01 It Won't Be Long.mp3"],["All I've Got To Do","With The Beatles","musicas/02 All I've Got To Do.mp3"],["All My Loving","With The Beatles","musicas/03 All My Loving.mp3"],["Don't Bother Me","With The Beatles","musicas/04 Don't Bother Me.mp3"],["Little Child","With The Beatles","musicas/05 Little Child.mp3"],["Till There Was You","With The Beatles","musicas/06 Till There Was You.mp3"],["Please Mister Postman","With The Beatles","musicas/07 Please Mister Postman.mp3"],["Roll Over Beethoven","With The Beatles","musicas/08 Roll Over Beethoven.mp3"],["Hold Me Tight","With The Beatles","musicas/09 Hold Me Tight.mp3"],["You Really Got A Hold On Me","With The Beatles","musicas/10 You Really Got A Hold On Me.mp3"],["I Wanna Be Your Man","With The Beatles","musicas/11 I Wanna Be Your Man.mp3"],["Devil In Her Heart","With The Beatles","musicas/12 Devil In Her Heart.mp3"],["Not A Second Time","With The Beatles","musicas/13 Not A Second Time.mp3"],["Money (That's What I Want)","With The Beatles","musicas/14 Money (That's What I Want).mp3"],["Yellow Submarine","Yellow Submarine","musicas/01 Yellow Submarine.mp3"],["Only A Northern Song","Yellow Submarine","musicas/02 Only A Northern Song.mp3"],["All Together Now","Yellow Submarine","musicas/03 All Together Now.mp3"],["Hey Bulldog","Yellow Submarine","musicas/04 Hey Bulldog.mp3"],["It's All Too Much","Yellow Submarine","musicas/05 It's All Too Much.mp3"],["All You Need Is Love","Yellow Submarine","musicas/06 All You Need Is Love.mp3"],["Pepperland","Yellow Submarine","musicas/07 Pepperland.mp3"],["Sea Of Time","Yellow Submarine","musicas/08 Sea Of Time.mp3"],["Sea Of Holes","Yellow Submarine","musicas/09 Sea Of Holes.mp3"],["Sea Of Monsters","Yellow Submarine","musicas/10 Sea Of Monsters.mp3"],["March Of The Meanies","Yellow Submarine","musicas/11 March Of The Meanies.mp3"],["Pepperland Laid Waste","Yellow Submarine","musicas/12 Pepperland Laid Waste.mp3"],["Yellow Submarine In Pepperland","Yellow Submarine","musicas/13 Yellow Submarine In Pepperland.mp3"],["Love Me Do","Past Masters, Volume One","musicas/01 Love Me Do.mp3"],["From Me To You","Past Masters, Volume One","musicas/02 From Me To You.mp3"],["Thank You Girl","Past Masters, Volume One","musicas/03 Thank You Girl.mp3"],["She Loves You","Past Masters, Volume One","musicas/04 She Loves You.mp3"],["I'll Get You","Past Masters, Volume One","musicas/05 I'll Get You.mp3"],["I Want To Hold Your Hand","Past Masters, Volume One","musicas/06 I Want To Hold Your Hand.mp3"],["This Boy","Past Masters, Volume One","musicas/07 This Boy.mp3"],["Komm, Gib Mir Deine Hand","Past Masters, Volume One","musicas/08 Komm, Gib Mir Deine Hand.mp3"],["Sie Liebt Dich","Past Masters, Volume One","musicas/09 Sie Liebt Dich.mp3"],["Long Tall Sally","Past Masters, Volume One","musicas/10 Long Tall Sally.mp3"],["I Call Your Name","Past Masters, Volume One","musicas/11 I Call Your Name.mp3"],["Slow Down","Past Masters, Volume One","musicas/12 Slow Down.mp3"],["Matchbox","Past Masters, Volume One","musicas/13 Matchbox.mp3"],["I Feel Fine","Past Masters, Volume One","musicas/14 I Feel Fine.mp3"],["She's A Woman","Past Masters, Volume One","musicas/15 She's A Woman.mp3"],["Bad Boy","Past Masters, Volume One","musicas/16 Bad Boy.mp3"],["Yes It Is","Past Masters, Volume One","musicas/17 Yes It Is.mp3"],["I'm Down","Past Masters, Volume One","musicas/18 I'm Down.mp3"],["Day Tripper","Past Masters, Volume Two","musicas/01 Day Tripper.mp3"],["We Can Work It Out","Past Masters, Volume Two","musicas/02 We Can Work It Out.mp3"],["Paperback Writer","Past Masters, Volume Two","musicas/03 Paperback Writer.mp3"],["Rain","Past Masters, Volume Two","musicas/04 Rain.mp3"],["Lady Madonna","Past Masters, Volume Two","musicas/05 Lady Madonna.mp3"],["The Inner Light","Past Masters, Volume Two","musicas/06 The Inner Light.mp3"],["Hey Jude","Past Masters, Volume Two","musicas/07 Hey Jude.mp3"],["Revolution","Past Masters, Volume Two","musicas/08 Revolution.mp3"],["Get Back","Past Masters, Volume Two","musicas/09 Get Back.mp3"],["Don't Let Me Down","Past Masters, Volume Two","musicas/10 Don't Let Me Down.mp3"],["The Ballad Of John And Yoko","Past Masters, Volume Two","musicas/11 The Ballad Of John And Yoko.mp3"],["Old Brown Shoe","Past Masters, Volume Two","musicas/12 Old Brown Shoe.mp3"],["Across The Universe","Past Masters, Volume Two","musicas/13 Across The Universe.mp3"],["Let It Be","Past Masters, Volume Two","musicas/14 Let It Be.mp3"],["You Know My Name (Look Up The Number)","Past Masters, Volume Two","musicas/15 You Know My Name (Look Up The Number).mp3"]]
];

// configurações de questões
let perguntasPermitidas = [];
let filtros = [];
let tipoResposta;
let questaoAtual;
let dicaAtual = 0;

// variáveis de estilo
let primeiraCor = '#4b538b', segundaCor = '#f7a21b';

// configurações de áudio
let efeitoSonoro;
let trechoAtual;
let quantidadeTrechos = 3;
let tempoReproducao = 1;
let audioTocando = false;

// variáveis de controle geral
let fimJogo = false;
let respostaDada = false;
let toleranciaResposta = 2;
let datasetComAudio = false;
let configuracoesDefinidas = false;
let multiplaEscolha = false;
let quantidadeSugestoes = 3;
let dicasUsadas = 0;
let pontuacao = 0;
let desempenho = 0;
let fasesJogadas = 0;
let anterior = null, listaAnteriores = [];
let maximoOcorrencias = 1;
let tamanhoMaximoListaAnteriores = maximoOcorrencias * dataset[1].length;
let finalizarPartidaMaxAnteriores = false;
let streak = 0;
let melhorStreak = Number.NEGATIVE_INFINITY;
let repetirQuestoesErradas = false;
let questoesErradas = [];
let jogarSemTempo = false;

let tempoInicioPergunta, tempoFinalPergunta;
let melhorTempo = Number.POSITIVE_INFINITY;

// intervalos
let intervaloPergunta, intervaloGeral;
let widthGeralAtual = 100, widthPerguntaAtual = 0;
let tempoJogoMinutos = 5;
let tempoPerguntaSegundos = 10;

const aleatorio = (min, max) => {
       return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}
const aleatorioLista = (lista, restricao = false) => {
       posicao = aleatorio(0, lista.length - 1);
       return lista[posicao];
}

const posicaoCabecalho = (cabecalho) => {
    for (let i = 0; i < dataset[0].length; i++) {
        if (cabecalho === dataset[0][i])
            return i;
    }

    return -1;
}

const algumIgual = (elemento, lista) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento)
            return true;
    }

    return false;
}

const algumIgualFiltro = (elemento, lista) => {
    for (let i = 0; i < elemento.length; i++) {
        if (algumIgual(elemento[i], lista))
            return true;
    }

    return false;
}

const arraysIguais = (a1, a2) => {
    if (!a1 || !a2)
        return false;

    if (a1.length !== a2.length)
        return false;

    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i])
            return false;
    }

    return true;
}

const copia = (elemento) => {
    return JSON.parse(JSON.stringify(elemento));
}

const ocorrenciasNaLista = (elemento, lista) => {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento || arraysIguais(lista[i], elemento))
            total++;
    }

    return total;    
}

const removeFoguinhos = () => {
    let foguinhos = document.querySelectorAll('.foguinho');
    foguinhos.forEach(foguinho => {
        foguinho.remove();
    });
}

const criaFoguinho = () => {
    let div = document.createElement('div');
    div.classList.add('foguinho');
    div.style.setProperty('left', `${aleatorio(0, 100)}%`);
    document.querySelector('body').appendChild(div);
}

const geraQuestaoAleatoria = () => {
    if (questoesErradas.length > 0 && repetirQuestoesErradas) {
        if (aleatorio(0, 1) === 1) {
            return questoesErradas.pop();
        }
    }

    let posicoesPermitidas = [];
    for (let i = 0; i < perguntasPermitidas.length; i++) {
        posicoesPermitidas.push(posicaoCabecalho(perguntasPermitidas[i]));
    }

    // o dataset possui um número infinito de questões; logo, se o usuário definir um número baixo de ocorrências por questões, uma hora não será possível mais gerar questões novas; isso acontece quando o tamanho da listaAnteriores é igual ao tamanhoMaximoListaAnteriores (que consiste no número de ocorrências por questão vezes a quantidade possível de perguntas); daí, é necessário resetar a listaAnteriores ou finalizar a partida
    if (listaAnteriores.length >= tamanhoMaximoListaAnteriores) {
        listaAnteriores = [];
        if (finalizarPartidaMaxAnteriores) {
            trataResultadoFinal();
            return;
        }
    }

    let posicaoPerguntaAleatoria, elementoAleatorio, pseudoElemento, maxIter = 1000, iter = 0;
    do {
        elementoAleatorio = aleatorioLista(dataset[1]);
        posicaoPerguntaAleatoria = aleatorio(0, elementoAleatorio.length - 1);
        // o pseudoElemento é uma forma de manter todas as informações da questão em um array, para que se possa comparar com as questões anteriores e verificar se é igual a anterior ou se já bateu o número máximo de ocorrências; afinal, a questão mesmo adquire formato json no final da função
        pseudoElemento = copia(elementoAleatorio);
        pseudoElemento.push(posicaoPerguntaAleatoria);

        iter++;

        if (iter >= maxIter) {
            alert('Muitas iterações.');
            break;
        }

    } while (!algumIgual(posicaoPerguntaAleatoria, posicoesPermitidas) || algumIgualFiltro(elementoAleatorio, filtros) || ocorrenciasNaLista(pseudoElemento, listaAnteriores) >= maximoOcorrencias || arraysIguais(pseudoElemento, anterior));

    anterior = pseudoElemento;
    listaAnteriores.push(pseudoElemento);

    let perguntaDefinida = elementoAleatorio[posicaoPerguntaAleatoria];
    let respostaDefinida = elementoAleatorio[posicaoCabecalho(tipoResposta)];
    let dicas = [];

    for (let i = 0; i < elementoAleatorio.length; i++) {
        if (!algumIgual(i, posicoesPermitidas) && i !== posicaoCabecalho(tipoResposta)) {
            let cabecalho = dataset[0][i];
            let dica = elementoAleatorio[i];

            if (tipoPergunta(dica) !== 'audio') {
                 dicas.push({
                    cabecalho,
                    dica
                });               
            }
        }
    }

    return {
        pergunta: perguntaDefinida,
        resposta: respostaDefinida,
        dicas
    };
}

const executaAudioQuestao = (nome, loop = false, trecho = 0, duracao = 1) => {
    efeitoSonoro = new Audio(nome);
    efeitoSonoro.loop = loop;
    efeitoSonoro.currentTime = trecho;
    btnPlay.querySelector('i').classList.remove('bi-play-fill');
    btnPlay.querySelector('i').classList.add('bi-pause-fill');
    efeitoSonoro.addEventListener('timeupdate', function() {
        if (efeitoSonoro.currentTime >= trecho + duracao) { // para a a reprodução se o tempo atual for maior ou igual ao tempo gerado aleatoriamente + o incremento de 1 segundo
            efeitoSonoro.pause();
            efeitoSonoro.currentTime = trecho;
            document.querySelector('#btnPlay').querySelector('i').classList.add('bi-play-fill');
            document.querySelector('#btnPlay').querySelector('i').classList.remove('bi-pause-fill');
            audioTocando = false;
        }
    });

    efeitoSonoro.play();
    audioTocando = true;
}

const executaEfeitoSonoro = (nome) => {
    efeitoSonoro = new Audio(nome);
    efeitoSonoro.play();
}

const resetaBgControles = () => {
    let controlesPlay = document.querySelectorAll('.controlesPlay div');
    controlesPlay.forEach(controlePlay => {
        controlePlay.style.backgroundColor = primeiraCor;
    });
}

const geraAudio = (quantidadeTrechos, nome = 'audio-teste.mp3') => {
    pergunta.innerHTML = '';
    let btnPlay = document.createElement('button');
    btnPlay.id = 'btnPlay';

    let iconPlay = document.createElement('i');
    iconPlay.classList.add('bi');
    iconPlay.classList.add('bi-play-fill');

    btnPlay.appendChild(iconPlay);

    btnPlay.addEventListener('click', (e) => {
        if (!audioTocando) {
            audioTocando = true;
            executaAudioQuestao(nome, false, trechoAtual, tempoReproducao);
        } else {
            if (!respostaDada) {
                audioTocando = false
                efeitoSonoro.pause();
                document.querySelector('#btnPlay').querySelector('i').classList.add('bi-play-fill');
                document.querySelector('#btnPlay').querySelector('i').classList.remove('bi-pause-fill');
            }
        }

        respostaUsuario.focus();
    });

    if (quantidadeTrechos > 1) {
        let controlesPlay = document.createElement('div');
        controlesPlay.classList.add('controlesPlay');

        const tmpEfeitoSonoro = new Audio(nome);
        tmpEfeitoSonoro.addEventListener('loadedmetadata', function() {
            let duracaoEfeitoSonoro = tmpEfeitoSonoro.duration;
            for (let i = 0; i < quantidadeTrechos; i++) {
                let controle = document.createElement('div');
                controle.setAttribute('data-inicio', aleatorio(0, duracaoEfeitoSonoro - 15))
                controle.addEventListener('click', () => {
                    dicasUsadas++;
                    resetaBgControles();
                    controle.style.backgroundColor = segundaCor;
                    trechoAtual = parseInt(controle.dataset.inicio);

                    if (!audioTocando) {
                        audioTocando = true;
                        executaAudioQuestao(nome, false, trechoAtual, tempoReproducao);
                    } else {
                        audioTocando = false
                        efeitoSonoro.pause();
                        document.querySelector('#btnPlay').querySelector('i').classList.add('bi-play-fill');
                        document.querySelector('#btnPlay').querySelector('i').classList.remove('bi-pause-fill');
                    }

                    respostaUsuario.focus();
                });

                if (i === 0)
                    controle.style.backgroundColor = segundaCor;

                controlesPlay.appendChild(controle);
            }
            pergunta.appendChild(btnPlay);
            pergunta.appendChild(controlesPlay);
        });
    }

}

const geraImagem = (src) => {
    pergunta.innerHTML = '';
    const img = document.createElement('img');
    img.src = src;
    pergunta.append(img);
}

const geraTexto = (conteudo) => {
    pergunta.innerHTML = '';
    const txt = document.createElement('p');
    txt.innerText = conteudo + '?';
    pergunta.append(txt);
}

const tipoPergunta = (pergunta) => {
    if (pergunta.search('mp3') !== -1) {
        return 'audio';
    } else if (pergunta.search('png') !== -1 || pergunta.search('jpg') !== -1) {
        return 'imagem';
    } else {
        return 'texto';
    }
}

const insereQuestaoAleatoria = () => {
    if (fimJogo) return;

    questaoAtual = geraQuestaoAleatoria();

    if (!questaoAtual) return;

    switch (tipoPergunta(questaoAtual.pergunta)) {
        case 'audio':
            geraAudio(quantidadeTrechos, questaoAtual.pergunta);
            break;
        case 'imagem':
            geraImagem(questaoAtual.pergunta);
            break;
        case 'texto':
            geraTexto(questaoAtual.pergunta);
            break;
    }
}

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const levenshteinDistance = (a, b, corte = true) => {
       if (a.length === 0) return b.length;
       if (b.length === 0) return a.length;

       a = removerAcentos(a.toLowerCase());
       b = removerAcentos(b.toLowerCase());

       if (corte) {
           if (a.length > b.length) {
                let diferenca = a.length - b.length;
                a = a.slice(0, a.length - diferenca);
           } else if (a.length < b.length) {
                let diferenca = b.length - a.length;
                b = b.slice(0, b.length - diferenca);
           }
       }

       let matrix = [];

       for (let i = 0; i <= b.length; i++) {
              matrix[i] = [i];
       }

       for (let j = 0; j <= a.length; j++) {
              matrix[0][j] = j;
       }

       for (let i = 1; i <= b.length; i++) {
              for (let j = 1; j <= a.length; j++) {
                     if (b.charAt(i - 1) == a.charAt(j - 1)) {
                            matrix[i][j] = matrix[i - 1][j - 1];
                     } else {
                            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1,
                            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                     }
              }
       }

       return matrix[b.length][a.length];
}

const distanciaPorPalavra = (a, b) => {
   a = removerAcentos(a.toLowerCase());
   b = removerAcentos(b.toLowerCase());
    
    a = a.split(' ');
    b = b.split(' ');
    let distancia = 100;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                distancia--;
            }
        }
    }

    return distancia;
}

const trataEnvio = () => {
    if (fimJogo) return;

    if (efeitoSonoro) efeitoSonoro.pause();
    sugestoes.style.display = 'none';

    if (levenshteinDistance(questaoAtual.resposta, respostaUsuario.value, corte = false) <= toleranciaResposta) {
        respostaCorreta.innerText =  "Parabéns, você acertou!";
        respostaCorreta.style.color = primeiraCor;
        pontuacao += 10 - dicasUsadas;
        
        // tempo
        const d = new Date();
        tempoFinalPergunta = d.getTime();
        let tempoResposta = tempoFinalPergunta - tempoInicioPergunta;
        if (tempoResposta < melhorTempo)
            melhorTempo = tempoResposta;

        // streak
        streak++;
        if (streak % 3 === 0) {
            criaFoguinho();
        }

        executaEfeitoSonoro('1.wav');
    } else {
        questoesErradas.push(questaoAtual);
        respostaCorreta.innerText =  `Oops! A resposta é "${questaoAtual.resposta}"!`;
        respostaCorreta.style.color = segundaCor;
        if (streak > melhorStreak)
            melhorStreak = streak;
        streak = 0;
        removeFoguinhos();
        executaEfeitoSonoro('0.wav');
    }

    respostaCorreta.style.display = 'block';
    controlesUsuario.style.display = 'none';
    widthPerguntaAtual = 0;
    window.clearInterval(intervaloPergunta);
    intervaloPergunta = null;
    fasesJogadas++;

    if (datasetComAudio) {
        if (!audioTocando) {
            executaAudioQuestao(questaoAtual.pergunta, false, trechoAtual, 10);
            audioTocando = true;
        } else {
            efeitoSonoro.pause();
            audioTocando = false;
            document.querySelector('#btnPlay').querySelector('i').classList.remove('bi-play-fill');
            document.querySelector('#btnPlay').querySelector('i').classList.add('bi-pause-fill');
            executaAudioQuestao(questaoAtual.pergunta, false, trechoAtual, 10);
        }
    }

    respostaDada = true; 
}

const trataProxima = () => {
    if (fimJogo) return;

    const d = new Date();
    tempoInicioPergunta = d.getTime();

    respostaCorreta.innerText = '???';
    respostaUsuario.value = '';
    respostaDada = false;
    respostaCorreta.style.display = 'none';
    controlesUsuario.style.display = 'block';
    dicasUsadas = 0;
    dicaAtual = 0;

    if (datasetComAudio) {
        efeitoSonoro.pause();
        audioTocando = false;
    }

    insereQuestaoAleatoria();
    setaIntervaloPergunta(tempoPerguntaSegundos);

    if (multiplaEscolha)
        insereSugestoes(quantidadeSugestoes);
}

const menorDistancia = (elemento, lista, ignorar) => {
    let maisProximo = Number.POSITIVE_INFINITY;
    let resultado;
    for (let i = 0; i < lista.length; i++) {
        let distancia = distanciaPorPalavra(elemento, lista[i]);
        if (distancia < maisProximo && !algumIgual(lista[i], ignorar)) {
            maisProximo = distancia; 
            resultado = lista[i];
        }
    }

    return resultado;
}

function pegaColuna(matriz, posicaoColuna = 0, somenteEstasPosicoes = []) {
       let coluna = [];
       for (let i = 0; i < matriz.length; i++) {
              coluna.push(matriz[i][posicaoColuna]);
       }

       return coluna;
}

const insereSugestoes = (quantidade = 5) => {
    if (fimJogo) return;
    if (respostaUsuario.value === '' && !multiplaEscolha) return;

    sugestoes.style.display = 'flex';
    sugestoes.innerHTML = '';
    let considerados = [];
    let sugestoesGeradas = [];
    let lista = pegaColuna(dataset[1], questaoAtual.posicaoResposta);
    let maxIter = 100;
    let iter = 0;
    if (multiplaEscolha) {
        let posicaoAleatoriaResposta = aleatorio(0, quantidade - 1);
        for (let i = 0; i < quantidade; i++) {
             if (i !== posicaoAleatoriaResposta) {
                let alternativa;
                iter = 0;
                do {
                    alternativa = aleatorioLista(lista);
                    iter++;
                    if (iter >= maxIter)
                        break;
                } while (alternativa === questaoAtual.resposta || algumIgual(alternativa, considerados));
                considerados.push(alternativa);
                sugestoesGeradas.push(alternativa);
             } else {
                sugestoesGeradas.push(questaoAtual.resposta);
             }
        }
    } else {
        for (let i = 0; i < quantidade; i++) {
            let sugestao = menorDistancia(respostaUsuario.value, lista, considerados);
            sugestoesGeradas.push(sugestao);
            considerados.push(sugestao);
        }        
    }

    for (let i = 0; i < quantidade; i++) {
        let span = document.createElement('span');
        span.classList.add('sugestao');
        span.innerText = sugestoesGeradas[i];

        span.addEventListener('click', () => {
            respostaUsuario.value = span.innerText;
        });

        sugestoes.appendChild(span);
    }
}

btnProxima.addEventListener('click', () => {
    if (respostaDada) {
        trataProxima();
    } else {
        respostaUsuario.focus();
    }
});
btnEnviar.addEventListener('click', trataEnvio);

document.addEventListener('keydown', e => {
    switch(e.keyCode) {
        case 13:
            respostaUsuario.focus();
            if (!respostaDada) {
                trataEnvio();
            } else {
                trataProxima();
            }
            break;
        case 9:
            e.preventDefault();
            respostaUsuario.focus();
            break;
        default:
            if (configuracoesDefinidas && !multiplaEscolha)
                insereSugestoes(quantidadeSugestoes);
    }
});

// modais
const fecharModal = document.querySelectorAll('.fecharModal');
const bgModais = document.querySelectorAll('.bgModal');

const fechaModais = () => {
    bgModais.forEach(bm => {
        bm.style.display = 'none';
    });
}

btnConfig.addEventListener('click', () => {
    configuracoes.style.display = 'flex';
});

btnDica.addEventListener('click', () => {
    if (!questaoAtual) return;

    dicasUsadas++;
    dicas.style.display = 'flex';

    if (dicaAtual < questaoAtual.dicas.length) {
        let dica = document.createElement('p');
        dica.classList.add('dica');
        
        if (tipoPergunta(questaoAtual.dicas[dicaAtual].dica) === 'imagem') {
            let img = document.createElement('img');
            img.src = questaoAtual.dicas[dicaAtual].dica;
            dica.appendChild(img);
        } else if (tipoPergunta(questaoAtual.dicas[dicaAtual].dica) === 'texto') {
            dica.innerText = `${questaoAtual.dicas[dicaAtual].cabecalho}: ${questaoAtual.dicas[dicaAtual].dica}`;
        }

        document.querySelector('#secaoDicas').innerHTML = '';
        document.querySelector('#secaoDicas').appendChild(dica);
        dicaAtual++;
    }
        
});

function elementoNaLista(elemento, lista, obterPosicao = false) {
       for (let i = 0; i < lista.length; i++) {
              if (elemento === lista[i]) {
                     if (!obterPosicao) {
                            return true;
                     } else {
                            return i;
                     }
              }
       }

       return false;      
}

function distingueValores(lista) {
       let distinguidos = [];
       for (let i = 0; i < lista.length; i++) {
              if (!elementoNaLista(lista[i], distinguidos)) {
                     distinguidos.push(lista[i]);
              }
       }

       return distinguidos;
}

function criaHTMLConfigFiltragem(cabecalho) {
    let coluna = posicaoCabecalho(cabecalho);
    let lista = pegaColuna(dataset[1], coluna);
    let distinguidos = distingueValores(lista);

    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    div.classList.add('divModal');

    h3.innerText = `Filtra ${cabecalho}`;
    div.appendChild(h3);

    for (let i = 0; i < distinguidos.length; i++) {
        div.innerHTML += `<input type="checkbox" class="cb_filtragem" id="filtragem_${cabecalho}_${distinguidos[i]}" value="${distinguidos[i]}"> <label for="filtragem_${cabecalho}_${distinguidos[i]}">${distinguidos[i]}</label>`
    }

    document.querySelector('#configFiltros').appendChild(div);
}


function criaHTMLConfigPerguntas() {
    let lista = dataset[0];

    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    div.classList.add('divModal');

    h3.innerText = "Perguntas";
    div.appendChild(h3);

    for (let i = 0; i < lista.length; i++) {
        if (i === lista.length - 1) {
            div.innerHTML += `<input checked type="checkbox" class="cb_perguntas" id="perguntas_${lista[i]}" value="${lista[i]}"> <label for="perguntas_${lista[i]}">${lista[i]}</label>`
        } else {
            div.innerHTML += `<input type="checkbox" class="cb_perguntas" id="perguntas_${lista[i]}" value="${lista[i]}"> <label for="perguntas_${lista[i]}">${lista[i]}</label>`
        }
    }

   document.querySelector('#configFiltros').appendChild(div);
}

function criaHTMLConfigResposta() {
    let lista = dataset[0];

    let h3 = document.createElement('h3');
    let select = document.createElement('select');
    let div = document.createElement('div');
    div.classList.add('divModal');

    h3.innerText = "Resposta";
    div.appendChild(h3);
    select.id = "config_resposta";

    for (let i = 0; i < lista.length; i++) {
        if (i === 0) {
            select.innerHTML += `<option selected value="${lista[i]}">${lista[i]}</option>`
        } else {
            select.innerHTML += `<option value="${lista[i]}">${lista[i]}</option>`
        }
    }

    div.appendChild(select);

    document.querySelector('#configFiltros').appendChild(div);
    configuracoes.querySelector('.modal').innerHTML += '<button id="btnIniciar">Iniciar</button>';
    document.getElementById('btnIniciar').addEventListener('click', captaConfiguracaoDefinida);
}

const trataResultadoFinal = () => {
    if (streak > melhorStreak)
        melhorStreak = streak;

    fimJogo = true;
    removeFoguinhos();
    window.clearInterval(intervaloPergunta);
    window.clearInterval(intervaloGeral);
    widthPerguntaAtual = 100;
    widthGeralAtual = 100;
    intervaloPergunta = null;
    intervaloGeral = null;
    resultadoFinal.style.display = 'flex';
    geraTexto('Que tal iniciar uma nova partida nas configurações');

    const pMelhorStreak = document.getElementById('melhorStreak');
    const pMelhorTempo = document.getElementById('melhorTempo');
    const pFasesJogadas = document.getElementById('fasesJogadas');
    const pPontuacao = document.getElementById('pontuacao');
    const pDesempenho = document.getElementById('desempenho');

    const pRecordePontuacao = document.getElementById('recordePontuacao');
    const pRecordeTempo = document.getElementById('recordeTempo');
    const pRecordeStreak = document.getElementById('recordeStreak');

    melhorTempo = melhorTempo / 1000;

    pMelhorStreak.innerText = melhorStreak;
    pMelhorTempo.innerText = `${melhorTempo} segundo(s)`;

    pFasesJogadas.innerText = fasesJogadas;
    desempenho = (pontuacao / (fasesJogadas * 10)) * 100;

    pPontuacao.innerText = pontuacao;
    pDesempenho.innerText = `${desempenho.toFixed(2)}%`;

    // define recordes
    let rp = localStorage.getItem('recordePontuacao');
    let rt = localStorage.getItem('recordeTempo');
    let rs = localStorage.getItem('recordeStreak');

    if (!rp) {
        localStorage.setItem('recordePontuacao', pontuacao);
        pRecordePontuacao.innerText = pontuacao;
    } else {
        if (parseInt(rp) < pontuacao) {
            localStorage.setItem('recordePontuacao', pontuacao);
            pRecordePontuacao.innerText = pontuacao;
        } else {
            pRecordePontuacao.innerText = rp;
        }
    }

    if (!rt) {
        localStorage.setItem('recordeTempo', melhorTempo);
        pRecordeTempo.innerText = `${melhorTempo} segundo(s)`;
    } else {
        if (melhorTempo < parseFloat(rt)) {
            localStorage.setItem('recordeTempo', melhorTempo);
            pRecordeTempo.innerText = `${melhorTempo} segundo(s)`;
        } else {
            pRecordeTempo.innerText = `${rt} segundo(s)`;
        }
    }

    if (!rs) {
        localStorage.setItem('recordeStreak', melhorStreak);
        pRecordeStreak.innerText = melhorStreak;
    } else {
        if (parseFloat(rs) < melhorStreak) {
            localStorage.setItem('recordeStreak', melhorStreak);
            pRecordeStreak.innerText = melhorStreak;
        } else {
            pRecordeStreak.innerText = rs;
        }
    }
}

btnCompartilhar.addEventListener('click', () => {
    navigator.clipboard.writeText(`💥 Resultado Final - Quiz💥\n\n🗨 Recorde de pontuação: ${localStorage.getItem('recordePontuacao')}\n🗨 Recorde de tempo: ${localStorage.getItem('recordeTempo')} segundo(s) \n🗨 Recorde de streak: ${localStorage.getItem('recordeStreak')}\n🗨 Fases jogadas: ${fasesJogadas}\n🗨 Pontuação: ${pontuacao}\n🗨 Melhor tempo: ${melhorTempo}\n🗨 Melhor streak: ${melhorStreak}\n🗨 Desempenho: ${desempenho}\n\n👉Acesse: ${window.location.href} para jogar!`);
    btnCompartilhar.innerText = 'Copiado!';
});

function setaIntervaloGeral(tempo) {
    if (jogarSemTempo) return;
    let tempoReal = ((60 * 100) / 10) * tempo;
    intervaloGeral = window.setInterval(() => {
        tempoGeral.style.width = `${widthGeralAtual}%`;
        if (widthGeralAtual > 0) {
            widthGeralAtual -= 1;
        } else {
            trataResultadoFinal();
        }
    }, tempoReal);
}

function setaIntervaloPergunta(tempo) {
    if (jogarSemTempo) return;
    let tempoReal = (tempo * 100) / 10;
    intervaloPergunta = window.setInterval(() => {
        tempoPergunta.style.width = `${widthPerguntaAtual}%`;
        if (widthPerguntaAtual < 100) {
            widthPerguntaAtual += 1;
        } else {
            trataEnvio();
        }
    }, tempoReal);
}

const captaConfiguracaoDefinida = () => {
    fimJogo = false;
    sugestoes.innerHTML = '';
    filtros = [];
    perguntasPermitidas = [];
    anterior = null;

    window.clearInterval(intervaloPergunta);
    window.clearInterval(intervaloGeral);
    intervaloPergunta = null;
    intervaloGeral = null;
    respostaCorreta.innerText = '???';
    respostaUsuario.value = '';
    respostaDada = false;
    respostaCorreta.style.display = 'none';
    controlesUsuario.style.display = 'block';
    dicasUsadas = 0;
    
    if (efeitoSonoro)
        efeitoSonoro.pause();

    const input_respostaEscrita = document.getElementById('respostaEscrita');
    const input_naoQuebra = document.getElementById('naoQuebra');
    const input_quantidadeTrechos = document.getElementById('quantidadeTrechos');
    const input_simMultiplaEscolha = document.getElementById('simMultiplaEscolha');
    const input_quantidadeSugestoes = document.getElementById('quantidadeSugestoes');
    const input_numMaxOcorrencias = document.getElementById('numMaxOcorrencias');
    const input_simFinalizar = document.getElementById('simFinalizar');
    const input_simRepetir = document.getElementById('simRepetir');
    const input_simSemTempo = document.getElementById('simSemTempo');

    maximoOcorrencias = parseInt(input_numMaxOcorrencias.value);

    if (input_simSemTempo.checked) {
        jogarSemTempo = true;
        tempoGeral.style.display = 'none';
        tempoPergunta.style.display = 'none';
        let containerTempo = document.querySelectorAll('.containerTempo');
        containerTempo.forEach(container => {
            container.style.display = 'none';
        })
    } else {
        jogarSemTempo = false;
        tempoGeral.style.display = 'block';
        tempoPergunta.style.display = 'block';
        let containerTempo = document.querySelectorAll('.containerTempo');
        containerTempo.forEach(container => {
            container.style.display = 'block';
        })        
    }

    if (input_simRepetir.checked) {
        repetirQuestoesErradas = true;
    }

    if (input_simMultiplaEscolha.checked) {
        multiplaEscolha = true;
    }

    if (input_simFinalizar.checked) {
        finalizarPartidaMaxAnteriores = true;
        listaAnteriores = [];
    }

    quantidadeSugestoes = parseInt(input_quantidadeSugestoes.value);

    if (naoQuebra.checked) {
        quantidadeTrechos = 1;
        tempoReproducao = 60;
    } else {
        quantidadeTrechos = parseInt(input_quantidadeTrechos.value);
    }

    // filtragem
    let cb_filtragem = document.querySelectorAll('.cb_filtragem');
    cb_filtragem.forEach(cb => {
        if (cb.checked) {
            filtros.push(cb.value);
        }
    });
    // perguntas
    let cb_perguntas = document.querySelectorAll('.cb_perguntas');
    cb_perguntas.forEach(cb => {
        if (cb.checked) {
            perguntasPermitidas.push(cb.value);

            if (cb.value === 'Áudio')
                datasetComAudio = true;
        }
    });
    // resposta
    let config_resposta = document.getElementById('config_resposta');
    tipoResposta = config_resposta.value;

    widthGeralAtual = 100;
    widthPerguntaAtual = 0;

    tempoGeral.style.width = '100%';
    tempoPergunta.style.width = '0';

    fasesJogadas = 0;
    pontuacao = 0;
    desempenho = 0;

    tempoJogoMinutos = parseInt(document.getElementById('tempoJogo').value);
    tempoPerguntaSegundos = parseInt(document.getElementById('tempoPorPergunta').value);

    if (tempoJogoMinutos > 9999) tempoJogoMinutos = 9999;
    if (tempoPerguntaSegundos > 9999) tempoPerguntaSegundos = 9999;

    setaIntervaloGeral(tempoJogoMinutos);
    setaIntervaloPergunta(tempoPerguntaSegundos);
    removeFoguinhos();

    configuracoesDefinidas = true;
    fechaModais();
    insereQuestaoAleatoria();
    if (multiplaEscolha)
        insereSugestoes(quantidadeSugestoes);
}

criaHTMLConfigFiltragem('Álbum');

criaHTMLConfigPerguntas();
criaHTMLConfigResposta();

configuracoes.querySelector('.fecharModal').addEventListener('click', () => {
    fechaModais();
});

dicas.querySelector('.fecharModal').addEventListener('click', () => {
    fechaModais();
});

resultadoFinal.querySelector('.fecharModal').addEventListener('click', () => {
    fechaModais();
});

document.getElementById('simSemTempo').addEventListener('click', () => {
    document.getElementById('tempoJogo').disabled = true;
    document.getElementById('tempoPorPergunta').disabled = true;
});

document.getElementById('naoSemTempo').addEventListener('click', () => {
    document.getElementById('tempoJogo').disabled = false;
    document.getElementById('tempoPorPergunta').disabled = false;
});