
let indianTitles = ["The Magical Auto Rickshaw Ride","The Curious Case of the Disappearing Samosas"];
let story1 = `Once upon a time in the bustling streets of Mumbai, there was an auto-rickshaw driver named Raju. Raju's auto-rickshaw was no ordinary vehicle; it had a mind of its own. One fine morning, Raju hopped into his auto-rickshaw, and to his amazement, it started talking.

Auto: "Good morning, Raju! Where would you like to go today?"

Raju, completely taken aback, replied, "Um, take me to the Gateway of India, I guess."

The auto-rickshaw zoomed through the streets, dodging traffic effortlessly. But that was not all; it could also fly. Raju found himself soaring over Marine Drive, taking in breathtaking views of the Arabian Sea.

Auto: "Raju, would you like to have some chai?"

Raju: "Sure, auto! But how can you make chai?"

Auto: "Watch this!" And the auto-rickshaw transformed into a mobile tea stall, brewing the most delicious chai Raju had ever tasted.

They sipped chai as they floated over the city, and Raju realized he had the coolest auto-rickshaw in the world. From that day on, Raju's auto-rickshaw became the talk of the town, giving magical rides to anyone who hopped on.`;

let story2 = `In a small town in North India, there was a legendary samosa shop run by a man named Babu. Babu's samosas were so famous that people would travel from far and wide to taste them.

One day, a mischievous monkey named Chintu discovered the samosa shop. Chintu couldn't resist the aroma of the freshly fried samosas. He stealthily entered the shop and swiped a samosa from the tray.

Babu, who was busy tending to customers, noticed the missing samosa and suspected foul play. He set up a hidden camera to catch the samosa thief in the act.

The next day, Chintu returned for more samosas, and just as he reached for one, the hidden camera captured his every move. Babu couldn't believe his eyes when he reviewed the footage.

To outsmart the monkey, Babu devised a plan. He placed a tray of "extra spicy" samosas on display, knowing Chintu couldn't resist them. As expected, Chintu grabbed a spicy samosa and rushed to a nearby pond to cool his mouth.

Little did Chintu know that Babu had secretly coated the spicy samosas with itching powder. Chintu's antics at the pond left him rolling and splashing in the water, itching all over.

The townsfolk gathered to watch Chintu's comical struggle with the spicy samosa, and the legend of the mischievous samosa-loving monkey became a cherished tale in the town.

These are, of course, playful and imaginative stories set in India, meant purely for entertainment and not based on real events.`;


let indianStories = [story1, story2];


let americaTitles = ["The Great Pancake Parade of Pancakeville","The Great Alien Bake-Off in Roswell"];
story1 = `In the charming town of Pancakeville, located deep in the heart of America, something extraordinary happened every year—The Great Pancake Parade. It was a day when the streets were filled not with cars, but with pancakes of all shapes and sizes.

The tradition began centuries ago when an eccentric chef named Benedict Pancake accidentally spilled his pancake batter on the streets. Instead of being upset, he declared it a sign from the pancake gods and decided to celebrate by making giant pancakes.

Now, every year, the people of Pancakeville gathered for the parade. There were pancake floats, pancake costumes, and even a pancake beauty queen. But the highlight was the "Pancake Race." Participants had to flip a pancake as many times as possible while running from one end of Main Street to the other. The winner received a year's supply of maple syrup.

And so, every Pancake Parade Day, the town of Pancakeville turned into a pancake wonderland, where syrup flowed like rivers, and everyone had a flip-tastic time!`;

story2 = `In the quirky town of Roswell, New Mexico, known for its infamous UFO incident, something peculiar was brewing. It was time for the "Great Alien Bake-Off."

The townsfolk decided that if aliens visited Roswell, they should be welcomed with delicious treats. So, they organized a baking competition. But there was a twist—participants had to use unconventional ingredients like moon dust, cosmic candy, and starfruit.

The entries were out of this world. One contestant baked a rocket-shaped cake that actually lifted off the table (with the help of a hidden firecracker). Another created a cake shaped like an alien spacecraft that emitted colorful smoke rings.

The judges, dressed as little green men, had a tough time deciding the winner. In the end, they declared a tie between a cake that glowed in the dark and a pie that emitted twinkling lights.

And so, in Roswell, the Great Alien Bake-Off became an annual tradition, where residents and aliens alike celebrated with cosmic confections that were truly out of this world!`;


let americaStories = [story1, story2];


let japanTitles = ["The Sushi Ninja's Quest","The Sumo Wrestler's Dance-Off"];
story1 = `In the bustling streets of Tokyo, there lived a sushi chef named Hiroshi who had a secret identity—he was the Sushi Ninja! By day, he prepared exquisite sushi for his customers, but by night, he donned a ninja outfit and embarked on daring missions.

One fateful night, the city faced a crisis—the Giant Wasabi Monster was on the loose, wreaking havoc and turning everything it touched green and spicy. Hiroshi knew it was time to become the Sushi Ninja once more.

Armed with his trusty sushi knife and a backpack full of sushi rolls, Hiroshi confronted the monstrous wasabi creature. With nimble moves and perfectly sliced sashimi, he battled the beast. In the end, Hiroshi triumphed by luring the monster into a giant soy sauce trap.

The city was saved, and Hiroshi returned to his sushi restaurant, where his customers marveled at his culinary skills, unaware of his secret life as the Sushi Ninja.`;

story2 = `In the ancient city of Kyoto, there was a sumo wrestler named Takeshi who had a hidden talent—he was an incredible dancer. Takeshi loved sumo, but he secretly dreamed of becoming a professional dancer.

One day, he decided to pursue his dream and entered a national dance competition. He faced off against the best dancers in Japan, but there was a catch—the competition was a sumo-themed dance-off!

Takeshi performed a dance that combined the grace of traditional Japanese dance with the power of sumo moves. He twirled, stomped, and even did a sumo squat mid-dance. The audience was captivated by his unique performance.

To everyone's surprise, Takeshi won the competition, and his sumo-themed dance became a sensation. He became known as the "Dancing Sumo" and continued to perform his one-of-a-kind dance around Japan, proving that you can follow your passions and still embrace your roots.`;


let japanStories = [story1, story2];

const generate = document.querySelector(".generate");
const title = document.querySelector(".title");
const paragraph = document.querySelector(".story-paragraph");
let index = 0;

generate.addEventListener('click', generateStory);

function generateStory() {
    

    if(document.getElementById("india").checked) {
        title.textContent = indianTitles[index];
        paragraph.textContent = indianStories[index];

        if(index === 0) 
            index = 1;
        else   
            index = 0;
        
    }

    else if(document.getElementById("America").checked) {
        title.textContent = americaTitles[index];
        paragraph.textContent = americaStories[index];

        if(index === 0) 
            index = 1;
        else   
            index = 0;
        
    }

    else if(document.getElementById("Japan").checked) {
        title.textContent = japanTitles[index];
        paragraph.textContent = japanStories[index];

        if(index === 0) 
            index = 1;
        else   
            index = 0;
        
    }

    else {
        paragraph.textContent = "Please click on interested Country Stroies.";
    }
}




