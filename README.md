**cake-or-death**

Is it cake? Or is it death?

(Just a silly experiment in publishing an npm package)

_Recommended usage in your React app_

Import the package by running:

`npm i cake-or-death`

Add an import to your tsx component:

`import {isItCake} from "cake-or-death"`

Test the import, is it cake or it death?

`const showCakeOrDeath = (value: string) => isItCake(value) ? '🎂' : '💀'`

`console.log(showCakeOrDeath("chocolate")) // 🎂`

`console.log(showCakeOrDeath("chicken")) // 💀`

You can also add your own definitions of 'cake':

`const moreCakes = ["peach cobbler", "raspberry pavlova", "jaffa"]`

`console.log(showCakeOrDeath("jaffa cake", moreCakes)) // 🎂`

`console.log(showCakeOrDeath("Rainn Wilson's crusty second-day sock", moreCakes)) // 💀`
