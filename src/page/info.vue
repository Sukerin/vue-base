<template>

  <v-layout
    justify-center
    align-center
  >
    <v-flex text-xs-center>
      <v-alert
        :value="true"
        type="success"
      >
        本APP仅限于学习、家庭娱乐使用；
      </v-alert>


      <v-alert
        :value="true"
        type="warning"
      >
        切勿从事违法犯罪活动；
      </v-alert>

      <v-alert
        :value="true"
        type="error"
      >
        一经发现严惩不贷。
      </v-alert>

    </v-flex>
  </v-layout>

</template>

<script>
  export default {
  }
</script>
