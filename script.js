const aleatorio = (min, max) => {
       return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}
const aleatorioLista = (lista) => {
       let posicao = aleatorio(0, lista.length - 1);
       return lista[posicao];
}

const musicas = ["01 A Hard Day's Night", "01 Back In The U.S.S.R.", "01 Birthday", "01 Come Together", "01 Drive My Car", "01 Help!", "01 I Saw Her Standing There", "01 It Won't Be Long", "01 Magical Mystery Tour", "01 No Reply", "01 Sgt Peppers Lonely Hearts Club Band", "01 Taxman", "01 Two Of Us", "02 All I've Got To Do", "02 Dear Prudence", "02 Dig A Pony", "02 Eleanor Rigby", "02 I Should Have Known Better", "02 I'm A Loser", "02 Misery", "02 Norwegian Wood (The Bird Has Flown)", "02 Something", "02 The Fool On The Hill", "02 The Night Before", "02 With A Little Help From My Friends", "02 Yer Blues", "03 Across The Universe", "03 All My Loving", "03 Anna (Go To Him)", "03 Baby's In Black", "03 Flying", "03 Glass Onion", "03 I'm Only Sleeping", "03 If I Fell", "03 Lucy In The Sky With Diamonds", "03 Maxwell's Silver Hammer", "03 Mother Nature's Son", "03 You Won't See Me", "03 You've Got To Hide Your Love Away", "04 Blue Jay Way", "04 Chains", "04 Don't Bother Me", "04 Everybody's Got Something To Hide Except Me And My Monkey", "04 Getting Better", "04 I Me Mine", "04 I Need You", "04 I'm Happy Just To Dance With You", "04 Love You To", "04 Nowhere Man", "04 Ob-La-Di, Ob-La-Da", "04 Oh! Darling", "04 Rock And Roll Music", "05 And I Love Her", "05 Another Girl", "05 Boys", "05 Dig It", "05 Fixing A Hole", "05 Here, There And Everywhere", "05 I'll Follow The Sun", "05 Little Me", "05 Octopus's Garden", "05 Sexy Sadie", "05 Think For Yourself", "05 Wild Honey Pie", "05 Your Mother Should Know", "06 Ask Me Why", "06 Helter Skelter", "06 I Am The Walrus", "06 I Want You (She's So Heavy)", "06 Let It Be", "06 Mr. Moonlight", "06 She's Leaving Home", "06 Tell Me Why", "06 The Continuing Story Of Bungalow Bill", "06 The Word", "06 Till There Was You", "06 Yellow Submarine", "06 You're Going To Lose That Girl", "07 Being For The Benefit Of Mr Kite", "07 Can't Buy Me Love", "07 Hello Goodbye", "07 Here Comes The Sun", "07 Long, Long, Long", "07 Maggie Mae", "07 Medley_ A. Kansas City B. Hey, Hey, Hey, Hey", "07 Michelle", "07 Please Mister Postman", "07 Please Please Me", "07 She Said She Said", "07 Ticket To Ride", "07 While My Guitar Gently Weeps", "08 Act Naturally", "08 Any Time At All", "08 Because", "08 Eight Days A Week", "08 Good Day Sunshine", "08 Happiness Is A Warm Gun", "08 I've Got A Feeling", "08 Love Me Do", "08 Revolution 1", "08 Roll Over Beethoven", "08 Strawberry Fields Forever", "08 What Goes On", "08 Within You Without You", "09 And Your Bird Can Sing", "09 Girl", "09 Hold Me Tight", "09 Honey Pie", "09 I'll Cry Instead", "09 It's Only Love", "09 Martha My Dear", "09 One After 909", "09 P.S. I Love You", "09 Penny Lane", "09 When I'm Sixty-Four", "09 Words Of Love", "09 You Never Give Me Your Money", "10 Baby It's You", "10 Baby You're A Rich Man", "10 For No One", "10 Honey Don't", "10 I'm Looking Through You", "10 I'm So Tired", "10 Lovely Rita", "10 Savoy Truffle", "10 Sun King", "10 The Long And Winding Road", "10 Things We Said Today", "10 You Like Me Too Much", "10 You Really Got A Hold On Me", "11 All You Need Is Love", "11 Blackbird", "11 Cry Baby Cry", "11 Do You Want To Know A Secret", "11 Doctor Robert", "11 Every Little Thing", "11 For You Blue", "11 Good Morning Good Morning", "11 I Wanna Be Your Man", "11 In My Life", "11 Mean Mr. Mustard", "11 Tell Me What You See", "11 When I Get Home", "12 A Taste Of Honey", "12 Devil In Her Heart", "12 Get Back", "12 I Don't Want To Spoil The Party", "12 I Want To Tell You", "12 I`ve Just Seen A Face", "12 Piggies", "12 Polythene Pam", "12 Revolution 9", "12 Sgt Peppers..(Reprise)", "12 Wait", "12 You Can't Do That", "13 A Day In The Life", "13 Good Night", "13 Got To Get You Into My Life", "13 I'll Be Back", "13 If I Needed Someone", "13 Not A Second Time", "13 Rocky Raccoon", "13 She Came In Through The Bathroom Window", "13 There's A Place", "13 What You're Doing", "13 Yesterday", "14 Dizzy Miss Lizzy", "14 Don't Pass Me By", "14 Everybody's Trying To Be My Baby", "14 Golden Slumbers", "14 Money (That's What I Want)", "14 Run For Your Life", "14 Tomorrow Never Knows", "14 Twist And Shout", "15 Carry That Weight", "15 Why Don't We Do It In The Road_", "16 I Will", "16 The End", "17 Her Majesty", "17 Julia"];
const infoMusicas = [{"titulo":"","ano":"","album":"","autores":""},{"titulo":"12-Bar Original","ano":"1965","album":"Anthology 2","autores":"Lennon, McCartney, Harrison, e Starkey"},{"titulo":"A Beginning","ano":"1968","album":"Anthology 3","autores":"Martin"},{"titulo":"A Day in the Life","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"Lennon e McCartney"},{"titulo":"A Hard Day's Night","ano":"1964","album":"A Hard Day's Night","autores":"Lennon"},{"titulo":"A Shot of Rhythm and Blues","ano":"","album":"Live at the BBC","autores":""},{"titulo":"A Taste of Honey","ano":"1963","album":"Please Please Me ","autores":"Scott/Marlow"},{"titulo":"Across the Universe","ano":"1968","album":"Let It Be","autores":"Lennon"},{"titulo":"Act Naturally","ano":"1965","album":"Help! /Yesterday and Today ","autores":"Russell / Morrison"},{"titulo":"Ain't She Sweet","ano":"1961","album":"Anthology 1","autores":"Yellen / Ager"},{"titulo":"All I've Got To Do","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"Lennon"},{"titulo":"All My Loving","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"McCartney"},{"titulo":"All Things Must Pass","ano":"1969","album":"Anthology 3","autores":"Harrison"},{"titulo":"All Together Now","ano":"1967","album":"Yellow Submarine","autores":"McCartney, com Lennon"},{"titulo":"All You Need Is Love","ano":"1967","album":"Yellow Submarine","autores":"Lennon"},{"titulo":"And I Love Her","ano":"1964","album":"A Hard Day's Night","autores":"McCartney"},{"titulo":"And Your Bird Can Sing","ano":"1966","album":"Revolver / Yesterday and Today ","autores":"Lennon"},{"titulo":"Anna (Go to Him)","ano":"1963","album":"Please Please Me ","autores":"Alexander"},{"titulo":"Another Girl","ano":"1965","album":"Help!","autores":"McCartney"},{"titulo":"Any Time at All","ano":"1964","album":"A Hard Day's Night / Something New ","autores":"Lennon"},{"titulo":"Ask Me Why","ano":"1962","album":"Please Please Me ","autores":"Lennon"},{"titulo":"Baby It's You","ano":"1963","album":"Please Please Me ","autores":"Bacharach, David, Williams"},{"titulo":"Baby You're a Rich Man","ano":"1967","album":"Magical Mystery Tour","autores":"Lennon com McCartney"},{"titulo":"Baby's in Black","ano":"1964","album":"Beatles for Sale / Beatles '65 ","autores":"Lennon e McCartney"},{"titulo":"Back in the USSR","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Bad Boy","ano":"1965","album":"Past Masters, Volume One, Beatles VI ","autores":"Williams"},{"titulo":"Bad to Me","ano":"1963","album":"","autores":"Lennon"},{"titulo":"Because","ano":"1969","album":"Abbey Road","autores":"Lennon"},{"titulo":"Being for the Benefit of Mr. Kite!","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"Lennon"},{"titulo":"Bésame Mucho","ano":"1962","album":"Anthology 1","autores":"Velázquez"},{"titulo":"Birthday","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Blackbird","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Blue Jay Way","ano":"1967","album":"Magical Mystery Tour","autores":"Harrison"},{"titulo":"Boys","ano":"1963","album":"Please Please Me ","autores":"Dixon/Farrell"},{"titulo":"Can't Buy Me Love","ano":"1964","album":"A Hard Day's Night","autores":"McCartney"},{"titulo":"Carol","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Carnival of Light","ano":"1967","album":"—","autores":"McCartney e Lennon"},{"titulo":"Carry That Weight","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"Cayenne","ano":"","album":"Anthology 1","autores":"McCartney"},{"titulo":"Chains","ano":"1963","album":"Please Please Me ","autores":"Goffin / King"},{"titulo":"Christmas Time (Is Here Again)","ano":"1967","album":"","autores":"Lennon, McCartney, Harrison, e Starkey"},{"titulo":"Clarabella","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Come and Get It","ano":"1969","album":"Anthology 3","autores":"McCartney"},{"titulo":"Come Together","ano":"1969","album":"Abbey Road","autores":"Lennon"},{"titulo":"Cry Baby Cry","ano":"1968","album":"The Beatles","autores":"Lennon, com McCartney"},{"titulo":"Cry for a Shadow","ano":"1961","album":"Anthology 1","autores":"Harrison e Lennon"},{"titulo":"Crying, Waiting, Hoping","ano":"","album":"Live at the BBC","autores":"Buddy Holly"},{"titulo":"Day Tripper","ano":"1965","album":"Past Masters, Volume Two, The Beatles 1, Yesterday and Today ","autores":"Lennon e McCartney"},{"titulo":"Dear Prudence","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Devil in Her Heart","ano":"1963","album":"With the Beatles /The Beatles' Second Album ","autores":"Drapkin"},{"titulo":"Dig a Pony","ano":"1969","album":"Let It Be","autores":"Lennon"},{"titulo":"Dig It","ano":"1969","album":"Let It Be","autores":"Lennon, McCartney, Harrison e Starkey"},{"titulo":"Dizzy Miss Lizzy","ano":"1965","album":"Help! / Beatles VI ","autores":"Williams"},{"titulo":"Do You Want to Know a Secret","ano":"1963","album":"Please Please Me ","autores":"Lennon"},{"titulo":"Doctor Robert","ano":"1966","album":"Revolver /Yesterday and Today ","autores":"Lennon"},{"titulo":"Don't Bother Me","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"Harrison"},{"titulo":"Don't Ever Change","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Don't Let Me Down","ano":"1969","album":"Past Masters, Volume Two, Hey Jude /Let It Be...Naked","autores":"Lennon"},{"titulo":"Don't Pass Me By","ano":"1968","album":"The Beatles","autores":"Starkey"},{"titulo":"Drive My Car","ano":"1965","album":"Rubber Soul /Yesterday and Today ","autores":"McCartney, com Lennon"},{"titulo":"Eight Days a Week","ano":"1964","album":"Beatles for Sale /Beatles VI ","autores":"Lennon e McCartney"},{"titulo":"Eleanor Rigby","ano":"1966","album":"Revolver","autores":"McCartney"},{"titulo":"Every Little Thing","ano":"1964","album":"Beatles for Sale /Beatles VI ","autores":"McCartney"},{"titulo":"Everybody's Got Something to Hide Except Me and My Monkey","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Everybody's Trying to Be My Baby","ano":"1964","album":"Beatles for Sale / Beatles '65 ","autores":"Carl Perkins"},{"titulo":"Fixing a Hole","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney"},{"titulo":"Flying","ano":"1967","album":"Magical Mystery Tour","autores":"Harrison, Lennon, McCartney, Starkey"},{"titulo":"For No One","ano":"1966","album":"Revolver","autores":"McCartney"},{"titulo":"For You Blue","ano":"1969","album":"Let It Be","autores":"Harrison"},{"titulo":"Free as a Bird","ano":"1977 (1994)","album":"Anthology 1","autores":"Lennon, McCartney, Harrison, Starkey"},{"titulo":"From Me to You","ano":"1963","album":"Past Masters, Volume One, The Beatles 1","autores":"Lennon e McCartney"},{"titulo":"Get Back","ano":"1969","album":"Let It Be","autores":"McCartney"},{"titulo":"Getting Better","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney, com Lennon"},{"titulo":"Girl","ano":"1965","album":"Rubber Soul","autores":"Lennon"},{"titulo":"Glass Onion","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Golden Slumbers","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"Good Day Sunshine","ano":"1966","album":"Revolver","autores":"McCartney"},{"titulo":"Good Morning Good Morning","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"Lennon"},{"titulo":"Good Night","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Got to Get You into My Life","ano":"1966","album":"Revolver","autores":"McCartney"},{"titulo":"Hallelujah, I Love Her So","ano":"","album":"Anthology 1","autores":"Charles"},{"titulo":"Happiness Is a Warm Gun","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Hello, Goodbye","ano":"1967","album":"Magical Mystery Tour","autores":"McCartney"},{"titulo":"Hello Little Girl","ano":"1962","album":"Anthology 1","autores":"Lennon e McCartney"},{"titulo":"Help!","ano":"1965","album":"Help!","autores":"Lennon e McCartney"},{"titulo":"Helter Skelter","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Her Majesty","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"Here Comes the Sun","ano":"1969","album":"Abbey Road","autores":"Harrison"},{"titulo":"Here, There and Everywhere","ano":"1966","album":"Revolver","autores":"McCartney"},{"titulo":"Hey Bulldog","ano":"1968","album":"Yellow Submarine","autores":"Lennon"},{"titulo":"Hey Jude","ano":"1968","album":"Past Masters, Volume Two, The Beatles 1, Hey Jude ","autores":"McCartney"},{"titulo":"Hold Me Tight","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"McCartney"},{"titulo":"Honey Don't","ano":"1964","album":"Beatles for Sale /Beatles '65 ","autores":"Perkins"},{"titulo":"Honey Pie","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"How Do You Do It?","ano":"1962","album":"Anthology 1","autores":"Murray"},{"titulo":"I Am the Walrus","ano":"1967","album":"Magical Mystery Tour","autores":"Lennon"},{"titulo":"I Call Your Name","ano":"1964","album":"Past Masters, Volume One, The Beatles' Second Album ","autores":"Lennon"},{"titulo":"I Don't Want to Spoil the Party","ano":"1964","album":"Beatles for Sale /Beatles VI ","autores":"Lennon"},{"titulo":"I Feel Fine","ano":"1964","album":"Past Masters, Volume One, The Beatles 1, Beatles '65 ","autores":"Lennon"},{"titulo":"I Forgot to Remember to Forget","ano":"","album":"Live at the BBC","autores":""},{"titulo":"I Got a Woman","ano":"","album":"Live at the BBC","autores":""},{"titulo":"I Got to Find My Baby","ano":"","album":"Live at the BBC","autores":""},{"titulo":"I Just Don't Understand","ano":"","album":"Live at the BBC","autores":""},{"titulo":"I Me Mine","ano":"1970","album":"Let It Be","autores":"Harrison"},{"titulo":"I Need You","ano":"1965","album":"Help!","autores":"Harrison"},{"titulo":"I Saw Her Standing There","ano":"1963","album":"Please Please Me ","autores":"McCartney"},{"titulo":"I Should Have Known Better","ano":"1964","album":"A Hard Day's Night","autores":"Lennon"},{"titulo":"I Wanna Be Your Man","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"McCartney, com Lennon"},{"titulo":"I Want to Hold Your Hand","ano":"1963","album":"Past Masters, Volume One, The Beatles 1, Meet the Beatles! ","autores":"Lennon e McCartney"},{"titulo":"I Want to Tell You","ano":"1966","album":"Revolver","autores":"Harrison"},{"titulo":"I Want You (She's So Heavy)","ano":"1969","album":"Abbey Road","autores":"Lennon"},{"titulo":"I Will","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"If I Fell","ano":"1964","album":"A Hard Day's Night","autores":"Lennon"},{"titulo":"If I Needed Someone","ano":"1965","album":"Rubber Soul / Yesterday and Today ","autores":"Harrison"},{"titulo":"If You've Got Trouble","ano":"1965","album":"Anthology 2","autores":"Lennon e McCartney"},{"titulo":"I'll Be Back","ano":"1964","album":"A Hard Day's Night /Beatles '65 ","autores":"Lennon"},{"titulo":"I'll Be on My Way","ano":"","album":"Live at the BBC","autores":"Lennon e McCartney"},{"titulo":"I'll Cry Instead","ano":"1964","album":"A Hard Day's Night /Something New ","autores":"Lennon"},{"titulo":"I'll Follow the Sun","ano":"1964","album":"Beatles for Sale /Beatles '65 ","autores":"McCartney"},{"titulo":"I'll Get You","ano":"1963","album":"Past Masters, Volume One, The Beatles' Second Album ","autores":"Lennon e McCartney"},{"titulo":"I'm a Loser","ano":"1964","album":"Beatles for Sale /Beatles '65 ","autores":"Lennon"},{"titulo":"I'm Down","ano":"1965","album":"Past Masters, Volume One","autores":"McCartney"},{"titulo":"I'm Gonna Sit Right Down and Cry (Over You)","ano":"","album":"Live at the BBC","autores":""},{"titulo":"I'm Happy Just to Dance with You","ano":"1964","album":"A Hard Day's Night","autores":"Lennon"},{"titulo":"I'm Looking Through You","ano":"1965","album":"Rubber Soul","autores":"McCartney"},{"titulo":"I'm Only Sleeping","ano":"1966","album":"Revolver / Yesterday and Today ","autores":"Lennon e McCartney"},{"titulo":"I'm So Tired","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"In My Life","ano":"1965","album":"Rubber Soul","autores":"Lennon com McCartney"},{"titulo":"In Spite of All the Danger","ano":"","album":"Anthology 1","autores":"McCartney e Harrison"},{"titulo":"It Won't Be Long","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"Lennon"},{"titulo":"It's All Too Much","ano":"1967","album":"Yellow Submarine","autores":"Harrison"},{"titulo":"It's Only Love","ano":"1965","album":"Help! /Rubber Soul ","autores":"Lennon"},{"titulo":"I've Got a Feeling","ano":"1969","album":"Let It Be","autores":"McCartney, com Lennon"},{"titulo":"I've Just Seen a Face","ano":"1965","album":"Help! /Rubber Soul ","autores":"McCartney"},{"titulo":"Johnny B. Goode","ano":"","album":"Live at the BBC","autores":"Berry"},{"titulo":"Julia","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Junk","ano":"1968","album":"Anthology 3","autores":"McCartney"},{"titulo":"Kansas City/Hey, Hey, Hey, Hey","ano":"1964","album":"Beatles for Sale /Beatles VI ","autores":"Leiber / Stoller / Penniman"},{"titulo":"Keep Your Hands off My Baby","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Komm Gib Mir Deine Hand (Versão alemã de I Want to Hold Your Hand)","ano":"1964","album":"Past Masters, Volume One, Something New ","autores":"Lennon e McCartney"},{"titulo":"Lady Madonna","ano":"1968","album":"Past Masters, Volume Two, The Beatles 1, Hey Jude ","autores":"McCartney"},{"titulo":"Leave My Kitten Alone","ano":"1964","album":"Anthology 1","autores":"Turner / McDougall"},{"titulo":"Lend Me Your Comb","ano":"1963","album":"Anthology 1","autores":"Twomey / Wise / Weisman"},{"titulo":"Let It Be","ano":"1969","album":"Let It Be","autores":"McCartney"},{"titulo":"Like Dreamers Do","ano":"1962","album":"Anthology 1","autores":"McCartney"},{"titulo":"Little Child","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"Lennon e McCartney"},{"titulo":"Lonesome Tears in My Eyes","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Long, Long, Long","ano":"1968","album":"The Beatles","autores":"Harrison"},{"titulo":"Long Tall Sally","ano":"1964","album":"Past Masters, Volume One, The Beatles' Second Album ","autores":"Blackwell / Johnson / Penniman"},{"titulo":"Love Me Do","ano":"1962","album":"Please Please Me","autores":"McCartney"},{"titulo":"Love Me Tender","ano":"","album":"","autores":"Fosdick / Poulton"},{"titulo":"Love of the Loved","ano":"","album":"","autores":""},{"titulo":"Love You To","ano":"1966","album":"Revolver","autores":"Harrison"},{"titulo":"Lovely Rita","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney"},{"titulo":"Loving You","ano":"","album":"","autores":"Leiber / Stoller"},{"titulo":"Lucille","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Lucy in the Sky with Diamonds","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"Lennon, com McCartney"},{"titulo":"Maggie Mae","ano":"1969","album":"Let It Be","autores":"(Traditional) arr. Lennon, McCartney, Harrison, Starkey"},{"titulo":"Magical Mystery Tour","ano":"1967","album":"Magical Mystery Tour","autores":"McCartney"},{"titulo":"Mailman, Bring Me No More Blues","ano":"1969","album":"Anthology 3","autores":"Katz / Roberts / Clayton"},{"titulo":"Martha My Dear","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Matchbox","ano":"1964","album":"Past Masters, Volume One, Something New ","autores":"Perkins / Jefferson"},{"titulo":"Maxwell's Silver Hammer","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"Mean Mr. Mustard","ano":"1969","album":"Abbey Road","autores":"Lennon"},{"titulo":"Memphis, Tennessee","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Michelle","ano":"1965","album":"Rubber Soul","autores":"McCartney"},{"titulo":"Misery","ano":"1963","album":"Please Please Me","autores":"Lennon"},{"titulo":"Money (That's What I Want)","ano":"1963","album":"With the Beatles /The Beatles' Second Album ","autores":"Gordy"},{"titulo":"Mother Nature's Son","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Mr. Moonlight","ano":"1964","album":"Beatles for Sale /Beatles '65 ","autores":"Johnson"},{"titulo":"No Reply","ano":"1964","album":"Beatles for Sale /Beatles '65 ","autores":"Lennon, com McCartney"},{"titulo":"Norwegian Wood (This Bird Has Flown)","ano":"1965","album":"Rubber Soul","autores":"Lennon"},{"titulo":"Not a Second Time","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"Lennon"},{"titulo":"Not Guilty","ano":"1968","album":"Anthology 3","autores":"Harrison"},{"titulo":"Nothin' Shakin'","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Nowhere Man","ano":"1965","album":"Rubber Soul /Yesterday and Today ","autores":"Lennon"},{"titulo":"Ob-La-Di, Ob-La-Da","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Octopus's Garden","ano":"1969","album":"Abbey Road","autores":"Starkey, com Harrison"},{"titulo":"Oh! Darling","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"Old Brown Shoe","ano":"1969","album":"Past Masters, Volume Two, Hey Jude ","autores":"Harrison"},{"titulo":"One After 909","ano":"1969","album":"Let It Be","autores":"Lennon e McCartney"},{"titulo":"Only a Northern Song","ano":"1967","album":"Yellow Submarine","autores":"Harrison"},{"titulo":"Ooh! My Soul","ano":"","album":"Live at the BBC","autores":"Penniman"},{"titulo":"Paperback Writer","ano":"1966","album":"Past Masters, Volume Two, The Beatles 1, Hey Jude ","autores":"McCartney, com Lennon"},{"titulo":"Penny Lane","ano":"1967","album":"Magical Mystery Tour","autores":"McCartney"},{"titulo":"Piggies","ano":"1968","album":"The Beatles","autores":"Harrison"},{"titulo":"Please Mr. Postman","ano":"1963","album":"With the Beatles /The Beatles' Second Album ","autores":"Dobbins/Garrett/Holland/Bateman/Gorman"},{"titulo":"Please Please Me","ano":"1962","album":"Please Please Me ","autores":"Lennon"},{"titulo":"Polythene Pam","ano":"1969","album":"Abbey Road","autores":"Lennon"},{"titulo":"P.S. I Love You","ano":"1962","album":"Please Please Me ","autores":"McCartney"},{"titulo":"Rain","ano":"1966","album":"Past Masters, Volume Two, Hey Jude ","autores":"Lennon, com McCartney"},{"titulo":"Real Love","ano":"1979 (1995)","album":"Anthology 2","autores":"Lennon, com McCartney, Harrison e Starkey"},{"titulo":"Revolution","ano":"1968","album":"Past Masters, Volume Two, Hey Jude ","autores":"Lennon"},{"titulo":"Revolution 1","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Revolution 9","ano":"1968","album":"The Beatles","autores":"Lennon, com Harrison e Starkey"},{"titulo":"Rip It Up/Shake, Rattle and Roll/Blue Suede Shoes","ano":"1969","album":"Anthology 3","autores":"Blackwell-Marascalco (Rip It Up) /Calhoun (Shake, Rattle, and Roll) /Perkins (Blue Suede Shoes)"},{"titulo":"Rock and Roll Music","ano":"1964","album":"Beatles for Sale /Beatles '65 ","autores":"Berry"},{"titulo":"Rocky Raccoon","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Roll Over Beethoven","ano":"1964","album":"With the Beatles /The Beatles' Second Album ","autores":"Berry"},{"titulo":"Run for Your Life","ano":"1965","album":"Rubber Soul","autores":"Lennon"},{"titulo":"Savoy Truffle","ano":"1968","album":"The Beatles","autores":"Harrison"},{"titulo":"Searchin'","ano":"1962","album":"Anthology 1","autores":"Leiber / Stoller"},{"titulo":"September in the Rain","ano":"","album":"","autores":""},{"titulo":"Sexy Sadie","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Sgt. Pepper's Lonely Hearts Club Band","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney"},{"titulo":"Sgt. Pepper's Lonely Hearts Club Band (Reprise)","ano":"1968","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney"},{"titulo":"She Came in Through the Bathroom Window","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"She Loves You","ano":"1963","album":"Past Masters, Volume One, The Beatles 1, The Beatles' Second Album ","autores":"McCartney(principal compositor) e Lennon"},{"titulo":"She Said She Said","ano":"1966","album":"Revolver","autores":"Lennon"},{"titulo":"She's a Woman","ano":"1964","album":"Past Masters, Volume One, Beatles '65 ","autores":"McCartney"},{"titulo":"She's Leaving Home","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney"},{"titulo":"Shout","ano":"1964","album":"Anthology 1","autores":"Isley/Isley/Isley"},{"titulo":"Sie Liebt Dich (Versão alemã de She Loves You)","ano":"1964","album":"Past Masters, Volume One","autores":"McCartney(Compositor Principal) e Lennon"},{"titulo":"Slow Down","ano":"1964","album":"Past Masters, Volume One, Something New ","autores":"Williams"},{"titulo":"So How Come (No One Loves Me)","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Soldier of Love","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Some Other Guy","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Something","ano":"1969","album":"Abbey Road","autores":"Harrison"},{"titulo":"Step Inside Love/Los Paranoias","ano":"1968","album":"Anthology 3","autores":"McCartney (Step Inside Love) McCartney, Lennon, Harrison and Starkey (Las Paranoias)"},{"titulo":"Strawberry Fields Forever","ano":"1967","album":"Magical Mystery Tour","autores":"Lennon"},{"titulo":"Sun King","ano":"1969","album":"Abbey Road","autores":"Lennon"},{"titulo":"Sure to Fall (In Love with You)","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Sweet Little Sixteen","ano":"","album":"Live at the BBC","autores":"Berry"},{"titulo":"Take Good Care of My Baby","ano":"","album":"","autores":"Goffin / King"},{"titulo":"Taxman","ano":"1966","album":"Revolver","autores":"Harrison"},{"titulo":"Teddy Boy","ano":"1969","album":"Anthology 3","autores":"McCartney"},{"titulo":"Tell Me What You See","ano":"1965","album":"Help! /Beatles VI ","autores":"McCartney"},{"titulo":"Tell Me Why","ano":"1964","album":"A Hard Day's Night","autores":"Lennon"},{"titulo":"Thank You Girl","ano":"1963","album":"Past Masters, Volume One, The Beatles' Second Album ","autores":"Lennon e McCartney"},{"titulo":"That Means a Lot","ano":"1965","album":"Anthology 2","autores":"Lennon e McCartney"},{"titulo":"That'll Be the Day","ano":"","album":"Anthology 1","autores":"Allison/Holly/Petty"},{"titulo":"That's All Right (Mama)","ano":"","album":"Live at the BBC","autores":""},{"titulo":"The Ballad of John and Yoko","ano":"1969","album":"Past Masters, Volume Two, The Beatles 1, Hey Jude ","autores":"Lennon, com McCartney"},{"titulo":"The Continuing Story of Bungalow Bill","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"The End","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"The Fool on the Hill","ano":"1967","album":"Magical Mystery Tour","autores":"McCartney"},{"titulo":"The Hippy Hippy Shake","ano":"","album":"Live at the BBC","autores":""},{"titulo":"The Honeymoon Song","ano":"","album":"Live at the BBC","autores":""},{"titulo":"The Inner Light","ano":"1968","album":"Past Masters, Volume Two","autores":"Harrison"},{"titulo":"The Long and Winding Road","ano":"1969","album":"Let It Be","autores":"McCartney"},{"titulo":"The Night Before","ano":"1965","album":"Help!","autores":"McCartney"},{"titulo":"The Sheik of Araby","ano":"1962","album":"Anthology 1","autores":"Smith/Wheeler-Snyder"},{"titulo":"The Word","ano":"1965","album":"Rubber Soul","autores":"Lennon"},{"titulo":"There's A Place","ano":"1963","album":"Please Please Me ","autores":"Lennon"},{"titulo":"Things We Said Today","ano":"1964","album":"A Hard Day's Night /Something New ","autores":"McCartney"},{"titulo":"Think For Yourself","ano":"1965","album":"Rubber Soul","autores":"Harrison"},{"titulo":"This Boy","ano":"1963","album":"Past Masters, Volume One, Meet the Beatles! ","autores":"Lennon, com McCartney"},{"titulo":"Three Cool Cats","ano":"1962","album":"Anthology 1","autores":"Leiber / Stoller"},{"titulo":"Ticket to Ride","ano":"1965","album":"Help!","autores":"Lennon e McCartney"},{"titulo":"Till There Was You","ano":"1963","album":"With the Beatles /Meet the Beatles! ","autores":"Willson"},{"titulo":"To Know Her is to Love Her","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Tomorrow Never Knows","ano":"1966","album":"Revolver","autores":"Lennon"},{"titulo":"Too Much Monkey Business","ano":"","album":"Live at the BBC","autores":""},{"titulo":"Twist and Shout","ano":"1963","album":"Please Please Me ","autores":"Medley / Russell"},{"titulo":"Two of Us","ano":"1969","album":"Let It Be","autores":"McCartney"},{"titulo":"Wait","ano":"1965","album":"Rubber Soul","autores":"Lennon e McCartney"},{"titulo":"We Can Work It Out","ano":"1965","album":"Past Masters, Volume Two, The Beatles 1, Yesterday and Today ","autores":"McCartney, com Lennon"},{"titulo":"What Goes On","ano":"1965","album":"Rubber Soul /Yesterday and Today ","autores":"Lennon, com McCartney e Starkey"},{"titulo":"What You're Doing","ano":"1964","album":"Beatles for Sale /Beatles VI ","autores":"McCartney"},{"titulo":"What's The New Mary Jane","ano":"1968","album":"Anthology 3","autores":"Lennon"},{"titulo":"When I Get Home","ano":"1964","album":"A Hard Day's Night / Something New","autores":"Lennon"},{"titulo":"When I'm Sixty-Four","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney"},{"titulo":"While My Guitar Gently Weeps","ano":"1968","album":"The Beatles","autores":"Harrison"},{"titulo":"Why Don't We Do It in the Road?","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"Wild Honey Pie","ano":"1968","album":"The Beatles","autores":"McCartney"},{"titulo":"With a Little Help from My Friends","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"McCartney, com Lennon"},{"titulo":"Within You Without You","ano":"1967","album":"Sgt. Pepper's Lonely Hearts Club Band","autores":"Harrison"},{"titulo":"Words of Love","ano":"1964","album":"Beatles for Sale /Beatles VI ","autores":"Holly"},{"titulo":"Yellow Submarine","ano":"1966","album":"Revolver","autores":"McCartney"},{"titulo":"Yer Blues","ano":"1968","album":"The Beatles","autores":"Lennon"},{"titulo":"Yes It Is","ano":"1965","album":"Past Masters, Volume One, Beatles VI ","autores":"Lennon"},{"titulo":"Yesterday","ano":"1965","album":"Help! /Yesterday and Today ","autores":"McCartney"},{"titulo":"You Can't Do That","ano":"1964","album":"A Hard Day's Night /The Beatles' Second Album ","autores":"Lennon, com McCartney"},{"titulo":"You Know My Name (Look Up the Number)","ano":"1969","album":"Past Masters, Volume Two","autores":"Lennon"},{"titulo":"You Know What to Do","ano":"1964","album":"Anthology 1","autores":"Harrison"},{"titulo":"You Like Me Too Much","ano":"1965","album":"Help! /Beatles VI ","autores":"Harrison"},{"titulo":"You Never Give Me Your Money","ano":"1969","album":"Abbey Road","autores":"McCartney"},{"titulo":"You've Really Got a Hold on Me","ano":"1963","album":"With the Beatles /The Beatles' Second Album ","autores":"Robinson"},{"titulo":"You Won't See Me","ano":"1965","album":"Rubber Soul","autores":"McCartney"},{"titulo":"You'll Be Mine","ano":"1960","album":"Anthology 1","autores":"Lennon e McCartney"},{"titulo":"Young Blood","ano":"1963","album":"Live at the BBC","autores":"Leiber / Stoller"},{"titulo":"Your Mother Should Know","ano":"1967","album":"Magical Mystery Tour","autores":"McCartney"},{"titulo":"You're Going to Lose That Girl","ano":"1965","album":"Help!","autores":"Lennon"},{"titulo":"You've Got to Hide Your Love Away","ano":"1965","album":"Help!","autores":"Lennon"}];

function proximidade(elem1, elem2) {
	elem1 = elem1.split('');
	elem2 = elem2.split('');

	let medidor, comparador;
	if (elem1.length > elem2.length) {
		medidor = elem2;
		comparador = elem1
	} else {
		medidor = elem1;
		comparador = elem2;
	}

	let tot = 0;
	for (let i = 0; i < medidor.length; i++) {
		if (medidor[i] === comparador[i])
			tot++;
	}

	tot -= comparador.length - medidor.length;

	return tot / medidor.length;
}

function buscaInfoMusica(titulo, info) {
	let resultado;
	let maiorProximidade = Number.NEGATIVE_INFINITY;
	for (let i = 0; i < infoMusicas.length; i++) {
		let tmp = proximidade(titulo, infoMusicas[i].titulo);
		if (tmp > maiorProximidade) {
			maiorProximidade = tmp;
			resultado = infoMusicas[i][info];
		}
	}

	return resultado;
}

let musicasObj = [];
for (let i = 0; i < musicas.length; i++) {
	musicasObj.push({
		titulo_mp3: musicas[i],
		titulo_normal: musicas[i].slice(3),
		autores: buscaInfoMusica(musicas[i].slice(3), 'autores'),
		ano: buscaInfoMusica(musicas[i].slice(3), 'ano'),
		album: buscaInfoMusica(musicas[i].slice(3), 'album')
	});
}

const btnPlay = document.querySelector('#btnPlay');
const btnProxima = document.querySelector('#btnProxima');
const btnDica = document.querySelector('#btnDica');
const btnNovoTrecho = document.querySelector('#btnNovoTrecho');
const resposta = document.querySelector('#resposta');
const dicas = document.querySelector('#dicas');
const templateAudio = document.querySelector('#templateAudio');
const btnDuracao = document.querySelector('#btnDuracao');
const toast = document.querySelector('#toast');
const infoStreak = document.querySelector('#infoStreak');
const modal = document.querySelector('.bg-modal');
const fecharModal = document.querySelector('#fecharModal');
const limiteDicas = 3;
let limiteToques = 2;
let toquesUsados = 0;
let musicasTocadas = 0;
let acertos = 0;
let desempenho = 0;
let streak = 0;
let errou = false;
let houveTentativa = false;
let incrementoLimiteToques = limiteToques;
const config_tempoReproducao = document.querySelector('#config_tempoReproducao');
const btnSalvar = document.querySelector('#btnSalvar');

let pontuacao = 0;
let pontuacaoAtual = 10;
let dicasUsadas = 0;
infoStreak.textContent = streak;
document.getElementById('pontuacaoJogador').textContent = pontuacao;

btnDuracao.addEventListener('click', () => {
	if (dicasUsadas < limiteDicas) {
              pontuacaoAtual -= 1;
		incremento += 0.5;
		dicasUsadas++;
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
	dicasSorteadas = [];
	tocando = false;
	musica.innerHTML = '';
	let clone = templateAudio.content.cloneNode(true);
	musica.appendChild(clone);
	audio = document.querySelector('audio');
	musicaEscolhida = aleatorioLista(musicasObj);
	audio.setAttribute('src', `musicas/${musicaEscolhida.titulo_mp3}.mp3`);
	audio.addEventListener('loadedmetadata', function() {
		// loadedmetadata para esperar até que os metadados do arquivo de áudio sejam carregados
		tempoAleatorio = aleatorio(0, audio.duration - 15);
		audio.currentTime = tempoAleatorio; // começa a reproduzir 60 segundos após o início
		audio.addEventListener('timeupdate', function() {
			if (audio.currentTime >= tempoAleatorio + incremento) { // para a a reprodução se o tempo atual for maior ou igual ao tempo gerado aleatoriamente + o incremento de 1 segundo
				document.querySelector('#vinil img').style.animation = '';
                            audio.pause();
				btnPlay.querySelector('i').classList.add('bi-play-fill');
				btnPlay.querySelector('i').classList.remove('bi-pause-fill');
				audio.currentTime = tempoAleatorio;
				tocando = false;
			}
		});
	});
}

const exibeToast = (msg, color = '#f5be58', tempo = 2000) => {
	toast.textContent = msg;
	toast.style.display = 'block'
	toast.style.backgroundColor = color;
	setTimeout(() => {
		toast.style.display = 'none'
	}, tempo);
}

let tocando = false;
btnPlay.addEventListener('click', () => {
       if (toquesUsados < limiteToques) {
              toquesUsados++;
              if (!tocando) {
                     btnPlay.querySelector('i').classList.remove('bi-play-fill');
                     btnPlay.querySelector('i').classList.add('bi-pause-fill');
                     audio.pause();
                     audio.currentTime = tempoAleatorio;
                     audio.play();
                     tocando = true;
                     document.querySelector('#vinil img').style.animation = 'rotate 5s linear infinite';
              } else {
                     btnPlay.querySelector('i').classList.add('bi-play-fill');
                     btnPlay.querySelector('i').classList.remove('bi-pause-fill');
                     audio.pause();
                     tocando = false;
                     document.querySelector('#vinil img').style.animation = '';
              }
       } else {
              exibeToast('Você atingiu seu limite de toques para este trecho.');
       }
});

btnProxima.addEventListener('click', () => {
       if (houveTentativa) {
              document.querySelector('#btnEnviar').style.display = 'inline-block';
              document.getElementById('respostaUsuario').style.border = '3px solid #1e0c42';
              btnDica.style.display = 'inline-block';
              btnNovoTrecho.style.display = 'inline-block';
              btnDuracao.style.display = 'inline-block';
              errou = false;
              houveTentativa = false;
              desempenho = (pontuacao / (musicasTocadas * 10)) * 100 || 0;
              musicasTocadas++;
              document.getElementById('pontuacaoJogador').textContent = `${pontuacao} (${Math.round(desempenho).toFixed(0)}%)`;
              pontuacaoAtual = 10;
              document.querySelector('#vinil img').style.animation = '';
              document.querySelector('#respostaUsuario').value = '';
              dicasSorteadas = [];
              dicasUsadas = 0;
              limiteToques = 3;
              toquesUsados = 0;
              infoStreak.textContent = streak;
              incremento = incrementoInicial;
              resposta.textContent = '';
              resposta.classList.add('borrado');
              dicas.textContent = '';
              dicas.style.display = 'none';
              btnPlay.querySelector('i').classList.remove('bi-pause-fill');
              btnPlay.querySelector('i').classList.add('bi-play-fill');
              geraMusica();
              exibeToast('Uma nova música foi gerada. Boa sorte.');
       } else {
              exibeToast('Você deve palpitar antes de partir para a próxima.');
       }
});

btnNovoTrecho.addEventListener('click', () => {
	if (dicasUsadas < limiteDicas) {
              limiteToques += incrementoLimiteToques;
		tempoAleatorio = aleatorio(0, audio.duration - 15);
		exibeToast(tempoAleatorio);
		audio.currentTime = tempoAleatorio;
		dicasUsadas++;
		exibeToast(`Você tem mais ${limiteDicas - dicasUsadas} dica(s).`);
              pontuacaoAtual -= 1;
	} else {
		exibeToast('Você atingiu o limite de dicas.');
	}
});

const elementoNaLista = (elemento, lista) => {
	for (let i = 0; i < lista.length; i++) {
		if (elemento === lista[i])
			return true;
	}

	return false;
};

let dicaAtual = 0;
btnDica.addEventListener('click', () => {
	if (dicasUsadas < limiteDicas && dicaAtual < 2) {
		let li = document.createElement('li');
		let span = document.createElement('span');
		switch(dicaAtual) {
			case 0:
                            pontuacaoAtual -= 2;
				span.textContent = `${musicaEscolhida.album} (${musicaEscolhida.ano})`;
				li.textContent = `Do álbum `;
				li.appendChild(span);
				dicasSorteadas.push(0);
				break;
			case 1:
                            pontuacaoAtual -= 1;
				span.textContent = `${musicaEscolhida.autores}`;
				li.textContent = `Composta por `;
				li.appendChild(span);
				break;
		}
		dicas.style.display = 'block';
		dicas.appendChild(li);
		dicasUsadas++;
              dicaAtual++;
		exibeToast(`Você tem mais ${limiteDicas - dicasUsadas} dica(s).`);
		dicasSorteadas.push(numeroSorteado);

	} else {
		exibeToast('Você atingiu o limite de dicas ou não é possível pegar mais dicas desse tipo.');
	}
});

abrirConfig.addEventListener('click', () => {
	modal.style.display = 'flex';
});

fecharModal.addEventListener('click', () => {
	modal.style.display = 'none';
});

btnSalvar.addEventListener('click', () => {
	incremento = parseFloat(config_tempoReproducao.value)
	incrementoInicial = parseFloat(config_tempoReproducao.value);
	exibeToast('Configurações salvas.');
});

const trataEnvio = () => {
       resposta.classList.remove('borrado');
       respostaDada = document.getElementById('respostaUsuario').value;
       if (respostaDada === musicaEscolhida.titulo_normal && !errou) {
              resposta.textContent = musicaEscolhida.titulo_normal;
              incremento = 10;
              streak++;
              pontuacao += pontuacaoAtual;

              switch(streak) {
                     case 1:
                     case 2:
                            exibeToast('Parabéns, você acertou!', 'darkgreen');
                            break;
                     case 3:
                            exibeToast('Uau, é seu terceiro acerto seguido!', 'darkgreen');
                            break;
                     case 5:
                            exibeToast('Incrível, cinco acertos seguidos não é pra qualquer um!', 'darkgreen');
                            break;
                     case 7:
                            exibeToast('Fabuloso, são sete vezes sem errar!', 'darkgreen');
                            break;
                     case 10:
                            exibeToast('Estou sem palavras! DEZ acertos seguidos!', 'darkgreen');
                            break;
                     case 15:
                            exibeToast('Ok... Isso não é normal! 15 acertos seguidos!', 'darkgreen');
                            break;
                     case 25:
                            exibeToast('Isso sequer deveria ser possível! Você está trapaceando?', 'darkgreen');
                            break;
                     case 50:
                            exibeToast('Você é mesmo humano?', 'darkgreen');
                            break;
              }

              document.getElementById('respostaUsuario').style.border = '3px solid green';
       } else {
              errou = true;
              exibeToast('Oops! Você errou! Continue tentando.', 'brown');
              resposta.textContent = musicaEscolhida.titulo_normal;
              incremento = 10;
              streak = 0;
              pontuacaoAtual = 0;
              document.getElementById('respostaUsuario').style.border = '3px solid brown';
       }

       btnPlay.querySelector('i').classList.remove('bi-play-fill');
       btnPlay.querySelector('i').classList.add('bi-pause-fill');
       document.querySelector('#vinil img').style.animation = 'rotate 5s linear infinite';
       audio.pause();
       audio.currentTime = tempoAleatorio;
       audio.play();
       tocando = true;
       document.querySelector('#btnEnviar').style.display = 'none';
       btnDica.style.display = 'none';
       btnNovoTrecho.style.display = 'none';
       btnDuracao.style.display = 'none';
       houveTentativa = true;
       infoStreak.textContent = streak;
}

document.addEventListener("keydown", (event) => {
       if (event.key === "Enter") {
              trataEnvio();
       }
});
document.querySelector('#btnEnviar').addEventListener("click", trataEnvio);

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