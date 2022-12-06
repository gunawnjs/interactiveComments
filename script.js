fetch('./data.json')
	.then((res) => {
		return res.json();
	})
	.then((jsonData) => {
		for(const comment of jsonData.comments){
			// console.log(comment.content);


			
			for(const reply of comment.replies){
				// console.log(reply.content)
			}
		}
	});


const comments = document.createElement('div');
const userWrapper = document.createElement('div');
const pp = document.createElement('img')
const username = document.createElement('p');
const created = document.createElement('p');
const bodyComment = document.createElement('div');
const comment = document.createElement('p');

const actionButton = document.createElement('div');
const voteButton = document.createElement('div');
const plus = document.createElement('button');
const plusLogo = document.createElement('span');
const numberVote = document.createElement('p');
const minusLogo = document.createElement('span');
const minus = document.createElement('button');

const replyWrapper = document.createElement('div');
const replyButton = document.createElement('button');
const replyLogo = document.createElement('span');
const replyName = document.createElement('p');

comments.append(userWrapper,bodyComment, actionButton);
userWrapper.append(pp, username, created);
bodyComment.append(comment);
actionButton.append(voteButton, plus, numberVote, minus);



comments.classList.add('comments');
userWrapper.classList.add('user-wrapper')
username.classList.add('username');
bodyComment.classList.add('body-comment');

actionButton.classList.add('reply-btn');
voteButton.classList.add('vote-btn');


const mdiVote = ['mdi mdi-plus-thick', 'mdi mdi-minus-thick'];
const voteBtn = []

for(let i=0; i<2; i++){
	const span = document.createElement('span');
	const button = document.createElement('button');
	button.append(span);
	span.classList.add(...mdiVote[i].split(' '))

	voteBtn.push(button)

	if(i<1){
		
	}

}

const paragraph = document.createElement('p');
voteBtn.push(paragraph);

const mediaQuaries = window.matchMedia('(max-width: 600px)');

const menu = document.getElementById('menu');
const modal = document.getElementById('modal');
const cardWrapper = document.querySelector('.card-wrapper');
const cardActiveUser = document.getElementById('userLogin');

menu.addEventListener('click', (event)=>{
	event.stopPropagation();

	if(modal.style.display != 'block'){
		modal.style.display = 'block';
	} else {
		modal.style.display = 'none';
	}
});

document.addEventListener('click', ()=>{
	modal.style.display = 'none'
})


// cardWrapper.addEventListener('click', ()=>{
// 	if(modal.style.display == 'block'){
// 		modal.style.display = 'none';
// 	}
// });


// if(!mediaQuaries.matches){
// 	//  keluar dari mobile version
// 	const voteButtons = document.querySelectorAll('.vote-btn');
// 	voteButtons.forEach((button)=>{
// 		button.style.position = 'absolute';
// 	});
	
// 	const divComments = document.querySelectorAll('.comments');
// 	const divUsers = document.querySelectorAll('.user-wrapper');

// 	const commentsWrapper = document.createElement('div');
	
// 	divUsers.forEach((user)=>{
		
// 	});

// 	divComments.forEach((comment) => {
// 		comment.style.display = 'flex';
// 		comment.style.flexDirection = 'row-reverse';

// 		commentsWrapper.classList.add('comments-wrapper');
// 		comment.append(commentsWrapper);
// 	});

// } else {
// 	console.log('mobile version')
// }

// console.log(voteBtn)
// console.log(comments)