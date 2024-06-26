    // <div>
    //     <div>
    //         <h1></h1>
    //         <h1></h1>
    //     </div>

    // </div>

   // the above html strucuter is what the below  React code represents
const heading = React.createElement(
    "div" , 
    {id : "parent" } , [
        React.createElement( 
            "div" , {id : "child1" } , 
            [React.createElement("h1",{},"this is h1 using nested div"),
            React.createElement("h2",{},"This is the h2")] ),
            React.createElement( 
                "div" , {id : "child2" } , 
                [React.createElement("h1",{},"this is h1 using nested div"),
                React.createElement("h2",{},"This is the h2")])    
    ]);

// this create element is only helpful to create content inside the tag not h1 tag. to create the tag we need to use the REact DOM like render to create the tag and to show in the browser.
//createelement just returns the object not tag.
//React code works on the minimal portion of the code . based on how we use that.
// the sequence ofImported files placed in the the script tag in html page plays a key role.
// evry code that we write is only executed after the imported files 
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
