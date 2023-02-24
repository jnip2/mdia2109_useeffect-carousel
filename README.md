# MDIA-2109 Class 08

## App description
This app was created using Next.js and features four pages that utilize useState and useEffect.

## Technologies used
- Next.JS
- HTML5
- CSS
- useState
- useEffect
- Components
- Styles variables

## Running the application
```
npm run dev
```

## App features
### Home page
- Allows users to navigate between other pages
### useEffectOne
- Increments the number indefinitely because there is no limit set to the useEffect function
- Only one useState (number)

### useEffectTwo
- Increments the number once by 50 by adding a limit to the useEffect function
- Only one useState (number)

### useEffectThree
- Allows the user to increment the number by 10 by clicking a button
- Two useStates (number, value)
- The useEffect function is set to increment value by 10 upon any changes to number