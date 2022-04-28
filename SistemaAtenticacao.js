export class SistemaAtenticacao{
    
    static login(autenticavel, senha){
        if(SistemaAtenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;       
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}