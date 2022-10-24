<template>
  <section class="pb-15" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Контакты</h1>
              <h3 class="font-weight-light mt-2">
                <strong>Часы работы</strong> c 9:00 - 18:00
                <strong>Обед</strong> с 13:00 - 14:00
              </h3>
              <h3 class="font-weight-light">
                <strong>Aдрес</strong> МИРЗААБАДСКИЙ район (Сырдарьинской области М. УЛУГБЕК МФИ
              </h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script>

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
};
</script>
