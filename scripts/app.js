'use strict';

var language;

/*
 * Bullshit bingo!
 */
var recruitmentIpsum = {
	'en': {
		'startSentence': 'Recruitment ipsum first of all I want to apologise for contacting you randomly out of the blue.',
		'startListitem': 'Recruitment ipsum first of all I want to apologise',
		'sentences': [
			'First of all I want to apologise for contacting you randomly out of the blue.',
			'Hopefully I can differentiate myself from the rest and hopefully you can see why I made the effort to contact you.',
			'At the moment the markets Booming! Great jobs, great employers and nice luxury salaries.',
			'Now this will sound a little generic, because every man and his dog will tell you there looking for a guy with a set of skills like yours?',
			'But I really am and I have a number of options you\'d be fantastic for.',
			'Could do with speaking to when your free for 10 minutes, NO bullshit approach.',
			'I think I have a number of options you\'d love to go and meet.',
			'Either way lets have a chat?',
			'I would like to speak with you.',
			'Rather than send you a long, bumbling, recruiterish email, can I ask you to give me the benefit of the doubt and read this article I wrote today?',
			'Look forward to hearing from you.',
			'I hope you are well.',
			'I came across your profile today and I was very impressed by your experience with front-end / JavaScript development.',
			'The reason I decided to get in touch is because I am working very closely with some of the most exciting technology-centric companies in London with finding the best talent for their organisations.',
			'For this reason I wondered if you would be interested in hearing about a variety new challenges?',
			'One of the companies I am working with is one of the world\'s leading providers of communications services and solutions, serving customers in more than 170 countries.',
			'They are known globally as a major technology player – pioneering the digital advances that are shaping and driving the information age.',
			'They are looking for a number of front-end developers at mid-level, senior-level and Lead level to be members of new teams that are being created to work on business critical projects.',
			'In addition to this role, I am confident that a large number of my other clients would also be extremely interested in your profile and I would love to have an initial telephone discussion with you to find out more about you and to tell you more about the opportunities.',
			'It would also be great to have a copy of your CV to refer to during this call.',
			'I look forward to hearing from you.',
			'Get back to me with your number and best time to call, to discuss further details!',
			'I have specifically chosen to write to you, because you have mentioned angularJS on your profile and you currently work at a well-known Consultancy.',
			'If you like what you do, I might have something really interesting for you.',
			'It\'s a company that does Consutancy-type of work, however because they are a young company with 15 people they really have the time to care about YOUR personal career & development.',
			'You get a permanent contract, salary, bonus and a car. Don\'t you think it\'s time to have a chat? When can we talk?',
			'I came across you profile and I really liked it. I was wondering if you could be looking at new opportunities? I have a contract near Amsterdam starting end of June for 500 euros a day.',
			'Would it be of interest to you? If so you can send your CV to my colleague Catherine.',
			'Looking forward to hearing from you.',
			'I wanted to get in touch as i have a job opportunity in Rotterdam currently for a client of mine who is an international cloud based enterprise software company providing market leading enterprise applications platforms.',
	 		'As software engineer you will work on the front end using JavaScript, HTML5 and CSS3 to improve the enterprise software/platforms by adding new functionalities, maintaining API, developing UI components and building frameworks.',
			'Please let me know if you are interested and i can send some more information.',
			'Last week I read an interesting article "9 ways to be less annoying on LinkedIn"',
			'They used the "real life example" of meeting an interesting person in a bar, exchanging numbers and never getting back in touch.',
			'Their analogy on LinkedIn was to send out the generic "I\'d like to add you to my network" request and never following up.',
			'You are my 1st connection, however I do not know anything about you as a person and how you picture your career path?',
			'I really don’t care if you are currently looking for a job or not, but I would love to have a chat with you.',
			'This is the ultimate opportunity for frontend developers in Rotterdam to become a real expert in their field.',
			'If you are eager to be challenged developing secure platforms for a huge user spectrum, you need to read further.',
			'I came across your LinkedIn profile with genuine interest and would be very keen to make contact with you to find out about your current work situation and possible career goals & aspirations.',
			'If you are interested, I have a nice opportunity.',
			'Our team want to meet a Front-End developer who is passionate about gaming technologies, knows his job as a professional and involved in games as crazy.',
			'Playing computer games makes you happy, than you will be glad to meet the company, that is happy to make them.',
			'So in case you are interested in some new challenging opportunities, I will send you the description of the vacancy.',
			'After that we can discuss the details with you.',
			'If not, I would be glad to keep in touch with you for any future interesting vacancies.',
			'My apologies if we have contacted you but we are still looking for more Javascript developers (permanent / freelance) to complete the teams of a telecom organisation in Amsterdam and Eindhoven area.',
			'Are you interested in the details of this position? Thank you.',
			'Good communication skills are a must as you will be interacting with other software developers and project managers in a test driven environment.',
			'If not, please let me know when so I can contact you at the relevant time.',
			'I came across your profile while on the lookout for strong software engineers and was very impressed with your experience and background.',
			'I work with some of the top Tech Start-ups and Software Houses in London and the South East and am looking to build up my network of strong developers so I\'d be keen to connect so we can keep in touch for the future.',
			'While I appreciate that another recruitment contact/connection may be the last thing you need, I can assure you that I genuinely work on sourcing engineers for some of the largest, most distributed and technically challenging systems and applications in London and the South East.',
			'And if you check out my LinkedIn profile and recommendations therein I hope you will appreciate that if indeed you could be interested in a new position (either now or in the future) then it may be mutually beneficial for us to have a discussion.',
			'Now that\'s my spiel out of the way... from reading about your interests, experience and background, I do have one specific role working with a OO JavaScript and React.js to develop a SPA for a financial derivatives trading company in London.',
			'Although in finance, it’s a relaxed work environment and they use some of the latest technologies to a TDD approach in an agile development process.',
			'Its paying £55,000 - £70,000 + 15% Bonus and lots of other benefits.',
			'I thought (on the face of it anyway) it looked like a good match for your profile.',
			'As I\'m sure I\'ve intimated earlier, I appreciate you are likely to get these kind of emails all the time but with the above in mind I\'d love to connect either way and then keep in touch from there.',
			'We are growing our team and we are currently looking for a Senior UI Solutions Developer based in the Netherlands.',
			'You have a very interesting profile, your skills and experience perfectly match what I am looking for.',
			'Would you consider having an initial, informal and brief conversation about this opportunity?'
		],
		'listitems': [
			'We build a variety of products from scratch',
			'Every project is cherry-picked and needs to be innovative',
			'Working with us means to perfect your Javascript skills',
			'Amazing career progression - become a lead developer within 6 months',
			'We are confronted with questions about performance, security and usability',
			'10 days non-billable to go to trainings',
			'If you prove yourself, we are happy to offer a permanent contract',
			'You have a mentor by your that supports your technical growth in weekly meetings',
			'Your career plan will be mapped out for the entire year',
			'Own budget for conferences, books, trainings',
			'Internal monthly meetup to share knowledge, case study presentations',
			'Well-known speakers are flews over from the UK & US to talk give internal seminars',
			'+5 years JavaScript experience',
			'Experience working with JS frameworks such as Angular, NodeJS, BackboneJS',
			'HTML/CSS experience including the use of Twitter Bootstrap',
			'TDD or BDD experience',
			'Location: Amsterdam, Netherlands',
			'Rate: Negotiable depending on experience',
			'I came across your profile while on the lookout for strong software engineers and was very impressed with your experience and background.'
		]
	},
	'nl': {
		'startSentence': 'Recruitment ipsum ik weet dat je me niet kent, maar zou jij misschien contact met me op kunnen nemen via onderstaand nummer?',
		'startListitem': 'Recruitment ipsum ik weet dat je me niet kent',
		'sentences': [
			'Ik weet dat je me niet kent, maar zou jij misschien contact met me op kunnen nemen via onderstaand nummer?',
			'Voor een klant van mij ben ik op zoek naar een Front-End Developer. Sta jij hier voor open?',
			'Ik zie dat je zojuist je 4-jarig jubileum bij je huidige werkgever hebt gevierd. Zit je nog steeds op je plek?',
			'Je zult ongetwijfeld constant gebombardeerd worden met berichten, echter ik zal je vertellen waarom dit het bericht is dat telt.',
			'Wij hebben geen concurrenten.',
			'Ik bied een persoonlijke service aan.',
			'Als je nu op je plekje zit en niet naar iets nieuws zoekt, no worries.',
			'Toch denk ik dat wij elkaar zouden moeten leren kennen.',
			'Je weet nooit wat de toekomst zal brengen en voor Frontend Developers zijn wij degenen met wie je moet dealen',
			'Uitdagingen, werken met slimme mensen, kennis delen, training, ontwikkelen en/of een beter salaris?',
			'Wij hebben start-up\'s, productbedrijven, softwarebedrijven, consultancies, agencies, grote corporates.',
			'Heb je wellicht soms op de maandag, of andere dag, zoiets van, nu wil ik iets nieuws gaan doen?',
			'Of totaal iets anders. Laten wij dan een keer meeten voor een koffie. Een relatie opbouwen.',
			'Mocht dit niet het geval zijn, uiteraard geen enkel probleem.',
			'Ik zou echter dolgraag een keer met je willen spreken.',
			'Sorry voor mijn ietwat directe bericht maar ik kreeg in mijn zoektocht jouw naam door.',
			'Ik hoor goede verhalen over je en ben op dit moment samen met mijn klant/kennis op zoek naar iemand met jouw ervaring.',
			'Samen met mijn klant hebben we profielen besproken waarvan zij denken dat die op zowel inhoudelijk als sociaal vlak goed aan zouden kunnen sluiten bij hun rol en daarbij werd jouw naam genoemd.',
			'Graag zou ik in alle discretie en oriënterend een gesprek op touw zetten tussen jou en hun Development Manager.',
			'Je zit bij een mooie werkgever dus ik kan me voorstellen dat je prima op je plek zit, dan hoor ik dat ook uiteraard graag.',
			'Ik zie uit naar je reactie maar voel je ook zo vrij om mij en/of de mogelijkheid af te wimpelen.',
			'Namens een aantal klanten van ons ben ik momenteel op zoek naar een ervaren front-end developer uit de omgeving van Rotterdam.',
			'Met die reden kwam ik op je profiel terecht.',
			'Bevalt het nog? Zou je open staan voor een nieuwe uitdaging?',
			'Momenteel heb ik een aantal interessante vacatures open staan op het gebied van front-end development en wellicht dat er wat interessants tussen zit voor je.',
			'Ik werk voor een vacature site dus ik kan concreet zijn qua functie en organisatie.',
			'Ik kom graag in contact met je om de mogelijkheden te bespreken.',
			'Graag zou ik mijn netwerk uitbreiden zodat wij elkaar in de toekomst misschien van dienst kunnen zijn.',
			'Ik heb zojuist met veel interesse je Linkedin profiel bekeken.',
			'Op dit moment ben ik opzoek naar een JavaScript en Front-end ontwikkelaar.',
			'Als dit je interesse heeft gewekt dan zou ik graag een kort telefoongesprek met je inplannen.',
			'Ik zie je reactie graag tegemoet.',
			'Ik ben voor een bekend bedrijf in jouw regio op zoek naar een Senior/Lead Developer die sterk genoeg in zijn schoenen staat om hun Frontend team op te gaan zetten.',
			'Ik denk na het zien van je profiel dat je dit in je mars hebt, mag ik je meer info sturen?',
			'Ben benieuwd wat je van de vacature vindt en hoor graag van je.',
			'Dan ben ik op zoek naar jou!',
			'Ben je geïnteresseerd kijk dan even naar de bijgevoegde vacature en neem contact met me op!',
			'Via LinkedIn kwam ik jouw profiel tegen en die sluit goed aan bij de persoon die wij zoeken.',
			'Misschien ben jij op zoek naar een nieuwe uitdaging en kunnen wij je dat bieden, vandaar deze mail.',
			'We zijn een jong team dat door de vernieuwing en flexibiliteit in onze software steeds meer klanten aantrekt.',
			'Herken je jezelf daarin?',
			'Heb je zin om het produkt tot een groot succes te maken?',
			'Jouw ervaring in HTML5 en AngularJS kunnen daarin een grote rol spelen.',
			'Graag hoor ik van je of je geinteresseerd bent.',
			'Jouw kennis en ervaring sluiten goed aan bij deze functie.',
			'Heb je interesse in een nieuwe uitdaging of ben je nieuwsgierig naar de volledige functieomschrijving? Neem dan contact met mij op.',
			'Wellicht kunnen we in de (nabije) toekomst iets voor elkaar betekenen.',
			'Of wat moet een bedrijf jou bieden wil je open staan voor een nieuwe uitdaging?',
			'Bijvoorbeeld meer salaris, dichterbij huis werken, meer collega’s om mee te sparren?',
			'Vaak zijn dat de punten namelijk willen mensen switchen van baan.',
			'Ook wanneer je niet zoekende bent; ken je misschien wel iemand uit je netwerk die op zoek is naar een nieuwe baan?',
			'Ik had je al eerder verteld dat de voorwaarden ook goed zijn, ik zie echt geen reden waarom je niet in ieder geval een kop koffie zou pakken met mij.',
			'Kom toch man! Je krijgt er een spijtgarantie-certificaat bij van mij.',
			'Mail even en geef even je mobiele nummer, dan bellen we anders ook nog even.',
			'Voor onze klant die een state-of-the art eCommerce oplossing ontwikkelt, gebruikt door haar klanten wereldwijd, zijn wij op zoek naar een Lead Frontend Engineer om onderdeel uit de maken van een multi disciplinair team.',
			'Sta je momenteel open om eens verder te praten over een nieuwe job opportunity?',
			'Op dit moment ontgroeit de organisatie de "start-up" fase en heeft een grote focus op operational excellence.',
			'In deze rol help je met je technische kennis en best practices de IT organisatie te transformeren.',
			'Je hebt visie hoe de kwaliteit te verbeteren en de time to market te verkleinen.',
			'Je werkt in een DevOps team gebruik makend van Agile principes als continuous integration en deployment.',
			'Als persoon ben je enthousiast, heb je passie voor techniek, deel je graag je kennis en heb je geen 9 tot 5 mentaliteit.',
			'Ik vertel je er graag meer over.',
			'Ik ben nieuwsgierig of dit nog bevalt, of dat je er eventueel voor open zou staan om het over mogelijkheden elders te hebben.',
			'In deze functie ben je technisch expert en adviseur bij het optimaliseren van mobiele internetoplossingen bij toonaangevende klanten.',
			'Gezien jouw eerdere ervaring denk ik dat deze positie goed aan zou kunnen sluiten en interessant zou kunnen zijn voor jou.',
			'Zou je hier meer informatie over willen ontvangen?',
			'Ik kom graag met je in contact!',
			'Misschien dat je mijn bericht over het hoofd hebt gezien, of er nog niet aan toegekomen bent om te antwoorden.',
			'Zou je het ook kunnen laten weten als je geen interesse hebt? Dan weet ik waar ik aan toe ben.',
			'Je profiel op LinkedIn wekte mijn interesse vanwege je jarenlange ervaring met Javascript.',
			'Sta je momenteel open voor een nieuwe baan?',
			'Wellicht is in dat geval de vacature Javascript Developer interessant voor je.',
			'Je gaat in deze functie verder werken aan een succesvolle open-source applicatie, die onze opdrachtgever in eigen beheer heeft ontwikkeld.',
			'Je bent hierin een sparringspartner voor verschillende afdelingen (testers, architecten) waardoor je invloed op de ontwikkeling van het product groot is.',
			'Mocht je die ambitie hebben, dan is het mogelijk om als lead developer aan de slag te gaan.',
			'Je komt te werken bij een succesvolle organisatie in Delft.',
			'De organisatie kenmerkt zich door een informele werksfeer en het kennisniveau binnen de organisatie is zeer hoog.',
			'Ik hoor graag of deze functie je interesse heeft gewekt.',
			'Mocht je vragen hebben over de functie en/of onze klant, neem dan gerust even contact op via de onderstaande contactgegevens.',
			'Ik zie je reactie met belangstelling tegemoet.',
			'Ik was even benieuwd of onderstaande email goed ontvangen was en of je geïnteresseerd bent in een vacature als deze.',
			'Mocht dat zo zijn ontvang ik graag je up-to-date CV en wil ik je even telefonisch spreken of jouw wensen/ideën matchen met de vacature.',
			'Je hebt het ongetwijfeld druk momenteel maar ik wilde even checken of mijn voorgaande email wel goed is aangekomen?',
			'Mocht je interesse hebben om je eigen afdeling op te gaan zetten kom ik graag met je in contact om te kijken hoe we verder hierin kunnen gaan.',
			'Ik kwam jouw profiel net tegen. Dit ziet er goed uit!',
			'Sta jij hier voor open?',
			'Zou dit interessant voor je kunnen zijn?',
			'Gezien de front-end ervaring wilde ik toch polsen in hoeverre jij openstaat voor (bij jou) passende mogelijkheden.',
			'Het risico afgewimpeld te worden hoort erbij, maar kan het hebben.',
			'Ik zie veel aanknopingspunten met jouw profiel en denk dat dit wellicht interessant voor jou zou kunnen zijn.',
			'Mocht je niet geinteresseerd zijn dan hoor ik uiteraard ook graag van je.',
			'Vorige week heb ik je onderstaand bericht gestuurd, maar hier helaas nog geen reactie op gehad.',
			'Ken je wellicht iemand vanuit je netwerk voor wie deze positie momenteel wel interessant zou kunnen zijn?',
			'Fair enough dat je het naar je zin hebt ;)',
			'Zoek naar ontwikkelaars die volop aan de slag willen met interactie, frontend architectuur en code.',
			'De focus op techniek als basis voor een optimale gebruikerservaring.',
			'Zo ontstaan perfecte applicaties voor platformen van vandaag en die van morgen.',
			'Mijn klant werkt met top-professionals op het gebied van front-end & app development.',
			'Specialisten die de opdrachtgever en gebruiker van de applicatie willen verrassen.',
			'Altijd met de laatste techniek en inzichten in het achterhoofd.',
			'Zeker dat dit iets voor jou zou zijn Jeroen. Jij wilt toch zeker wel de frontend divisie gaan opzetten ;)?',
			'Zou er voor jou wel een baan zijn waarvan je zegt, als je dit hebt dan zou dat wel interessant voor mij kunnen zijn?',
			'Ik ben zojuist met mijn baas bij een nieuwe klant geweest.',
			'Serieuze dingen.',
			'Geweldige arbeidsvoorwaarden + een leasebudget.',
			'Ik weet dat je zei dat je je momenteel goed voelt, maar you never know ;).',
			'Ken jij toevallig iemand die dit interessant zou vinden?',
			'Dit is een nieuwe functie die we gaan creeeren en de specificaties zijn daar nog niet voor klaar.',
			'Ligt helemaal aan de persoon die we aan tafel hebben en hoe hij/zij denkt de functie in te kunnen gaan vullen.',
			'Naar aanleiding van u profiel op Linkedin, zou ik graag willen weten of u momenteel beschikbaar bent voor een nieuwe uitdaging.',
			'Mocht u binnen uw eigen netwerk nog kandidaten kennen die beschikbaar zijn? Dan verneem ik dit uiteraard graag.',
			'Voor een eindklant van ons (in de omgeving van Eindhoven) zijn we opzoek naar een Front-end ontwikkelaar.',
			'Vanwege jouw Frontend expertise en je ervaring, nodig ik je uit om te connecten.',
			'Mijn klant staat graag in contact met de beste Lead developers van Nederland, ik denk dat jij zo iemand bent ;-) ik geef je graag meer info!',
			'Graag leg ik je in dit bericht uit wat de reden is van mijn verbindingsverzoek en wat ik voor jou kan betekenen.',
			'Om deze innovatieslag te realiseren, is het IT team op zoek naar een nieuwe Lead Frontend developer (vaste dienst), ofwel een Frontend expert die zijn team mee kan nemen in deze innovatieslag!',
			'Ik heb je profiel bekeken, en vanwege jouw IT achtergrond en developer expertise verwacht ik deze functie interessant voor jou is.',
			'Op welke dag en welk moment ben je het beste te bereiken?',
			'Helaas heb ik nog geen reactie van je ontvangen.',
			'Wellicht heb je nog geen tijd gehad of is het berichtje je ontschoten.',
			'Graag ontvang ik je telefoonnummer zodat ik je meer kan vertellen over de uitdagingen die er zijn.',
			'Op welke dag en op welk moment kan ik je het beste bereiken?',
			'Je profiel is fascinerend.',
			'Je hebt waardevolle Front-end ervaring.',
			'Ik werk momenteel voor een organisatie die denk ik interessant is voor je.',
			'Voel je alsjeblieft vrij contact met me op te nemen, of laat me weten hoe ik het beste in contact kom met jou.',
			'Vanuit linked werd ik op jouw profiel geattendeerd.',
			'Reden hierachter is dat wij onze kennis op het gebied van Front End /WebTechnologies aan het bundelen- en sterk aan het vergroten zijn.',
			'De opbouw van jouw vakmanschap is precies zoals wij deze ook zien.',
			'Daarnaast lees ik dat je ervaring hebt opgebouwd met verschillende technieken waaronder javascript talen.',
			'Zijn er mogelijkheden denkbaar waaronder jij een overstap naar een succesvol bedrijf zou overwegen waar je verantwoordelijk zal zijn voor de analyse, ontwikkeling, ontwerp en realisatie van high-end front-end oplossingen?',
			'Je bent vaardig in het programmeren met javascript en verdiep je maar al te graag in nieuwe technieken die alles makkelijker maakt.',
			'Mooie code opleveren die leesbaar is, je bent niet anders gewend.',
			'Je zal verantwoordelijk zijn voor de front-end van een webapplicatie die op verschillende devices moet draaien.',
			'Mijn klant richt zich op ondersteunende afdelingen binnen een organisatie waardoor men gemakkelijker samen kan werken met hun leveranciers.',
			'Het team wordt gedreven door TDD, Continuous Integration & Delivery, Deployment en Agile.',
			'Technieken: JavaScript, Angular.JS, Gulp, Grunt, CSS, HTML, Async programmeren, best practices, design patterns.',
			'Het bovenstaande is een greep uit het geheel en er is nog veel meer te vertellen.',
			'Indien ik jouw aandacht enigszins heb kunnen trekken, vertel ik jou graag alles over deze mogelijkheid.',
			'Uiteraard aan jou om te bepalen of we vervolgens door pakken na ons gesprek.',
			'Sta je open voor meer informatie, op welk nummer zou ik je anders kunnen bereiken?'
		],
		'listitems': [
			'Je werkt samen met designers aan een grote webshop',
			'Informele cultuur, nieuwste technieken',
			'Geen hokje en veel ruimte voor ideeën',
			'Afgeronde HBO of WO opleiding',
			'Uitgebreide kennis van en ervaring met o.a. JavaScript, HTML5 en CSS3',
			'Ervaring en affiniteit met Scrum',
			'Ruimte en vrijheid om je eigen ontwikkeling te sturen',
			'Direct een contract voor onbepaalde tijd',
			'Mogelijkheid om parttime te werken',
			'Bovengemiddeld salaris',
			'Uitstekende secundaire arbeidsvoorwaarden',
			'Een ruim leasebudget',
			'Je komt te werken bij een succesvolle organisatie in Delft'
		]
	}

};



