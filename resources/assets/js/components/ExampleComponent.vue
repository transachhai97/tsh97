<template lang="pug">
    .container
        .row.justify-content-center
            .col-md-8
                .card
                    .card-header Example Component
                    .card-body
                        | I'm an example component.
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.');
    },
};
</script>
