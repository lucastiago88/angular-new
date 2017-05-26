import{InMemoryDbService} from 'angular-in-memory-web-api';
import{Contato} from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService{
    createDb(): {} {
        let contatos: Contato[] = [
            {id:1, nome:'Fulano de Tal', email: "fulano@gmail.com", telefone: '(00) 0000-0000'},
            {id:2, nome:'Bob Esponja', email: "bob@gmail.com", telefone: '(00) 0000-0000'},
            {id:3, nome:'Chaves', email: "chaves@gmail.com", telefone: '(00) 0000-0000'},
        ];

        return{contatos}
    }
}