const result=document.getElementById('result');
const thought=document.getElementById('thought');
const resultText=document.getElementById('resultText');
const modeLabel=document.getElementById('modeLabel');
const modes={
 codex:['CODEX','O fragmento foi recebido como um novo registro potencial. No Genesis, uma experiência pode tornar-se Códice e ganhar conexões futuras.'],
 enigma:['ENIGMA','Toda resposta contém outra pergunta. O Codex transforma seu fragmento em uma porta para novas interpretações.'],
 poeta:['POETA','A experiência pode ser reorganizada como linguagem: imagem, ritmo, metáfora e silêncio passam a formar uma nova leitura.'],
 arquiteto:['ARQUITETO','O pensamento pode ser decomposto em elementos, relações e estruturas. A pergunta deixa de ser apenas frase e torna-se arquitetura.'],
 lumen:['LUMEN','Procure relações entre aquilo que foi dito e aquilo que ainda não foi nomeado. O significado pode estar nas conexões.'],
 translator:['TRANSLATOR','O Genesis prepara uma camada multilíngue. Futuras versões preservarão contexto, intenção e metáfora durante a tradução.']
};
function run(mode='lumen'){
 const value=thought.value.trim()||'Uma pergunta ainda não formulada.';
 const [name,msg]=modes[mode]||modes.lumen;
 modeLabel.textContent=name;
 resultText.textContent=`“${value}” — ${msg}`;
 result.hidden=false;
 result.scrollIntoView({behavior:'smooth',block:'center'});
}
document.getElementById('enter').addEventListener('click',()=>run('lumen'));
document.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>run(card.dataset.mode)));
