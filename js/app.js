const { createApp } = Vue;

createApp({
  data() {
    return {
      mailList: [],
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then((response) => {
          this.mailList.push(response.data.response);
        });
    }
  },
}).mount("#app");
