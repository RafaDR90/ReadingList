
class BookList{
    constructor(){
        this.numLibrosLeidos=0;
        this.todosLibros=[];
        this.numLibrosNoLeidos=0;
        this.libroALeer=0;
        this.libroLecturaActual=-1;
        this.ultimoLibroLeido=-1;
    }

    librosLeidos(){
        return this.numLibrosLeidos;
    }
    
    librosNoLeidos(){
        return this.numLibrosNoLeidos;
    }

    siguienteLibroALeer(){
        return this.libroALeer;
    }

    imprimeTodosLosLibros(){
        for(const x of this.todosLibros){
            console.log(x.titulo+" ; ");
        }
    }

    queEstoyLeyendo(){
        return this.todosLibros[this.libroLecturaActual];
    }

    añadirLibro(libro){
        if(!this.todosLibros.includes(libro.titulo)){
            this.todosLibros.push(libro);
            if(libro.leido===false){
                this.numLibrosNoLeidos++;
                if(this.libroLecturaActual==-1){
                    this.libroLecturaActual=0;
                    this.libroALeer++;
                }
            }else{
                this.numLibrosLeidos++;
                if(this.ultimoLibroLeido==-1){
                    this.ultimoLibroLeido=0;
                }
            }
        }
    }

    terminarDeLeer(){
        if(this.libroLecturaActual != -1){ 
            this.ultimoLibroLeido=this.libroLecturaActual++;
            this.libroALeer+=1;
            var leidosYNoLeidos=this.actualizarLibrosLeidos();
            this.numLibrosNoLeidos=leidosYNoLeidos[1];
            this.numLibrosLeidos=leidosYNoLeidos[0];
            this.todosLibros[this.libroLecturaActual].setLeido(true);
            this.todosLibros[this.libroLecturaActual].fechaLectura=Date();
        }
    }

    actualizarLibrosLeidos(){
        var leidosYNoLeidos=[0,0];
        for(const x of this.todosLibros){
            if (x.leido==true) {
                leidosYNoLeidos[0]++;
            }else{
                leidosYNoLeidos[1]++;
            }
        }
        return leidosYNoLeidos;
    }


}

class Book{
    constructor(titulo,genero,autor){
        this.titulo=titulo;
        this.genero=genero;
        this.autor=autor;
        this.leido=false;
        this.fechaLectura=null;
    }

    setLeido(valor){
        this.leido=valor;
    }

    establecerFechaLectura(fecha,libro){
        if(libro.fechaLectura==null){
            libro.fechaLectura==fecha;
        }else{
            console.log("No se puede cambiar una fecha de lectura");
        }
    }
}

libros=[];
libros[0]=new Book("Harry Potter","Magia","howars");
libros[1]=new Book("Mujeres Calentorras","Accion","Torbe");
libros[2]=new Book("Padre rico padre pobre", "Economia", "Nombre Raro");

estanteria=new BookList();
for(const x of libros){
    estanteria.añadirLibro(x);
}