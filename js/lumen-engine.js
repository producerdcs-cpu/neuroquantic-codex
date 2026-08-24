const LumenEngine={
  analyze({text='',mode='lumen',enigma=null}={}){
    const original=String(text).trim()||'Uma pergunta ainda não formulada.';
    const lens={poeta:'Observe imagem, emoção, ritmo e metáfora.',arquiteto:'Observe estrutura, relações, causa e consequência.',enigma:'Observe paradoxos, ambiguidades e perguntas ocultas.',lumen:'Observe conexões entre o explícito e o que permanece implícito.',translator:'Observe intenção, contexto e significado entre idiomas.',codex:'Observe o que merece ser preservado e conectado.'}[mode]||'Observe novas relações.';
    const synthesis=enigma?`O enigma ${enigma.id} (${enigma.codename}) funciona como uma lente para este fragmento.`:'Este fragmento ainda não está preso a um único significado.';
    return {original,lens,synthesis,question:'Que nova pergunta nasce quando esta perspectiva encontra outra?'};
  }
};
window.LumenEngine=LumenEngine;
