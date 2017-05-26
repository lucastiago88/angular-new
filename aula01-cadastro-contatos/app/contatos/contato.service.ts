import {Injectable} from '@angular/core';
import{Contato} from './contato.model';
import 'rxjs/add/operator/toPromise';
import{CONTATOS} from './contatos-mock';
import{Http} from '@angular/http';

@Injectable()

export class ContatoService{

    private contatosUrl: string = 'app/contatos';

    constructor(private http: Http){}

    getContatos(): Promise<Contato[]>{
        return this.http.get(this.contatosUrl)
            .toPromise() 
            .then(response => response.json().data as Contato[]);
          
    }

    getContato(id: number): Promise<Contato>{
        return this.getContatos()
            .then((contatos: Contato []) => contatos.find(contato => contato.id === id));
    }

    getContatosSlowly(): Promise<Contato[]>{
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
        .then(() =>{
            console.log('primeiro Then');
            return 'Angular 2';
        })

        .then((param:string) =>{
            console.log('Segundo Then');
            console.log(param);

            return new Promise((resolve2, reject2)=>{
                setTimeout(() =>{
                    console.log("Continuando depois de 04 Segundos...");
                    resolve2();
                }, 4000);
            });
        })
        
        .then(() => {
        console.log('Terceiro then');   
          return this.getContatos();
        }); 
    }
}