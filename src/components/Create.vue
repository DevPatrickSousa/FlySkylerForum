<template>
    <v-container class="fill-height ">
      <v-responsive class="d-flex align-center text-center fill-height ">
        
        
              <v-form ref="form" v-model="valid" fast-fail @submit.prevent="validate">
      <v-text-field
        v-model="formData.name"
        label="Name"
        :rules="nameRules"
        :counter="10"
      ></v-text-field>

      <v-text-field
        v-model="formData.email"
        label="Email"
        :rules="emailRules"
        
      ></v-text-field>

      <v-text-field
        v-model="formData.title"
        label="Title"
        :rules="titleRules"
        :counter="25"
      ></v-text-field>

      <v-text-field
        v-model="formData.text"
        label="Text"
        :rules="textRules"
        :counter="500"
       
      ></v-text-field>
      
  <v-file-input  accept="image/*" ref="storageRef" label="File input" clearable  @change="clickImage($event)">

  </v-file-input>

      <v-btn type="submit" id="submitButton" block class="" @click="snackbar = true" color="blue" >
        Post
        <v-snackbar v-model="snackbar" color="success">
      <span class="d-flex justify-center">Post successfully sent!</span> 
        </v-snackbar>
      </v-btn>
    </v-form>
            
  </v-responsive> 
  </v-container>
    
</template>



<script>/*
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'*/
import postsCollectionRef from '../firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {addDoc } from 'firebase/firestore';

  export default {
    

    data() {
      return{
    formData:{
    name: null,
    email: null,
    title: null,
    text: null,
    createdAt: new Date(),
  },
    snackbar: false,
    valid: true,
    nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
    emailRules: [
        value => {
          if (value) return true

          return 'E-mail is required.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
      titleRules: [
        value => {
          if (value) return true
          return 'Title is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Title must be less than 25 characters.'
        },
      ],
      textRules: [
        value => {
          if (value) return true
          return 'Text is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Text must be less than 500 characters.'
        },
      ],
   
    }},
    
    methods:{
      async  createPost(){
        console.log('Creating Post.');
        const addedDoc = await addDoc(postsCollectionRef, this.formData);
        console.log(addedDoc);
        
        
        },
      clickImage(e){
        this.file = e.target.files[0];
        console.log(this.file);
      },
      
      uploadImage() {
        const storage = getStorage();
        const storageRef = ref(storage, 'postImages/' + this.file.name + ' ' + '-' + ' ' + this.formData.title);
        uploadBytes(storageRef, this.file).then((snapshot) => {
        console.log('Uploaded!');
        });
      },
      required(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }},
     async  validate (){
        const { valid } = await this.$refs.form.validate ()

                if(valid)
                this.createPost();
                this.uploadImage();
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
                
                
      }},
    }
</script>



<style>

</style>