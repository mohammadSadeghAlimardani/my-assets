Netlify treats all the warnings as errors (if you have warning in your code, deploy on netlify is failed)

- go to package.json
    change
    "scripts" : {
        "start" : "react-scripts start",
        "build" : "react-scripts build",    
        "test" : "react-scripts test",
        "eject" : "react-scripts eject"
    }
    to
    "scripts" : {
        "start" : "react-scripts start",
        "build" : "CI= react-scripts build",        -> our website on netlify is working properly
        "local-build" : "react-scripts build",      -> npm run local-build : build our application locally
        "test" : "react-scripts test",
        "eject" : "react-scripts eject"
    }
- commit changes
- push it up to github


//////---- forget all this acrobatics -> you just need to fix your warnings
