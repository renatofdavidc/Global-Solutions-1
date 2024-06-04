
function rolarPara(id) {
    const elemento = document.getElementById(id);
    elemento.scrollIntoView({ behavior: 'smooth' });
}
window.watsonAssistantChatOptions = {
    integrationID: "f8006945-476e-488d-9309-114babb90ea0", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "0f446ab8-48e4-4922-999d-ea7326f8b9ff", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });