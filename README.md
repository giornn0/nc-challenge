<h1 align="center">Challenge New Combin - Ali Rigol</h1>
<h3>Applicación front-end con</h3><br>
<ul>
  <li>
    <strong>Angular 12</strong><br>
  </li>
  <li>
    <strong>Angular Material</strong> para los componentes como dialogs, campos de inputs, cards, buttons<br>
  </li>
  <li>
    <strong>Tailwindcss</strong> para el layout y algunos estilos rápidos en el template<br>
  </li>
  <li>
    <strong>RXJS</strong> para la parte lógica en su mayoría ( al menos dónde fue posible)<br>
  </li>
</ul>
<hr><br>
<h3>Pasos para usar</h3>
<ol>
  <li><strong>Clonar</strong> este repositorio<br>
    <code>git clone https://github.com/giornn0/nc-challenge.git</code>
  </li>
  <li>En el directorio clonado <strong>instalar dependencias</strong><br>
    cd cd-challenge <br>
    npm install
  </li>
  <li><strong>Clonar</strong> repositorio de la API<br>
    git clone https://github.com/newcombin/devskillsadv.git
  </li>
  <li>En este último directorio clonado <strong>instalar dependencias</strong> (de la API)<br>
    cd devskillsadv <br>
    npm install
  </li>
   <li><strong>Levantar</strong> la Aplicación con el siguiente comando<br>
    ng serve -o
    <br>
     <small>el '-o' es para abrir automaticamente</small>
    <br>
     <small>(dentro del directorio que corresponde al front de este repositorio)</small>
  </li>
  <li><strong>Levantar</strong> la API con el siguiente comando<br>
    npm run serve
    <br>
    <small>(dentro del directorio que corresponde a la api)</small>
  </li>
   <li><strong>A explorar</strong><br>
     visite http://localhost:4200
    <small>(ujna vez termine la compilación se abrira automáticamente)</small>
  </li>
</ol>
<hr>
<h2>Demo</h2>
<div style="position:relative;width:fit-content;height:fit-content;">
            <a style="position:absolute;top:20px;right:1rem;opacity:0.8;" href="https://clipchamp.com/watch/5y6A53x4JTv?utm_source=embed&utm_medium=embed&utm_campaign=watch">
                <img style="height:22px;" src="https://clipchamp.com/e.svg" alt="Made with Clipchamp" />
            </a>
        </div>
<br>
<h2>Detalles</h2>
<h3>Cuenta con 8 directorios base</h3><br>
<ul>
  <li>
    <strong>Constants</strong><br>
    <p>
      Aquí simplemente se guardan constantes/enums hardcodeados que puedan llegar a tener un uso en múltiples componentes, para fácil acceso y modificación en caso de ncesitarse 
    </p>
  </li>
  <li>
    <strong>
      Core
    </strong><br>
    <p>
      Módulo que brinda los componentes más básicos y generales (que por lo general se usan una sola vez en el app.component.html) en este caso son dos header y footer. Pueden ser modales, sidenavs, asides
    <p>
  </li>
  
  <li>
    <strong>
      Interceptors
    </strong><br>
    <p>
      Como su nombre dice, los interceptors de peticiones http, en esta caso para agregar el header de Authorization haciendo uso del token guardado en local storage
    <p>
  </li>
  
  <li>
    <strong>
      Models
    </strong><br>
    <p>
      Todas las interfaces que se usaran a lo largo del proyecto
    <p>
  </li>
  
  <li>
    <strong>
      Resolvers
    </strong><br>
    <p>
      Estos son quienes de asegurarse que determinadas rutas carguen su vista cuando ya se cuenta con determinada información (por lo general para tener pre-fetcheado algun endpoint). El único ejemplo que hay en uso es el del GetTokenResolver que se encarga de autenticar al usuario al inicio de la applicación.
    <p>
  </li>
  
  <li>
    <strong>
      Services
    </strong><br>
    <p>
      Principalmente donde se registran los servicios de cada sección para interactuar con la API, también puede haber casos como el del AlertsService que se encargan de brindar métodos consumibles a la applicación para disparar alertas, compartir información entre componentes que estan muy alejados en la rama.
    <p>
  </li>
  
  <li>
    <strong>
      Utils
    </strong><br>
    <p>
      Principalmente funciones dinámicas que ayudan a evitar repeticiones (las alertas de mensaje por ejemplo), también casos de funciones de enmascaramiento para usar en distintos formularios / inputs aislados si es necesario.
    <p>
  </li>
  
  <li>
    <strong>
      Views
    </strong><br>
    <p>
      La parte donde se gesta lo principal de la applicación (la parte de ...). Aquí lo tengo separado por secciones, login(no era necesario), members, y si fuera necesario users,products... cada cual con sus respectivas pages,components y constants, para un diseccionado más átómico.
    <p>
  </li>
