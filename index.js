import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAtenticacao } from "./SistemaAtenticacao.js";

const diretor = new Diretor ("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Rodrigo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstalogado =  SistemaAtenticacao.login(gerente,"123");
const diretorEstalogado =  SistemaAtenticacao.login(diretor,"123456");

const clienteEstalogado =  SistemaAtenticacao.login(cliente,"456");


console.log(gerenteEstalogado, diretorEstalogado, clienteEstalogado);