<template>
    

        
              <v-form fast-fail @submit.prevent="sendForm">
      <v-text-field
        v-model="name"
        label="Name"
        
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="Email"
        
      ></v-text-field>

      <v-text-field
        v-model="title"
        label="Title"
        
      ></v-text-field>

      <v-text-field
        v-model="text"
        label="Text"
        
      ></v-text-field>
      
  <v-file-input  accept="image/*" ref="storageRef" label="File input" clearable  @change="clickImage($event)">

  </v-file-input>

      <v-btn type="submit" id="submitButton" block class="" @click="snackbar = true" color="blue">
        Post
        <v-snackbar v-model="snackbar" color="success">
      <span class="d-flex justify-center">Post successfully sent!</span> 
        </v-snackbar>
      </v-btn>
    </v-form>
            
            
    
    
</template>

<script>/*
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'*/
import postsCollectionRef from '../firebase';

import { getStorage, ref, uploadBytes } from "firebase/storage";
import {addDoc} from 'firebase/firestore';


  export default {
    
    data() {
      return{
    name: null,
    email: null,
    title: null,
    text: null,
    snackbar: false,
   /* v$: useVuelidate(),*/
    }},
    
    methods:{
      async  createPost(){
        console.log('Creating Post.');
        const addedDoc = await addDoc(postsCollectionRef, this.$data);
        console.log(addedDoc);
        
        },
      clickImage(e){
        this.file = e.target.files[0];
        console.log(this.file);
      },
      uploadImage() {
        const storage = getStorage();
        const storageRef = ref(storage, 'postImages/' + this.file.name + ' ' + '-' + ' ' + this.title);
        uploadBytes(storageRef, this.file).then((snapshot) => {
        console.log('Uploaded!');
        });
},
      sendForm(){
        
            /*this.v$.$validate()
            if(!this.v$.$error){*/

                this.createPost();
                this.uploadImage();
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
                
                
            /*}else{
                console.log('erro')
            }
            */
       
            
        
        
      }},
      /*validations () {
    return {
      name: { required },
      email: { required },
      title: { required },
      text: { required },

    }
  }*/
    }
</script>


<style>

</style>