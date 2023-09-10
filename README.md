# AngularAos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Install aos
> Configuring/installing the Animate On Scroll (AOS) library.

```shell
npm install aos
```

## Check Installation
> Check if we have installed aos correctly in package.json
```
 "aos": "^2.3.4",
```


## Add changes to angular.json
> Add the Css file in style in angular.json in <b>build , styles</b> section.

```
“node_modules/aos/dist/aos.css”
```

## Add angular.json changes

> Add the below optimization option as we are using an common js library which can make the application build process optimized.
```
            "allowedCommonJsDependencies": [
              "aos"
           ],
```

## Add tsconfig.json changes
> Add options in tsconfig.json file to allow synthetic import. This will help us in next steps.
```
"allowSyntheticDefaultImports": true,
```






##  You will get following error
```
  Try `npm i --save-dev @types/aos` if it exists or add a new declaration (.d.ts) file containing `declare module 'aos';`
 ```

 ## Install the below command to add @types/aos
 ```
 npm i --save-dev @types/aos
 ```

## Import the AOS library 
```
import AOS from "aos";
```

## Add below lines of code in app.component.ts file in ngOnInit
```
    AOS.init();
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.

```

## Add changes 

> Add changes to app.component.css , app.component.html

 ## Restart the development server to reflect the changes.
