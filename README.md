Challenge para New Combin

Applicación front-end hecha con
-Angular 12
-Angular Material para los componentes como dialogs, campos de inputs, cards, buttons
-TailwindCss para el layout y algunos estilos rápidos en el template
-RXJS para la parte lógica en su mayoría ( al menos dónde fue posible)

Cuenta con 8 directorios base

-Constants:
Aquí simplemente se guardan constantes/enums hardcodeados que puedan llegar a tener un uso en múltiples componentes
-Core:
Módulo que brinda los componentes más básicos y generales (que por lo general se usan una sola vez en el app.component.html) en este caso son dos header y footer. Pueden ser modales, sidenavs, asides
-Interceptors:
Como su nombre dice, los interceptors de peticiones http, en esta caso para agregar el header de Authorization haciendo uso del token guardado en local storage
-Models:
Todas las interfaces que se usaran a lo largo del proyecto
--Resolvers:
Estos son quienes de asegurarse que determinadas rutas carguen su vista cuando ya se cuenta con determinada información (por lo general para tener pre-fetcheado algun endpoint). El único ejemplo que hay en uso es el del GetTokenResolver que se encarga de autenticar al usuario al inicio de la applicación.
--Services:
Principalmente donde se registran los servicios de cada sección para interactuar con la API, también puede haber casos como el del AlertsService que se encargan de brindar métodos consumibles a la applicación para disparar alertas, compartir información entre componentes que estan muy alejados en la rama.
--Utils:
Principalmente funciones dinámicas que ayudan a evitar repeticiones (las alertas de mensaje por ejemplo), también casos de funciones de enmascaramiento para usar en distintos formularios / inputs aislados si es necesario.
--Views:
La parte donde se gesta lo principal de la applicación (la parte de ...). Aquí lo tengo separado por secciones, login(no era necesario), members, y si fuera necesario users,products... cada cual con sus respectivas pages,components y constants, para un diseccionado más átómico.

Ahora el árbol empieza en app.component.html

```
  <div class="bg-gradient-to-bl main-body-container" >
    <header >
      <app-header></app-header>  // vista del header
    </header>
    <main >
      <router-outlet></router-outlet> //vista traída por ruta (en este caso una sola, la de members)
    </main>
    <footer >
      <app-footer></app-footer> //vista del footer
    </footer>
  </div>

```

Por lazy load cargamos el módulo de members que tiene una sola vista, por ende solo un componente dentro de
views/members/pages llamado main-view

Para poder cargar la vista antes se cumple la petición por medio del GetTokenResolver

```
  {
    path:'',
    resolve:{token:GetTokenResolver},
    component:MainViewComponent
  }
```

Lo más importante que hay en GetTokenResolver es

```
  const body: LogBody = environment.credentials
  return this.authService.login(body).pipe(map(logResponse=>(logResponse.token)))
```

El body viene hardcodeado por el entorno, aquí se llama al método login del AuthService

```
  login(credentials: LogBody): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.apiUrl}/${ApiRouteEnums.Auth}`,credentials)
  }
```

Cómo habran notado el enpoint esta en la menor médida escrito con valor de objetos generales para si en algún momento la ruta de auth por ejemplo cambia y la usamos en varios lugares solo deberíamos cambiarla en el enum/objeto que corresponda

Una vez cumplida con éxito se carga el componente MainView
.html

```
<div class="grid grid-cols-2">
  <div class="px-12 py-8">
    <app-form-members (savedMember)="addNewMember($event)" [chargedSSN]="chargedSSN"></app-form-members>
  </div>
  <div class="px-12 py-8">
    <app-table-members #table></app-table-members>
  </div>
</div>
```
