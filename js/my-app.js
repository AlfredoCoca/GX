// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Diseño Web II',
	dialog: {
		title: 'Diseño Web II',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/steam/',
    	url: 'steam.html',
    	name: 'steam',
  		},
		{
		path: '/Epic/',
    	url: 'Epic.html',
    	name: 'Epic',
  		},
		{
		path: '/Origin/',
    	url: 'Origin.html',
    	name: 'Origin',
  		},
		{
		path: '/Perfil/',
    	url: 'Perfil.html',
    	name: 'Perfil',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnComprar').on('click', function () {
  app.dialog.alert('!Tu compra fue realizada correctamente!');
});

$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Desea procesar su compra?', function () {
    app.dialog.alert('!Tu compra fue realizada correctamente!');
  });
});

$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		app.dialog.alert('¡ Bienvenido GX games, la mejor tienda para comprar videoJuegos !');
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});



 

