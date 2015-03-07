
/*
 * Bullshit bingo!
 */
var recruitmentIpsum = {
	"startSentence": "Recruitment ipsum first of all I want to apologise for contacting you randomly out of the blue.",
	"startListitem": "Recruitment ipsum first of all I want to apologise",
	"sentences": [
		"First of all I want to apologise for contacting you randomly out of the blue.",
		"Hopefully I can differentiate myself from the rest and hopefully you can see why I made the effort to contact you.",
		"At the moment the markets Booming! Great jobs, great employers and nice luxury salaries.",
		"Now this will sound a little generic, because every man and his dog will tell you there looking for a guy with a set of skills like yours?",
		"But I really am and I have a number of options you'd be fantastic for.",
		"Could do with speaking to when your free for 10 minutes, NO bullshit approach.",
		"I think I have a number of options you'd love to go and meet.",
		"Either way lets have a chat?",
		"I would like to speak with you.",
		"Rather than send you a long, bumbling, recruiterish email, can I ask you to give me the benefit of the doubt and read this article I wrote today?",
		"Look forward to hearing from you.",
		"I hope you are well.",
		"I came across your profile today and I was very impressed by your experience with front-end / JavaScript development.",
		"The reason I decided to get in touch is because I am working very closely with some of the most exciting technology-centric companies in London with finding the best talent for their organisations.",
		"For this reason I wondered if you would be interested in hearing about a variety new challenges?",
		"One of the companies I am working with is one of the world's leading providers of communications services and solutions, serving customers in more than 170 countries.",
		"They are known globally as a major technology player – pioneering the digital advances that are shaping and driving the information age.",
		"They are looking for a number of front-end developers at mid-level, senior-level and Lead level to be members of new teams that are being created to work on business critical projects.",
		"In addition to this role, I am confident that a large number of my other clients would also be extremely interested in your profile and I would love to have an initial telephone discussion with you to find out more about you and to tell you more about the opportunities.",
		"It would also be great to have a copy of your CV to refer to during this call.",
		"I look forward to hearing from you.",
		"Get back to me with your number and best time to call, to discuss further details!",
		"I have specifically chosen to write to you, because you have mentioned angularJS on your profile and you currently work at a well-known Consultancy.",
		"If you like what you do, I might have something really interesting for you.",
		"It's a company that does Consutancy-type of work, however because they are a young company with 15 people they really have the time to care about YOUR personal career & development.",
		"You get a permanent contract, salary, bonus and a car. Don't you think it's time to have a chat? When can we talk?",
		"I came across you profile and I really liked it. I was wondering if you could be looking at new opportunities? I have a contract near Amsterdam starting end of June for 500 euros a day.",
		"Would it be of interest to you? If so you can send your CV to my colleague Catherine.",
		"Looking forward to hearing from you.",
		"I wanted to get in touch as i have a job opportunity in Rotterdam currently for a client of mine who is an international cloud based enterprise software company providing market leading enterprise applications platforms.",
 		"As software engineer you will work on the front end using JavaScript, HTML5 and CSS3 to improve the enterprise software/platforms by adding new functionalities, maintaining API, developing UI components and building frameworks.",
		"Please let me know if you are interested and i can send some more information.",
		"Last week I read an interesting article \"9 ways to be less annoying on LinkedIn\"",
		"They used the \"real life example\" of meeting an interesting person in a bar, exchanging numbers and never getting back in touch.",
		"Their analogy on LinkedIn was to send out the generic \"I'd like to add you to my network\" request and never following up.",
		"You are my 1st connection, however I do not know anything about you as a person and how you picture your career path?",
		"I really don’t care if you are currently looking for a job or not, but I would love to have a chat with you.",
		"This is the ultimate opportunity for frontend developers in Rotterdam to become a real expert in their field.",
		"If you are eager to be challenged developing secure platforms for a huge user spectrum, you need to read further."
	],
	"listitems": [
		"We build a variety of products from scratch",
		"Every project is cherry-picked and needs to be innovative",
		"Working with us means to perfect your Javascript skills",
		"Amazing career progression - become a lead developer within 6 months",
		"We are confronted with questions about performance, security and usability",
		"10 days non-billable to go to trainings",
		"If you prove yourself, we are happy to offer a permanent contract",
		"You have a mentor by your that supports your technical growth in weekly meetings",
		"Your career plan will be mapped out for the entire year",
		"Own budget for conferences, books, trainings",
		"Internal monthly meetup to share knowledge, case study presentations",
		"Well-known speakers are flews over from the UK & US to talk give internal seminars"
	]
}


/*
 * The Magic!
 */
Array.prototype.randomElement = function () {
	var index = Math.floor(Math.random() * this.length);
	var string = this[index];
	this.splice(index, 1);

    return string;
}

var getParagraph = function( amount, start ) {
	var i, j, n, sentences, paragraphs = "";

	// copy array
	sentences = recruitmentIpsum.sentences.slice();

	// build all paragraphs
	for( i=0; i<amount; i++ ) {
		paragraphs += "<p>";
		n = Math.floor((Math.random() * 5) + 3); // random number between 3 & 5

		// build single paragraph
		for( j=0; j<n; j++ ) {
			if( i === 0 && j === 0 && start ) {
				paragraphs += recruitmentIpsum.startSentence+"&nbsp;";
			}  else {
				// re-copy array if it's empty
				if( sentences.length === 0 ) {
					sentences = recruitmentIpsum.sentences.slice();
				}
				paragraphs += sentences.randomElement()+"&nbsp;";
			}
		}
		paragraphs += "</p>";
	}

	return paragraphs;
}

var getList = function( amount, start ) {
	var i, j, n, listitems, lists = "";

	// copy array
	listitems = recruitmentIpsum.listitems.slice();

	// build all lists
	for( i=0; i<amount; i++ ) {
		lists += "<ul>";
		n = Math.floor((Math.random() * 5) + 3); // random number between 3 & 5

		// build single list
		for( j=0; j<n; j++ ) {
			if( i === 0 && j === 0 && start ) {
				lists += "<li>"+recruitmentIpsum.startListitem+"</li>";
			}  else {
				// re-copy array if it's empty
				if( listitems.length === 0 ) {
					listitems = recruitmentIpsum.listitems.slice();
				}
				lists += "<li>"+listitems.randomElement()+"</li>";
			}
		}
		lists += "</ul>";
	}

	return lists;

}

var getRecruitmentIpsum = function() {
	var amount, type, output, start = false;

	amount = document.querySelector("#amount").value;
	type = document.querySelector(".type:checked").value;
	start = document.querySelector("#start:checked");

	if( type === 'paragraphs' ) {
		output = getParagraph( amount, start);
	} else if( type === 'lists' ) {
		output = getList( amount, start);
	}

	// output
	document.querySelector("#output").innerHTML = output;
}