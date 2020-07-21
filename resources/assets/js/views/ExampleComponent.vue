<template lang="pug" src="../templates/example-component.pug"></template>

<script>
export default {
    data() {
        return {
            language: this.$i18n.locale,
        };
    },
    mounted() {
        console.log('Component mounted.');
    },
    methods: {
        changeLanguage() {
            this.$i18n.locale = this.language;
            this.$http.get(`/lang/${this.language}`);
        },
    },
};
</script>
