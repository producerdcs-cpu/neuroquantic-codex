const CodexGraph={
  storageKey:'nqc_codex_graph',
  relations:['related','contradicts','inspires','generated-by','extends'],
  get(){return JSON.parse(localStorage.getItem(this.storageKey)||'[]')},
  save(edges){localStorage.setItem(this.storageKey,JSON.stringify(edges));return edges},
  connect(from,to,type='related',note=''){if(!from||!to||from===to||!this.relations.includes(type))return null;const edges=this.get();const edge={id:`EDGE-${String(edges.length+1).padStart(3,'0')}`,from,to,type,note,createdAt:new Date().toISOString()};edges.push(edge);this.save(edges);return edge},
  relatedTo(id){return this.get().filter(e=>e.from===id||e.to===id)},
  all(){return this.get()},
  summary(){const edges=this.get();return {nodes:new Set(edges.flatMap(e=>[e.from,e.to])).size,edges:edges.length,relations:[...new Set(edges.map(e=>e.type))]}}
};
window.CodexGraph=CodexGraph;
