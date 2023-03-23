//displays date
const dateContainer = document.querySelector('.date')
const content = document.createElement('h2')
content.textContent = Date();
dateContainer.appendChild(content);

//all 78 prompt names
const promptNames = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers",
"The Chariot", "Strength", "The Hermit", "The Wheel", "Justice", "The Hanged Man", "Death", "Temperance",
"The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", " Ace of Wands",
" Two of Wands", " Three of Wands", "  Four of Wands", "  Five of Wands", "  Six of Wands",
"  Seven of Wands", "  Eight of Wands", "  Nine of Wands", "  Ten of Wands", "  Page of Wands",
"  Knight of Wands", "  Queen of Wands", "  King of Wands", "  Ace of Cups", "  Two of Cups",
"  Three of Cups", "   Four of Cups", "   Five of Cups", "  Six of Cups", "  Seven of Cups",
"  Eight of Cups", "  Nine of Cups", "  Ten of Cups", "  Page of Cups", "  Knight of Cups",
"  Queen of Cups", "  King of Cups", "  Ace of Swords", "  Two of Swords", "  Three of Swords",
"  Four of Swords", "  Five of Swords", "  Six of Swords", "  Seven of Swords", "  Eight of Swords",
"  Nine of Swords", "  Ten of Swords", "  Page of Swords", "  Knight of Swords", "  Queen of Swords",
"  King of Swords", "  Ace of Pentacles", " Two of Pentacles", "  Three of Pentacles", "  Four of Pentacles",
"  Five of Pentacles", "  Six of Pentacles", "  Seven of Pentacles", "  Eight of Pentacles", "  Nine of Pentacles",
"  Ten of Pentacles", "  Page of Pentacles", "  Knight of Pentacles", "  Queen of Pentacles", "  King of Pentacles"]

//generate random number for prompts
const randomNumber = Math.floor(Math.random()* 78);
console.log(promptNames[randomNumber]);

//display prompt name in header
const nameContainer = document.querySelector('.tarot-name')
const tarotName = document.createElement('h2')
tarotName.textContent = promptNames[randomNumber]
nameContainer.appendChild(tarotName);

//display prompt image in content section
const strippedNames = promptNames[randomNumber].split(' ').join('');
const lowerCaseNames = strippedNames.toLowerCase();
const image = document.querySelector('.tarot-card'); 
image.src = "/img/" + lowerCaseNames + ".jpg"

//all 78 prompts
const prompts = [
"How can I take a leap today?",
"How can I make the most of my talents today?",
"If I reflected, what might that achieve?",
"How could I take care of myself as though I were my own child?",
"How would I direct my day as though I were my own compassionate yet strict father figure?",
"If I imagine an experienced guide how might they direct me?",
"If I followed my heart today where might it lead me?",
"What might challenge me today and how can I adapt?",
"How can I increase my discipline?",
"Who has experience with my current obstacle and how might they assist me?",
"How does my current challenge fit into the bigger picture?",
"If I were more objective while making decisions how might that look?",
"How might my current challenge be a blessing in disguise?",
"What needs to come to an end?",
"How might combining familiar things help me create something new?",
"What enslaves me? How can I set myself free?",
"What attitudes need to be struck down before I proceed?",
"What might I do if I were less self-conscious?",
"How can I utilise my friends to help face my fears?",
"What are my highest goals?",
"If I were to reinvent myself, what would I become?",
"What does having it all mean to me and what's keeping me from that today?",
"If I clearly defined my direction, values, and goals, how might that look?",
"What values govern my decision-making process?",
"What process can I adopt to trade old bad habits for new healthy ones?",
"What kind of recognition would be most meaningful to me?",
"To what extent is my current issue worth fighting for?",
"How can I freely praise the achievements of others?",
"Are the beliefs I'm defending worth defending?",
"What would my response be a sudden change in situation?",
"At what point should I be able to let this situation go?",
"What work can I delegate or eliminate?",
"How easily do I admit my own inexperience?",
"To what extent have I defined my ultimate goal?",
"How can I draw people's attention to what we have in common?",
"How can I offer my expertise in ways that inspire others to follow me?",
"What are my feelings? How can I trust them?",
"What do I need to do in order to feel emotionally stable?",
"How can I show someone I love them?",
"To what extent is my mood blinding me to new opportunities?",
"How should I deal with loss?",
"How can I practice unconditional giving?",
"How is what I want most related to what I fear most?",
"If left in search of more, what would I be looking for?",
"If I could have anything, what would I have?",
"What role do promises play in promoting joy in my life?",
"How can I maintain enthusiasm in challenging situations?",
"How can I inspire others without pushing them to an extreme?",
"How can I move from reflection to action?",
"Can I be stoic in challenging times? If not who can I consult that can be?",
"What do I think of my own problem solving ability?",
"What information do I need to make a well-rounded decision?",
"How can I learn from the mistakes of the past?",
"How difficult is it for me to meditate?",
"How do I behave when I win? What does that say about me?",
"What are my beliefs and how might they impede my thinking?",
"How do I act when I know other are breaking the rules?",
"What resources are needed to move my obstacles?",
"If I could transmute my worry what action might I change it to?",
"Where can I seek aid when my limits are reached?",
"To what extent am I open to new information?",
"To what extent have I investigated the facts behind my situation?",
"What is the best way to say what needs to be said?",
"If I were to ask someone who knows me best what my gift is, what might they say?",
"What might be the financial impact from the decisions I've made recently?",
"How willing am I to sacrifice pleasure now so I can have more pleasure later on?",
"What's been agreed to? How well am I following through?",
"When might generosity be working against me?",
"What critical resources do I lack? How can I obtain such things in an ethical way?",
"How do I feel about charity? Both giving and recieving it.",
"To what extent have I fulfilled my own expectations?",
"What work do I do best? What about that work appeals to me most?",
"How can I break down my big problem into smaller steps?",
"How might shedding some of my possessions open room for growth?",
"What's the most practical choice I can make today?",
"What's the difference between caution and fear?",
"How do I define luxury?",
"If I was financially conservative how would I view my current situation? At what point is that valuable? At what point is that a burden?"
];
console.log(prompts.length)

