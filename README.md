#cake-or-death

Is it cake? 🎂 Or is it death? 💀

(Just a silly first attempt at publishing my own package to npm)

Inspired by Suzy Eddie Izzard's [Cake or Death](https://www.youtube.com/watch?v=rZVjKlBCvhg)

---

**Recommended usage in your React app**

1. Import the package by running: `npm i cake-or-death`

2. Add an import to your file: `import { isItCake } from "cake-or-death"`

3. Test the import, is it cake or is it death?

```
const showCakeOrDeath = (value: string) => isItCake(value) ? '🎂' : '💀'

console.log(showCakeOrDeath("chocolate")) // 🎂

console.log(showCakeOrDeath("chicken")) // 💀
```

4. You can also add your own definitions of 'cake':

```
const showCakeOrDeath = (val: string, arr: string[]) => isItCake(val, arr) ? '🎂' : '💀'

const moreCakes = ["peach cobbler", "raspberry pavlova", "jaffa"]

console.log(showCakeOrDeath("jaffa cake", moreCakes)) // 🎂

console.log(showCakeOrDeath("Rainn Wilson's crusty second-day sock", moreCakes)) // 💀
```
