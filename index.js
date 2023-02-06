//creating react dom root
const root = ReactDOM.createRoot(document.getElementById("root"))

//function to create anchor tag
function createAnchorTag(text,hyperText){
    return (React.createElement("a",{
        style : {
            textDecoration : "none",
            color : "black",
            fontStyle : "italic",
            borderRadius : "0.rem",
            padding : "1rem",
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
        backgroundColor : "gray",
        justifyContent : "space-around",
        alignItems : "center",
        outline : "2px solid gray",
        borderRadius : "0.4rem",
    }
},[li1,li2,li3])

//creating navbar component
const navBar = React.createElement("nav",{},ul)

//creating image component
const mickeyImage = React.createElement("img",{
    src : "/Day 5/images/mickey.png",
    style : {
        width : "100px",
        height : "auto",
        borderRadius : "50%",
        border : "1px solid gray",
        padding : ".5rem 1.2rem",
        margin : "2rem",
        backgroundColor : "lightgray"
    }
})

//creating credit component
const credit = React.createElement("p",{
    style : {
        color : "#434242"
    }
},"Made with ❣ by Master Mickey")


// creating the main App component to be rendered
const App = React.createElement("div",{
    style : {
        width : "contain",
        height : "98.6vh",
        textAlign : "center",
        backgroundColor : "#B5F1CC",
        outline : "5px solid black",
        borderRadius : "0.635rem",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        margin : ".4rem .5rem "
    }
},[navBar,mickeyImage, credit])

//rendering app component to root div
root.render(App)