</ul>
<br>
<hr>
<br>

<h3>Detalles Extras</h3>

```
  <div class="bg-gradient-to-bl main-body-container" >
    <header >
      <app-header></app-header>  // vista del header
    </header>
    <main >
      <router-outlet></router-outlet> //vista traída por ruta 
    </main>                           //(en este caso una sola, la de members)
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

Lo más importante que hay en 

<strong>GetTokenResolver</strong>
```
  const body: LogBody = environment.credentials
  return this.authService.login(body).pipe(map(
    logResponse=>(logResponse.token)))
```

El body viene hardcodeado por el entorno, aquí se llama al método login de

<strong>AuthService</strong>

```
  login(credentials: LogBody): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.apiUrl}/${ApiRouteEnums.Auth}`,credentials)
  }
```

Cómo habrán notado el endpoint está en mayor médida escrito con valores de objetos generales para si en algún momento la ruta de auth por ejemplo cambia y la usamos en varios lugares solo deberíamos cambiarla en el enum/objeto que corresponda.

Una vez cumplida con éxito se carga el componente
<strong>Main View</strong>
```
<--html-->
<div class="grid grid-cols-2">
  <div class="px-12 py-8">
    <app-form-members (savedMember)="addNewMember($event)" [chargedSSN]="chargedSSN">
    </app-form-members>
  </div>
  <div class="px-12 py-8">
    <app-table-members #table>
    </app-table-members>
  </div>
</div>
```
<strong>Form Members</strong><br>
Acá se uso Reactive Forms, con controles sueltos porque permitió mayor soltura a la hora de hacer las validaciones.<br>
Los input de string, tienen un cheque de length y de pattern para evitar espacios al inicio y final.<br
 
```
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern(/[^\s]+(\s+[^\s]+)*$/),
  ]);
```
Para asegurar la unicidad del input de ssn se pasa un arreglo de los ssn previamente cargados y una vez validado lo ingresado (se hace uso de un mask que permite asegurar el formato ingresado).<br>

```
this.ssn.valueChanges.subscribe((value) => {
    if (this.ssn.valid && this.chargedSSN.includes(value)) {
    this.ssn.setErrors({ notUnique: true });
    this.cdr.detectChanges();
  }
})
```
Para chequear la validez del formulario, se itera un arreglo de string que corresponden a los nombres de los controles (acordes a la propiedades del objeto de tipo member) asegurando que todos los controles no contenga errores.<br>

```
isValid() {
  return !this.form.every((control) => !this[control].errors);
}
```
Al Apretar save se corre una petición para guardar la data del formulario, enviandola por medio una petición a la API<br>
  <ul>
    <li>
      Si se <strong>carga con éxito</strong> se resetea el formulario, se carga el ssn en el listado respectivo, se emite una alerte de éxito y el member cargado para pushear a la tabla.
    </li>
    
    <li>
      Si la carga es <strong>errónea</strong> simplemente se emite una alerte de error.
    </li>
  </ul><br>
  
```
this.chargedSSN.push(member.ssn as MemberControls.SSN);
    this.membersService.pushMember(member).subscribe(
      (res) => {
        this.savedMember.emit(member);
        this.reset();
        this.alertsService.setAlert(
          succesAlert('New member charged successfully')
        );
      },
      (err) =>
        this.alertsService.setAlert(
          errorAlert('Error while trying to save the new member')
        )
    ); 
```
<strong>Table Members</strong><br>
Aca simplemente se corre un fetch al cargar el componente para obetener el listado y se activa el debounceTime que se resetea con cada pusheo de nuevos miembros<br>

```
ngOnInit(): void {
  this.getList();
  this.subjectForRefetch.pipe(debounceTime(1200000)).subscribe((_) => {
    this.getList();
  });
  this.refetch();
}
```
```
getList() {
  this.searching = true;
  this.membersService
    .getMembers()
    .pipe(
      finalize(() => {
        this.refetch();
        this.searching = false;
      })
    )
    .subscribe(
      (res) => {
        this.listMembers = res;
        const listedSSN = res.map(
          (member) => member.ssn
        ) as MemberControls.SSN[];
        this.chargedSSN.emit(listedSSN);
      },
      (err) =>
        this.alertsService.setAlert(
          errorAlert('Error while trying to get members list')
        )
    );
}
```
