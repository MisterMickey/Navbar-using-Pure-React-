//creating react dom root
const root = ReactDOM.createRoot(document.getElementById("root"))


//function to create anchor tag
function createAnchorTag(text,hyperText){
    return (React.createElement("a",{
        style : {
            textDecoration : "none",
            color : "black",
            padding : ".7rem",
        },
        href : hyperText,
        target : "_blank",
    },text))
}


//creating anchor tags
const a1 = createAnchorTag("Home","#")
const a2 = createAnchorTag("About Me","https://mistermickey.github.io/Mickey-s-Personal-Website")
const a3 = createAnchorTag("Contact Me","https://linkedin.com/in/singodiyashubham855141")


//creating lists component for navbar
const li1 = React.createElement("li",{},a1)
const li2 = React.createElement("li",{},a2)
const li3 = React.createElement("li",{},a3)


//creating unordered list component for navbar
const ul = React.createElement("ul",{
    style : {
        listStyle : "none",
        display : "flex",
        width : "fit",
        backgroundColor : "#B5F1CC",
        justifyContent : "space-around",
        alignItems : "center",
        outline : "1px solid black",
        borderRadius : "0.3rem",
    }
},[li1,li2,li3])


//creating navbar component
const navBar = React.createElement("nav",{},ul)

const getName = () => alert("Pleasure to have you here, " + prompt("What's your name?") + "! Keep Smiling :)");


//creating image component
const mickeyImage = React.createElement("img",{
    src : "./images/mickey.png",
    className : "main",
    style : {
        width : "100px",
        height : "auto",
        borderRadius : "30%",
        border : "1px solid black",
        padding : ".5rem 1.2rem",
        margin : "2rem",
        backgroundColor : "#ceffe1",
    },
    onClick : getName
})


//creating credit component
const credit = React.createElement("p",{},"Made with ❣ by Master Mickey")


// creating divider component to cover content
const div = React.createElement("div",{
    style : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        border : "2px solid black",
        borderRadius : "0.7rem",
        padding : ".4rem .4rem",
        fontFamily: "'Itim', cursive",
        backgroundColor : "#53a071",
        margin : "1rem"
}},[navBar,mickeyImage, credit])



// function to create img components
const createImg = function(imgName,width){
    return (
        React.createElement("img",{
            src : "./images/"+imgName+".png",
            style : {
                width : width,
                height : "auto"
            }
        })  
    );
}


//outside div images components
const m1 = createImg("m1", "100px");
const m2 = createImg("m2", "115px");



// creating the main App component to be rendered
const App = React.createElement("div",{
    style : {
        width : "contain",
        height : "98.6vh",
        textAlign : "center",
        backgroundColor : "#92dbae",
        outline : "3px solid black",
        borderRadius : "0.635rem",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        margin : ".4rem .5rem "
    }
},[m1,div,m2])



//rendering app component to root div
root.render(App)
