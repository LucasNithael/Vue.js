<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<NomeCompleto v-model="nomeCompleto"></NomeCompleto>
				<!-- Email -->
				<rotulo nome="Email">
					<input type="text" v-model="usuario.email">
				</rotulo>
				<!-- Senha -->
				<rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<rotulo nome="Armazenar Dados">
					<span>
						<input type="radio" value="sim" v-model="armazenado"> Sim
					</span>
					<span>
						<input type="radio" value="nao" v-model="armazenado"> Não
					</span>
				</rotulo>
				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<button @click="enviado = !enviado">Enviar</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<nome-completo nomecompleto="usuario.nome"></nome-completo>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<rotulo nome="Nome">
					<span>{{ nomeCompleto.nome }}</span>
				</rotulo>
				<rotulo nome="Sobrenome">
					<span>{{ nomeCompleto.sobrenome }}</span>
				</rotulo>
				<rotulo nome="Email">
					<span>{{ usuario.email }}</span>
				</rotulo>
				<rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</rotulo>
				<rotulo nome="Armazenar Dados">
					<span>{{ armazenado }}</span>
				</rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data(){
		return{
			usuario:{
				// nome: '',
				// sobrenome: '',
				email: '',
				senha: '',
			},
			nomeCompleto:{
				nome: 'Lucas',
				sobrenome: 'Nithael'
			},
			armazenado: 'sim',
			enviado: true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
