**cake-or-death**

Is it cake? Or is it death?

*Recommended usage in your React app*

Import the package by running:

`npm i cake-or-death`

Add an import to your tsx component:

`import {isItCake} from "cake-or-death"`

Test the import, is it cake or it death?

`
  <div>
    {["apple", "chicken", "chocolate", "Rainn Wilson's crusty second-day sock"].map((val) => (
      <div>{isItCake(val) ? `${val} = 🎂` : `${val} = 💀`}</div>
    ))}
  </div>
`
