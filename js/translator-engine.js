const TRANSLATOR_LANGUAGES={
  'pt-BR':'Português (Brasil)','en-US':'English (US)','es-ES':'Español','fr-FR':'Français','it-IT':'Italiano','de-DE':'Deutsch','ja-JP':'日本語'
};
const TranslatorEngine={
  original:{text:'',language:null},
  detect(text=''){
    const value=String(text).trim();
    if(!value)return null;
    if(/[ãõçáéíóúâêô]/i.test(value)||/\b(que|não|uma|uma|você|como|para|amor|dor)\b/i.test(value))return 'pt-BR';
    if(/\b(the|and|what|you|love|pain|how|is)\b/i.test(value))return 'en-US';
    if(/\b(el|la|los|las|que|una|amor|dolor|cómo)\b/i.test(value))return 'es-ES';
    return 'pt-BR';
  },
  preserveOriginal(text,language){this.original={text:String(text),language};return this.original},
  translate(text,from,to){
    const source=String(text).trim();
    if(!source)return {text:'',from,to,status:'empty'};
    if(from===to)return {text:source,from,to,status:'unchanged'};
    return {text:`[${TRANSLATOR_LANGUAGES[to]||to}] ${source}`,from,to,status:'prototype'};
  },
  getSupportedLanguages(){return {...TRANSLATOR_LANGUAGES}},
  packet(text,to){const from=this.detect(text);this.preserveOriginal(text,from);return {original:{text,language:from},translation:this.translate(text,from,to),context:{preserved:true,mode:'derived',engine:'local-prototype'}}}
};
window.TranslatorEngine=TranslatorEngine;
