import fitcal from "../img/fitcal.png"
import gasncharge from "../img/gasncharge.png"

export let colors = ["rgb(4, 116, 220)", "rgb(0, 99, 204)"];
export let colors2 = ["rgb(4, 220, 58)", "rgb(0, 204, 51)"];


export const info = {
    firstName: "Christopher",
    lastName: "Gomez",
    initials: "CG", 
    position: "a Full Stack  Web Developer",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors2[0],
    miniBio: [ 
     
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "💼",
            text: "Open to Work"
        },
        {
            emoji: "📧",
            text: "chrisgtr34@yahoo.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/chrisgtr34",
            icon: "fa fa-github",
            label: 'github'
        },
        
        {
            link: "https://www.linkedin.com/in/christopher-gomez-240229139/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       

    ],
    bio: "Hello! I'm Christopher. I'm a recent graduate from UCLA's Coding Bootcamp. You should hire me!",
    skills:
        {
            proficientWith: ['react.js','javascript','git','bootstrap', 'html5', 'css3', 'node.js'],
            exposedTo: ['wordpress', 'adobe illustrator','c#','bigcommerce']
        }
    ,
    hobbies: [
        {
            label: 'Video Games',
            emoji: '🎮'
        },
        {
            label: 'Automotive Enthusiast',
            emoji: '🏎️'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }
    ],
    portfolio: [ 
        {
            title: "Fit Cal",
            live: "https://fitcalxxii.herokuapp.com/", 
            source: "https://github.com/chrisgtr34/FitCal", 
            image: fitcal
        },
        {
            title: "GasNCharge",
            live: "https://gasncharge.herokuapp.com/",
            source: "https://github.com/chrisgtr34/Gas-Electric",
            image: gasncharge
        }
        
    ]
}