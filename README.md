# Pop cat sing a song

Frontend repository - current

Backend repository - [link](https://github.com/YanaTrifonova/pop_cat_server)

## Stack

### Frontend

- JavaScript
- React
- Redux
- Axios
- Material-UI

### Backend

- Node.js
- Express.js
- JWT & BCrypt Authentication
- PostgreSQL
- Sequelize ORM

## User story

USER STORY FOR "POP SING A SONG" WEBSITE

- stranger that do not log in could
    - go to LOG IN PAGE
        - fill form to log in as a user
            - enter email address (unique)
            - enter a name (unique)
            - click "log in"
            - see a message about successful log in and forward to HOME PAGE
        - fill form to sign up if you have never be a user of this website
            - enter the email address (unique)
            - enter the name (unique)
            - enter password
            - click "sign in"
            - see a message about successful sign in and forward to HOME PAGE
    - go to HOME PAGE
        - and play a song (but could not record it)
            - with a cat that they chose
            - with an instrument that they chose
    - go to "DISCOVER" page with songs of other users
        - and listen to them
    - go to "ABOUT ME" page
        - and read about popping cat history of creation
- user that log in could
    - go to LOG OUT PAGE
        - to log out
        - see a message about successful log out
    - go to HOME PAGE
        - to play a song
            - with cat that they chose
            - with an instrument that they chose
        - to record song by clicking on a "record" button on the bottom of instruments
        - to save they record if love it by clicking on a "save" button
            - see popping up menu
            - add a name of the song (not more than 255 symbols)
            - add a description of the song
            - click "post it" button to add song
            - click "revert" to undo saving song
    - go to MY SONGS PAGE
        - to listen songs that they created
        - every song card could be
            - rename with new title
            - rename with new description
            - add/remove to favourites by clicking on "favourite" button
            - delete
    - go to DISCOVER PAGE
        - to listen songs of other users
        - like/unlike song by clicking on "like" button
        - add song to favourites by clicking on "favourite" button
    - go to FAVOURITES PAGE
        - with song card of other users they could
            - listen songs of other users
            - like/unlike song by clicking on "like" button
            - add/remove to favourites by clicking on "favourite" button
        - with their own song card they could (has another background color)
            - listen their songs
            - like/unlike song by clicking on "like" button
            - add/remove to favourites by clicking on "favourite" button
            - rename with new title
            - rename with new description
            - delete

## Project status board

[Link to GitHub project](https://github.com/YanaTrifonova/pop_cat/projects/1)

## Wireframes

[User scenarios in Figma](https://www.figma.com/file/hJTSCDzAOvyKey14xBgKCz/POP-CAT-SING-A-SONG?node-id=0%3A1)

## Run in development mode

Server starts on PORT=3000

start server

```
npm start
```