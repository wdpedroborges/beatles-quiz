const aleatorio = (min, max) => {
       return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}
const aleatorioLista = (lista) => {
       let posicao = aleatorio(0, lista.length - 1);
       return lista[posicao];
}

const musicas = ["01 A Hard Day's Night", "01 Back In The U.S.S.R.", "01 Birthday", "01 Come Together", "01 Day Tripper", "01 Drive My Car", "01 Help!", "01 I Saw Her Standing There", "01 It Won't Be Long", "01 Love Me Do", "01 Magical Mystery Tour", "01 No Reply", "01 Sgt Peppers Lonely Hearts Club Band", "01 Taxman", "01 Two Of Us", "01 Yellow Submarine", "02 All I've Got To Do", "02 Dear Prudence", "02 Dig A Pony", "02 Eleanor Rigby", "02 From Me To You", "02 I Should Have Known Better", "02 I'm A Loser", "02 Misery", "02 Norwegian Wood (The Bird Has Flown)", "02 Only A Northern Song", "02 Something", "02 The Fool On The Hill", "02 The Night Before", "02 We Can Work It Out", "02 With A Little Help From My Friends", "02 Yer Blues", "03 Across The Universe", "03 All My Loving", "03 All Together Now", "03 Anna (Go To Him)", "03 Baby's In Black", "03 Flying", "03 Glass Onion", "03 I'm Only Sleeping", "03 If I Fell", "03 Lucy In The Sky With Diamonds", "03 Maxwell's Silver Hammer", "03 Mother Nature's Son", "03 Paperback Writer", "03 Thank You Girl", "03 You Won't See Me", "03 You've Got To Hide Your Love Away", "04 Blue Jay Way", "04 Chains", "04 Don't Bother Me", "04 Everybody's Got Something To Hide Except Me And My Monkey", "04 Getting Better", "04 Hey Bulldog", "04 I Me Mine", "04 I Need You", "04 I'm Happy Just To Dance With You", "04 Love You To", "04 Nowhere Man", "04 Ob-La-Di, Ob-La-Da", "04 Oh! Darling", "04 Rain", "04 Rock And Roll Music", "04 She Loves You", "05 And I Love Her", "05 Another Girl", "05 Boys", "05 Dig It", "05 Fixing A Hole", "05 Here, There And Everywhere", "05 I'll Follow The Sun", "05 I'll Get You", "05 It's All Too Much", "05 Lady Madonna", "05 Little Me", "05 Octopus's Garden", "05 Sexy Sadie", "05 Think For Yourself", "05 Wild Honey Pie", "05 Your Mother Should Know", "06 All You Need Is Love", "06 Ask Me Why", "06 Helter Skelter", "06 I Am The Walrus", "06 I Want To Hold Your Hand", "06 I Want You (She's So Heavy)", "06 Let It Be", "06 Mr. Moonlight", "06 She's Leaving Home", "06 Tell Me Why", "06 The Continuing Story Of Bungalow Bill", "06 The Inner Light", "06 The Word", "06 Till There Was You", "06 Yellow Submarine", "06 You're Going To Lose That Girl", "07 Being For The Benefit Of Mr Kite", "07 Can't Buy Me Love", "07 Hello Goodbye", "07 Here Comes The Sun", "07 Hey Jude", "07 Long, Long, Long", "07 Maggie Mae", "07 Medley_ A. Kansas City B. Hey, Hey, Hey, Hey", "07 Michelle", "07 Pepperland", "07 Please Mister Postman", "07 Please Please Me", "07 She Said She Said", "07 This Boy", "07 Ticket To Ride", "07 While My Guitar Gently Weeps", "08 Act Naturally", "08 Any Time At All", "08 Because", "08 Eight Days A Week", "08 Good Day Sunshine", "08 Happiness Is A Warm Gun", "08 I've Got A Feeling", "08 Komm, Gib Mir Deine Hand", "08 Love Me Do", "08 Revolution 1", "08 Revolution", "08 Roll Over Beethoven", "08 Sea Of Time", "08 Strawberry Fields Forever", "08 What Goes On", "08 Within You Without You", "09 And Your Bird Can Sing", "09 Get Back", "09 Girl", "09 Hold Me Tight", "09 Honey Pie", "09 I'll Cry Instead", "09 It's Only Love", "09 Martha My Dear", "09 One After 909", "09 P.S. I Love You", "09 Penny Lane", "09 Sea Of Holes", "09 Sie Liebt Dich", "09 When I'm Sixty-Four", "09 Words Of Love", "09 You Never Give Me Your Money", "10 Baby It's You", "10 Baby You're A Rich Man", "10 Don't Let Me Down", "10 For No One", "10 Honey Don't", "10 I'm Looking Through You", "10 I'm So Tired", "10 Long Tall Sally", "10 Lovely Rita", "10 Savoy Truffle", "10 Sea Of Monsters", "10 Sun King", "10 The Long And Winding Road", "10 Things We Said Today", "10 You Like Me Too Much", "10 You Really Got A Hold On Me", "11 All You Need Is Love", "11 Blackbird", "11 Cry Baby Cry", "11 Do You Want To Know A Secret", "11 Doctor Robert", "11 Every Little Thing", "11 For You Blue", "11 Good Morning Good Morning", "11 I Call Your Name", "11 I Wanna Be Your Man", "11 In My Life", "11 March Of The Meanies", "11 Mean Mr. Mustard", "11 Tell Me What You See", "11 The Ballad Of John And Yoko", "11 When I Get Home", "12 A Taste Of Honey", "12 Devil In Her Heart", "12 Get Back", "12 I Don't Want To Spoil The Party", "12 I Want To Tell You", "12 I`ve Just Seen A Face", "12 Old Brown Shoe", "12 Pepperland Laid Waste", "12 Piggies", "12 Polythene Pam", "12 Revolution 9", "12 Sgt Peppers..(Reprise)", "12 Slow Down", "12 Wait", "12 You Can't Do That", "13 A Day In The Life", "13 Across The Universe", "13 Good Night", "13 Got To Get You Into My Life", "13 I'll Be Back", "13 If I Needed Someone", "13 Matchbox", "13 Not A Second Time", "13 Rocky Raccoon", "13 She Came In Through The Bathroom Window", "13 There's A Place", "13 What You're Doing", "13 Yellow Submarine In Pepperland", "13 Yesterday", "14 Dizzy Miss Lizzy", "14 Don't Pass Me By", "14 Everybody's Trying To Be My Baby", "14 Golden Slumbers", "14 I Feel Fine", "14 Let It Be", "14 Money (That's What I Want)", "14 Run For Your Life", "14 Tomorrow Never Knows", "14 Twist And Shout", "15 Carry That Weight", "15 She's A Woman", "15 Why Don't We Do It In The Road_", "15 You Know My Name (Look Up The Number)", "16 Bad Boy", "16 I Will", "16 The End", "17 Her Majesty", "17 Julia", "17 Yes It Is", "18 I'm Down"];

