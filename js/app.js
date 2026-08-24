const result=document.getElementById('result');
const thought=document.getElementById('thought');
const resultText=document.getElementById('resultText');
const modeLabel=document.getElementById('modeLabel');
const codexId=document.getElementById('codexId');
const codexType=document.getElementById('codexType');
const codexCodename=document.getElementById('codexCodename');
const saveCodex=document.getElementById('saveCodex');
const historyList=document.getElementById('historyList');
const modes={codex:['CODEX','O fragmento foi recebido como um novo registro potencial.'],enigma:['ENIGMA','Toda resposta contém outra pergunta.'],poeta:['POETA','A experiência pode ser reorganizada como linguagem: imagem, ritmo, metáfora e silêncio.'],arquiteto:['ARQUITETO','O pensamento pode ser decomposto em sinais, relações, contexto e estrutura.'],lumen:['LUMEN','Procure relações entre aquilo que foi dito e aquilo que ainda não foi nomeado.'],translator:['TRANSLATOR','A camada multilíngue deverá preservar contexto, intenção e o texto original.']};
function getHistory(){return JSON.parse(localStorage.getItem('nqc_codex_history')||'[]')}
function setHistory(items){localStorage.setItem('nqc_codex_history',JSON.stringify(items))}
function nextId(){return `CODEX-${String(getHistory().length+1).padStart(3,'0')}`}
function run(mode='lumen'){const value=thought.value.trim()||'Uma pergunta ainda não formulada.';const [name,msg]=modes[mode]||modes.lumen;modeLabel.textContent=name;resultText.textContent=`“${value}” — ${msg}`;result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'center'})}
function renderHistory(){if(!historyList)return;const items=getHistory();historyList.innerHTML=items.length?items.map(x=>`<button class="history-item" data-id="${x.id}"><b>${x.id}</b><span>${x.codename}</span><small>${x.type} · ${x.language}</small></button>`).join(''):'<p class="empty">Nenhum Códice salvo nesta sessão.</p>';historyList.querySelectorAll('.history-item').forEach(btn=>btn.addEventListener('click',()=>{const item=getHistory().find(x=>x.id===btn.dataset.id);if(!item)return;thought.value=item.original;codexId.textContent=item.id;codexType.value=item.type;codexCodename.value=item.codename;run('codex')}))}
function saveCurrent(){const original=thought.value.trim();if(!original){thought.focus();return}const items=getHistory();const item={id:nextId(),codename:codexCodename.value.trim()||'ARCANO / GENESIS',type:codexType.value,language:'pt-BR',original,createdAt:new Date().toISOString()};items.push(item);setHistory(items);codexId.textContent=item.id;renderHistory();run('codex')}
document.getElementById('enter').addEventListener('click',()=>run('lumen'));
document.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>run(card.dataset.mode)));
if(saveCodex)saveCodex.addEventListener('click',saveCurrent);
renderHistory();
