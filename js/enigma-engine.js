const ENIGMAS=[
 {id:'ENIGMA-001',codename:'ESPELHO',question:'O que pode ser visto por todos, mas nunca pode ser segurado?',hints:['Não é um objeto.','Pode aparecer em uma janela.'],answer:'Uma imagem/reflexo.'},
 {id:'ENIGMA-002',codename:'SILÊNCIO',question:'Quanto mais você tenta explicar, mais ele desaparece. O que é?',hints:['Pode existir entre duas pessoas.','Não precisa de palavras.'],answer:'O silêncio.'},
 {id:'ENIGMA-003',codename:'LABIRINTO',question:'Qual caminho muda quando você muda a pergunta?',hints:['Não está necessariamente em um mapa.','A resposta depende da perspectiva.'],answer:'O caminho do pensamento.'}
];
const EnigmaEngine={
 current:null,
 start(){this.current=ENIGMAS[Math.floor(Math.random()*ENIGMAS.length)];return this.current},
 getHint(index=0){return this.current?.hints?.[index]||'Toda pista é também uma nova pergunta.'},
 evaluate(input){if(!this.current)return {correct:false,feedback:'Inicie um enigma primeiro.'};const clean=String(input||'').trim().toLowerCase();const answer=this.current.answer.toLowerCase();const correct=clean===answer||answer.includes(clean)&&clean.length>3;return {correct,feedback:correct?'A chave foi encontrada — mas o enigma continua aberto.':'A resposta não coincide com a chave conhecida. Tente outra perspectiva.'}},
 all(){return ENIGMAS.map(({answer,...publicEnigma})=>publicEnigma)}
};
window.EnigmaEngine=EnigmaEngine;