const btnRevelarResposta = document.querySelector('#btnRevelarResposta');
const btnPlay = document.querySelector('#btnPlay');
const btnProxima = document.querySelector('#btnProxima');
const btnDica = document.querySelector('#btnDica');
const btnNovoTrecho = document.querySelector('#btnNovoTrecho');
const resposta = document.querySelector('#resposta');
const dicas = document.querySelector('#dicas');
const templateAudio = document.querySelector('#templateAudio');
const btnDuracao = document.querySelector('#btnDuracao');
const toast = document.querySelector('#toast');
const infoDicas = document.querySelector('#infoDicas');
const limiteDicas = 3;
let dicasUsadas = 0;
infoDicas.textContent = dicasUsadas;

btnDuracao.addEventListener('click', () => {
	if (dicasUsadas < limiteDicas) {
		incremento += 1.5;
		dicasUsadas++;
		infoDicas.textContent = dicasUsadas;
		exibeToast(`Agora a música vai tocar por ${incremento} segundos. Você tem mais ${limiteDicas - dicasUsadas} dica(s)`);
	} else {
		exibeToast('Você atingiu o seu limite de dicas.');
	}
});

let musica = document.querySelector('#musica');
let incremento = 1;
let incrementoInicial = incremento;
let musicaEscolhida, audio, tempoAleatorio;

const geraMusica = () => {
	musica.innerHTML = '';
	let clone = templateAudio.content.cloneNode(true);
	musica.appendChild(clone);
	audio = document.querySelector('audio');
	musicaEscolhida = aleatorioLista(musicas);
	audio.setAttribute('src', `beatles-musicas/${musicaEscolhida}.mp3`);
	audio.addEventListener('loadedmetadata', function() {
		// loadedmetadata para esperar até que os metadados do arquivo de áudio sejam carregados
		tempoAleatorio = aleatorio(0, audio.duration - 15);
		audio.currentTime = tempoAleatorio; // começa a reproduzir 60 segundos após o início
		audio.addEventListener('timeupdate', function() {
			if (audio.currentTime >= tempoAleatorio + incremento) { // para a a reprodução se o tempo atual for maior ou igual ao tempo gerado aleatoriamente + o incremento de 1 segundo
				audio.pause();
				btnPlay.querySelector('i').classList.add('bi-play-fill');
				btnPlay.querySelector('i').classList.remove('bi-pause-fill');
				audio.currentTime = tempoAleatorio;
			}
		});
	});
}

