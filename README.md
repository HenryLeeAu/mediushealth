A interview test for Medius Health

### `Time spending`
5hrs



### `Run project`

Runs this project in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Behaviour`
Once user click in the app will bring client_id into ajax call to fetch the configuration for each user.

ex. user 127 has data:{ color:blue } so app will render theme blue

there are 3 themes : default, read, blue.

I have 2 fake api only for id 256 and 127

http://localhost:3000/?client_id=256 will render red

http://localhost:3000/?client_id=127  will render blue

http://localhost:3000/  will render default
http://localhost:3000/?client_id=2133 will render default and have a error msg in console.

### `TODO`

It will be better to add a loading screen before fetching the data. User might seen the default theme before geting the configuration.

