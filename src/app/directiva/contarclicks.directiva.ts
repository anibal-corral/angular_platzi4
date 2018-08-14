import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: 'li[contar-clicks]'
})

export class ContarClicksDirectiva{
    clickN=0;
    //@HostBinding(QUE ATRIBUTO DEL ELMENTO HTML QUEREMOS ESTAR EDITANDO,)
@HostBinding('style.opacity')opacity:number=0.1;

    //Imprimir el conteo en el debugg
    @HostListener("click", ["$event.target"]) onClick(btn){
        console.log('a', btn, "Número de clicks:", this.clickN++)
        this.opacity+=0.1;
    }
}