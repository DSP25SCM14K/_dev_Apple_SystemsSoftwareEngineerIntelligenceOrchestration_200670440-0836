const projects = [
  {name:"AgentEval",label:"On-device agent evaluation · Swift",text:"Swift framework and command-line tool running 500+ parallel evaluations of LLM agent tool calling, latency, and memory on macOS; flags routing regressions before release.",tags:"SWIFT / CONCURRENCY / MACOS",source:"https://github.com/devthedevil/swift-agent-evals",featured:true},
  {name:"EXPOS",label:"Experimental operating system",text:"Multitasking OS with process scheduler, demand paging, file system, and system-call interface supporting 16 concurrent processes.",tags:"C / SPL / EXPL / OS INTERNALS",source:"https://github.com/devthedevil/EXPOS",featured:true},
  {name:"AeroInvoice",label:"AI · document intelligence",text:"AI-powered invoice ingestion and quote extraction API.",tags:"AI / API / DOCUMENTS",source:"https://github.com/devthedevil/aero-invoice-intelligence"},
  {name:"MetalCompositor",label:"Creative media · GPU",text:"Metal compositing engine with golden-image comparisons across 12 blend modes and frame-render performance benchmarks for iOS and macOS.",tags:"SWIFT / METAL / CORE IMAGE",source:"https://github.com/devthedevil/metal-compositor"},
  {name:"Keystone",label:"Control-plane metadata · Go",text:"Raft-replicated transactional key-value store for metadata, with MVCC, watch streams, snapshots, and partition fault-injection tests.",tags:"GO / RAFT / GRPC",source:"https://github.com/devthedevil/keystone"},
  {name:"Strata",label:"Distributed storage · C++17",text:"High-throughput C++ storage server with sharding, replication, caching, async I/O, and write-ahead logging.",tags:"C++ / GRPC / STORAGE",source:"https://github.com/devthedevil/strata"},
  {name:"Oxide-HV",label:"Systems · Rust",text:"A Rust systems project with a live interactive demo.",tags:"RUST / SYSTEMS",source:"https://github.com/devthedevil/oxide-hv",demo:"https://oxide-hv.vercel.app/"},
  {name:"TradeSentinel",label:"Market monitoring",text:"A market monitoring project with a live web demo.",tags:"MARKET DATA / WEB APP",source:"https://github.com/devthedevil/tradesentinel",demo:"https://tradesentinel.vercel.app/"},
  {name:"AskMyStore",label:"LangGraph orchestration",text:"A store assistant project demonstrating LangGraph orchestration, with a live demo.",tags:"LANGGRAPH / AI",source:"https://github.com/devthedevil/AskMyStore",demo:"https://ask-my-store.vercel.app/"},
  {name:"Strangers",label:"Web application",text:"A social web application, available to explore in its live demo.",tags:"REACT / WEB",source:"https://github.com/devthedevil/Strangers",demo:"https://strangers-react.vercel.app/"},
  {name:"CME MDP 3.0 Multicast Feed Handler",label:"Market data · C++",text:"Multicast market-data feed handler project.",tags:"C++ / MULTICAST / CME",source:"https://github.com/devthedevil/CME-Multicast-Market-Data-Feed-Handler-C-"},
  {name:"Real-time Stock Market Analysis Pipeline",label:"Streaming data",text:"A real-time pipeline for stock market analysis.",tags:"STREAMING / DATA PIPELINE",source:"https://github.com/devthedevil/Realtime-Stock-Market-Analysis"},
  {name:"Character Device Driver",label:"Linux · systems",text:"Character device driver implementation and source.",tags:"C / LINUX / KERNEL",source:"https://github.com/devthedevil/Character-Device-Driver"},
  {name:"16-Bit RISC Processor",label:"Computer architecture",text:"A 16-bit RISC processor design from the hardware lab.",tags:"DIGITAL DESIGN / RISC",source:"https://github.com/devthedevil/Hardware-lab"},
  {name:"LangChain Chat with Search",label:"Retrieval · AI",text:"A LangChain chat application with search.",tags:"LANGCHAIN / SEARCH",source:"https://github.com/devthedevil/LangChain-Chat-with-Search"},
  {name:"Pitch Perfect",label:"iOS application",text:"An iOS app project.",tags:"IOS / SWIFT",source:"https://github.com/devthedevil/Pitch_Perfect"},
  {name:"Hire loop",label:"Hiring workflows",text:"A hiring-focused application project.",tags:"PRODUCT / WORKFLOWS",source:"https://github.com/devthedevil/hireloop"},
  {name:"AgentFlow",label:"Agent orchestration",text:"An agent orchestration project using the OpenAI Agent SDK repository.",tags:"AGENTS / ORCHESTRATION",source:"https://github.com/devthedevil/openAI-Agent-SDK"},
  {name:"Tic Tac Toe",label:"Android application",text:"A Tic Tac Toe Android game.",tags:"ANDROID / GAME",source:"https://github.com/devthedevil/TicTacToe-Game"},
  {name:"MCP",label:"Developer tooling",text:"An MCP project and implementation.",tags:"MCP / TOOLING",source:"https://github.com/devthedevil/MCP"},
  {name:"Voting App",label:"Kubernetes",text:"A voting application project built around Kubernetes.",tags:"KUBERNETES / DISTRIBUTED APP",source:"https://github.com/devthedevil/Kubernetes-K8"},
  {name:"adserve",label:"Ad serving",text:"An ad-serving project.",tags:"ADTECH / SOFTWARE",source:"https://github.com/devthedevil/adserve"}
];

const escapeHtml = value => value.replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);
const grid = document.querySelector("#projectGrid");
grid.innerHTML = projects.map((project,index) => `
  <article class="project-card reveal${project.featured ? " featured-project" : ""}" style="--card-index:${index}">
    <div class="project-meta"><span>${escapeHtml(project.label.toUpperCase())}</span><span>${String(index+1).padStart(2,"0")}</span></div>
    <h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.text)}</p><div class="project-tags">${escapeHtml(project.tags)}</div>
    <div class="project-links"><a href="${project.source}" target="_blank" rel="noreferrer">SourceCode <span>↗</span></a>${project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Technical Demo <span>↗</span></a>` : ""}</div>
  </article>`).join("");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target);}}),{threshold:.08});
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add("in-view"));

const focusText = document.querySelector("#focusText");
const focusLines = ["the right model, in the right place","privacy without a slower experience","compute shaped around the device","intelligence that feels effortless"];
if (!reduceMotion && focusText) {
  let line=0;
  window.setInterval(()=>{focusText.classList.add("text-shift");window.setTimeout(()=>{line=(line+1)%focusLines.length;focusText.textContent=focusLines[line];focusText.classList.remove("text-shift");},220);},2900);
}
