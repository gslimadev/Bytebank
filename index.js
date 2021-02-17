import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Guilherme", 15000, 12345678901);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("Jaqueline", 5000, 98765432109);
gerente.cadastrarSenha("abcde");

const cliente = new Cliente("Helder", 13579246789, "3021")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"abcde");
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"3021");

