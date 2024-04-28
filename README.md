# fitflex-frontend

## Webpage
fitflex-web.azurewebsites.net

## TODO
- Use the newly created `SessionUtils` to track whether a user is signed in
- Use the newly created API util functions to populate and add functionality to the web pages
    * `ExerciseApiUtil`
    * `ProgramsApiUtil`
        - Validate the following functions work
            * `updateUserAssignedProgram(UserModel user, ProgramModel program)`
    * `UserApiUtil`
        - Validate the following functions work
    * `UserExerciseApiUtil`
    * `UserWeightApiUtil`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
