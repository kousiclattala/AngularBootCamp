# ANGULAR CORE CONCEPTS

---

## Angular Heirerachy

1. _main.ts_
2. _app.module.ts_
   - _app.component.ts_
     - _app.component.html_
       - _app.component.css_
3. _index.html_, _styles.css_

**main.ts**

- this is where we tell angular to load our first module by importing few things like "platformBrowserDynamic" from "platform-browser-dynamic" and importing module which we want to load first.
- By using platformBrowserDynamic method and chaining it with bootstrapModule() method, we tell the angular to load this file first we this app is being called.

```typescript
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; //importing platformBrowserDynamic
import { AppModule } from "./app/app.module"; //importing AppModule

platformBrowserDynamic().bootstraoModule(AppModule); //informing Angular to load this file when requested.
```

**app.module.ts**

- When Angular looks into main.ts file it will then requested to check in _AppModule_ which is located in _app.module.ts_ file.
- In this file we will declare our root module. Which is infact the base of our program. In Angular every feature is divided into individual modules like singup, signin etc modules. which is then further divided into components.
- First we import the core module **NgModule** from **@angular/core** and then using this module we define some directives/metadata , so that when angular look into this module it will understand where to get data/logic for our app.
- In the _NgModule_ decorator we define some metadata like
  - **selector: ""** a selector for our html template to display
  - **declarations: []** We have to mention the components which are declared inside this module.We can mention as many components we declared with comma seperated.
  - **bootstrap: []** we have to mention angular, what is the first file to be loaded and we have to mention only one. Bootstrapping is only done in root module.
- Finally we have to import the _AppModule()_
- Link to file [app.module.ts](https://github.com/kousiclattala/core-angular/blob/main/src/app/app.module.ts)

**app.component.ts**

- This is where our actual logic/data of our app is declared. As in the **app.module.ts** where we mentioned directives/metadata, the same thing has to be done here also using **Component** importing from **@angular/core** module.
- In the **Component** decorator we define some parameteres like
  - **imports: []** to import from other components
  - **templateUrls: ""** mentioning where to load the template of this component to display
  - **styleUrls: []** mentioning the styling part of the template from where it has to be loaded.
  - Link to file [app.component.ts](https://github.com/kousiclattala/core-angular/blob/main/src/app/app.component.ts)

**app.component.html**

- We mention the template to be displayed in the browser

  **app.component.css**

- We mention styling to the template.

**index.html**

- This is global template file, where we mention the global template for our app, how it has to be displayed. The _selector_ which we mentioned in _app.module.ts_ decorator that has to be incorporated into this file.

- Link to file [index.html](https://github.com/kousiclattala/core-angular/blob/main/src/index.html)

**styles.css** This is global styling file, where we mention global styling to our app.

## NOTE:

- In Angular everything is in hierarchy, like

  - module1 (root)

    - component1
      - component1-Template
      - component2-Styling
    - component2
      - component2-Template
      - component2-Styling

  - module2
    - component1
      - component1-Template
      - component1- Styling

- Like this we can create _n_ number of modules and _n_ number of components, but there is only one **rootModule**, where it is the top in the heirerachy and our app loads from there only.

- If you have multiple components then you have to incorporate them in template _(html)_ files. In the above example the **component1** have _selector_ metadata, that has to be incorporated in **global HTML** _(index.html)_ file and the _selector_ metadata in **component2** has to be incorporated in **app.component1.html** file but not in the **global HTML** _(index.html)_ file. i.e. beacuse in the **global HTML** _(index.html)_ we have to incorporate only root component selector.

## Link to Project: [core-angular](https://github.com/kousiclattala/core-angular)
