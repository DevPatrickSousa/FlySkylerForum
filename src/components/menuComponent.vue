<template>
    <v-app-bar title="Logo/Home" class="text-white bg-grey-darken-4" :elevation="0" flat >
        
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            icon
          >
          <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="handleClick(index)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-app-bar>
  
      <v-footer class="d-flex justify-center bg-grey-darken-4" app absolute >
        <span class="text-white">FLYSKYLER FORUM © {{ new Date().getFullYear() }}. </span>
      </v-footer>
  </template>
  
  <script>
    export default {
      data: () => ({
        items: [
      { 
        title: 'Back to home',
        click() {
          this.$router.push('/');
        }},
        { title: 'Update',
        click() {
          this.$router.push('/update');
        }
       },
       
       { title: 'Delete',
        click() {
          this.$router.push('/delete');
        }
       },
      ],
      }),
      methods: {
    handleClick(index) {
      this.items[index].click.call(this)
    }
  }
    }
  </script>
  