//display prompt in the content section
const promptContainer = document.querySelector('.prompt')
const prompt = document.createElement('h3')
prompt.textContent = prompts[randomNumber]
promptContainer.appendChild(prompt);

//event listener for the post button click
const btn = document.querySelector('.btn-post');
btn.addEventListener('click', () => {


//get user input for current journal entry
const entryBody = document.getElementById('form-text').value;

//if there's nothing saved at the start then save an empty array
if(localStorage.getItem('data') == null){
    localStorage.setItem('data', '[]')
}

//create an object that contains all entry data
function Entry(date, title, prompt, body) {
    this.date = date
    this.title = title
    this.prompt = prompt
    this.body = body
}

const newEntry = new Entry (Date(), promptNames[randomNumber], prompts[randomNumber], entryBody)

//get old data and add it to the new data
const old_data = JSON.parse(localStorage.getItem('data'));
old_data.push(newEntry);

//save the old + new data to local storage
localStorage.setItem('data', JSON.stringify(old_data));

//add display none to the form
const formContainer = document.querySelector('.post-input')
formContainer.classList.add('d-none');

//add entry body to content area
const contentBody = document.querySelector('.content-body');
contentBody.textContent = entryBody;
contentBody.append;
});

//display all entries from my local machine
const myEntries = document.querySelector('.my-entries');
myEntries.addEventListener('click', () => {
    const localEntries = JSON.parse(localStorage.getItem('data'));
    const contentAlign = document.querySelector('.content-align');
    contentAlign.classList.add('d-none');
    const header = document.querySelector('.header');
    header.classList.add('d-none');
    for (let i = 0; i < localEntries.length; i++) {
        //if the date is undefined, don't display
        if(localEntries[i].date === undefined){
            localEntries[i].date = "entry has no date"
        } else {
        //if date is defined, display
        const contentContainer = document.querySelector('.content');
        const entryLink = document.createElement('li');
        entryLink.innerHTML = 
        `<a href="#"`
        + `id=`
        + i
        + `>`
        +`<b>`
        + localEntries[i].title
        +`</b>`
        + " "
        + localEntries[i].date.substring(0,15) +
        `</a>`;
        contentContainer.appendChild(entryLink);
        //create a unique click event listener for each entry
        const entryClick = document.getElementById(i);
        entryClick.addEventListener('click', () => {
            //show header and content again
            header.classList.remove('d-none');
            contentAlign.classList.remove('d-none');
            const formContainer = document.querySelector('.post-input')
            formContainer.classList.add('d-none');
            //update title of selected entry
            tarotName.textContent = localEntries[i].title;
            nameContainer.appendChild(tarotName);
            //update date 
            content.textContent = localEntries[i].date;
            dateContainer.appendChild(content);
            //update prompt
            prompt.textContent = localEntries[i].prompt;
            promptContainer.appendChild(prompt);
            //update entry body
            const contentBody = document.querySelector('.content-body');
            contentBody.textContent = localEntries[i].body;
            contentBody.append;
            //display prompt image in content section
            const newStrippedNames = localEntries[i].title.split(' ').join('');
            const newLowerCaseNames = newStrippedNames.toLowerCase();
            const newImage = document.querySelector('.tarot-card'); 
            newImage.src = "/img/" + newLowerCaseNames + ".jpg"

            })
        }
    }
});