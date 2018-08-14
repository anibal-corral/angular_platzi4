import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
selector: "[resaltar]"

})
export class ResaltarDirectiva implements OnInit{

    constructor(private elRef: ElementRef, private renderer: Renderer2){}
    @Input("resaltar") plan:string="";
    ngOnInit(){
        if(this.plan=="pagado"){
            //this.renderer.setStyle[elemento nativo, atributo de css que se quiere modificar, el valor para el atributo]
            this.renderer.setStyle[this.elRef.nativeElement,"background-color","yellow"];
            this.renderer.setStyle[this.elRef.nativeElement,"font-weight","bold"];
        }

    }

}