const exibeToast = (msg, color = '#079ea6', tempo = 2000) => {
	toast.textContent = msg;
	toast.style.display = 'block'
	toast.style.backgroundColor = color;
	setTimeout(() => {
		toast.style.display = 'none'
	}, tempo);
}

let tocando = false;
btnPlay.addEventListener('click', () => {
	if (!tocando) {
		btnPlay.querySelector('i').classList.remove('bi-play-fill');
		btnPlay.querySelector('i').classList.add('bi-pause-fill');
		audio.pause();
		audio.currentTime = tempoAleatorio;
		audio.play();
		tocando = true;	
	} else {
		btnPlay.querySelector('i').classList.add('bi-play-fill');
		btnPlay.querySelector('i').classList.remove('bi-pause-fill');
		audio.pause();
		tocando = false;
	}
});

btnRevelarResposta.addEventListener('click', () => {
	resposta.textContent = musicaEscolhida;
	resposta.style.display = 'block';
	incremento = 10;
	btnPlay.querySelector('i').classList.remove('bi-play-fill');
	btnPlay.querySelector('i').classList.add('bi-pause-fill');
	audio.pause();
	audio.currentTime = tempoAleatorio;
	audio.play();
	tocando = true;
	exibeToast('A música tocará por 10 segundos, agora que você revelou a resposta.')
});

btnProxima.addEventListener('click', () => {
	dicasUsadas = 0;
	jaFoi = false;
	dicaAnterior = 0;
	incremento = incrementoInicial;
	resposta.textContent = '';
	dicas.textContent = '';
	resposta.style.display = 'none';
	dicas.style.display = 'none';
	btnPlay.querySelector('i').classList.remove('bi-pause-fill');
	btnPlay.querySelector('i').classList.add('bi-play-fill');
	geraMusica();
	exibeToast('Uma nova música foi gerada. Boa sorte.');
});

btnNovoTrecho.addEventListener('click', () => {
	if (dicasUsadas < limiteDicas) {
		tempoAleatorio = aleatorio(0, audio.duration - 15);
		exibeToast(tempoAleatorio);
		audio.currentTime = tempoAleatorio;
		dicasUsadas++;
		exibeToast(`Você tem mais ${limiteDicas - dicasUsadas} dica(s).`);
		infoDicas.textContent = dicasUsadas;
	} else {
		exibeToast('Você atingiu o limite de dicas.');
	}
});

let dicaAnterior = 0, jaFoi = false;
btnDica.addEventListener('click', () => {
	if (dicasUsadas < limiteDicas) {
		dicas.style.display = 'block';
		let tmp = musicaEscolhida.split(' ');
		if (tmp.length <= 2) {
			tmp = tmp[1].split('');
		} else {
			if (!jaFoi) {
				jaFoi = true;
				dicaAnterior++;
			}
		}

		if (dicaAnterior < tmp.length) {
			dicas.textContent += `${tmp[dicaAnterior]} `;
			dicaAnterior++;
		}
		dicasUsadas++;
		exibeToast(`Você tem mais ${limiteDicas - dicasUsadas} dica(s).`);
		infoDicas.textContent = dicasUsadas;
	} else {
		exibeToast('Você atingiu o limite de dicas.');
	}
});

geraMusica();

// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const audioSrc = "musicas/Because.mp3";

// async function tmp() {
// 	const audioData = await fetchAudio(audioSrc);
// 	audioContext.decodeAudioData(audioData, onDecoded, onDecodeError);
// }

// function fetchAudio(url) {
//   return new Promise((resolve, reject) => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", url, true);
// 	request.responseType = "arraybuffer";
// 	request.onload = () => resolve(request.response);
// 	request.onerror = (e) => reject(e);
// 	request.send();
//   });
// }

// function onDecoded(buffer) {
// 	// Play the song
// 	console.log("Got the decoded buffer now play the song", buffer);
// 	const source = audioContext.createBufferSource();
// 	source.buffer = buffer;
// 	source.connect(audioContext.destination);
// 	source.loop = true;
// 	source.start();
// }

// function onDecodeError(e) {
// 	console.log("Error decoding buffer: " + e.message);
// 	console.log(e);
// }

// tmp();