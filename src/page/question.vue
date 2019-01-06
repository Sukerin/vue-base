<template>

  <v-layout
    justify-center
    align-center
  >
    <v-flex text-xs-center>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

          <!--<v-divider></v-divider>-->

          <!--<v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>-->

          <!--<v-divider></v-divider>-->

          <!--<v-stepper-step step="3">Name of step 3</v-stepper-step>-->
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-5"
              color=""

            >


              <v-container grid-list-sm fluid>
                <h3>看图猜人</h3>
                <v-layout row wrap>
                  <v-flex
                    v-for="n in 9"
                    :key="n"
                    xs4
                    d-flex
                  >
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <v-layout
                          slot="placeholder"
                          fill-height
                          align-center
                          justify-center
                          ma-0
                        >
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                      </v-img>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="name1"
                      :rules="nameRules"
                      :counter="10"
                      label="Row1姓名"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="name2"
                      :rules="nameRules"
                      :counter="10"
                      label="Row2姓名"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="name3"
                      :rules="nameRules"
                      :counter="10"
                      label="Row3姓名"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-form>
              </v-container>


            </v-card>

            <v-btn color="primary" @click="answerQuestion1">
              Continue
            </v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>



        </v-stepper-items>
      </v-stepper>

    </v-flex>
  </v-layout>

</template>

<script>
  import fetch from '../util/fetch'
  export default {
    data: () => ({
      step1Result: false,
      e1: 0,
      valid: false,
      name1: '',
      name2: '',
      name3: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
      answerQuestion1: function () {
        if (this.$refs.form.validate()) {
          let answer = {
            answer: this.name1 + ',' + this.name2 + ',' + this.name3,
            questionNo: 0
          }

          fetch.byPost('/ret/answer', answer).then((res) => {
            this.$router.push({path: '/result', query: {isSuc: true, message: '答对了，六比！'}})
// eslint-disable-next-line handle-callback-err
          }).catch(err => {
            this.$router.push({path: '/result', query: {isSuc: false, message: '答错了，傻屌！'}})
          })
        }
      }
//      ,
//      answerQuestion: function (params) {
//        fetch.byPost('/ret/answer', params).then((res) => {
//          this.loading = false
//        }).catch(err => {
//          this.loading = false
//          console.log(err)
//        })
//      }
    }
  }
</script>
