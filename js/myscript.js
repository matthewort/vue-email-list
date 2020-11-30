// Genera 10 mail tramite api e stampale in una lista
//
// API: https://flynn.boolean.careers/exercises/api/random/mail NOTE:
//
//     come detto va bene che ciò accada al mounted, come abbiam fatto  stamattina;
//     apritevi prima la Api sul browser così vedete che vi ritorna;
//     tutto fatto con axios in Vue



var app = new Vue({
  el: '#app',
  data: {
    mail: 0
  },
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail') //fai partire questa richiesta col metodo get a questa url
    .then((response) => { //se la richiesta va a buon fine allora esegui
    const result = response.data.response; //con il data gli dico di darmi in maniera specifica solo il data, se togliessi il data mi darebbe anche tutte le altre informazioni che non mi interessa avere
    this.mail = response.data.response;
    console.log(result);
    });
  }
});