/*
 * The Magic!
 */
Array.prototype.randomElement = function () {
	var index = Math.floor(Math.random() * this.length);
	var string = this[index];
	this.splice(index, 1);

    return string;
};

var getParameterByName = function(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var getParagraph = function( amount, start, language ) {
	var i, j, sentences, paragraph, paragraphs = '';

	// copy array
	sentences = recruitmentIpsum[language].sentences.slice();

	// build all paragraphs
	for( i=0; i<amount; i++ ) {
		
		paragraph = '';

		// build single paragraph, should be longer than 300 characters
		do {
			if( i === 0 && start ) {
				paragraph += recruitmentIpsum[language].startSentence+'&nbsp;';
				start = false;
			}  else {
				// re-copy array if it's empty
				if( sentences.length === 0 ) {
					sentences = recruitmentIpsum[language].sentences.slice();
				}
				paragraph += sentences.randomElement()+'&nbsp;';
			}
		} while( paragraph.length < 350 );

		paragraphs += '<p> ' + paragraph + '</p>';
	}

	return paragraphs;
};

var getList = function( amount, start, language ) {
	var i, j, n, listitems, lists = '';

	// copy array
	listitems = recruitmentIpsum[language].listitems.slice();

	// build all lists
	for( i=0; i<amount; i++ ) {
		lists += '<ul>';
		n = Math.round( Math.random() * (5 - 3) + 3 ); // random number between 3 & 5

		// build single list
		for( j=0; j<n; j++ ) {
			if( i === 0 && j === 0 && start ) {
				lists += '<li>'+recruitmentIpsum[language].startListitem+'</li>';
			}  else {
				// re-copy array if it's empty
				if( listitems.length === 0 ) {
					listitems = recruitmentIpsum[language].listitems.slice();
				}
				lists += '<li>'+listitems.randomElement()+'</li>';
			}
		}
		lists += '</ul>';
	}

	return lists;

};

var scrollToGenerator = function() {
	var location = document.querySelector('#generator').offsetTop;
	window.scrollTo(0, location);
	console.log(location);
};

var getRecruitmentIpsum = function() {
	var amount, type, output, start = false;

	amount = document.querySelector('#amount').value;
	type = document.querySelector('.type:checked').value;
	start = document.querySelector('#start:checked');

	if( type === 'paragraphs' ) {
		output = getParagraph( amount, start, language);
	} else if( type === 'lists' ) {
		output = getList( amount, start, language);
	}

	// output
	document.querySelector('#output').innerHTML = output;

	// scroll to generator / output
	scrollToGenerator();
};

document.recruitmentForm.onsubmit = function() {
	getRecruitmentIpsum();
	return false;
};

var initialize = function() {
	language = getParameterByName('language');
	language = ['nl','en'].indexOf(language) === -1 ? 'en' : language;

	var translateElements = document.querySelectorAll('[data-lang-'+language+']');

	for( var i = 0; i < translateElements.length; ++i) {
		var translation = translateElements[i].attributes['data-lang-'+language].value;
		translateElements[i].innerHTML = translation;
	}

	getRecruitmentIpsum();
};

initialize();

