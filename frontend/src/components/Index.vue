<script>

    import CurrentMileage from "./CurrentMileage";
    import Login from "./Login";

    export default {
        name: "Index",

        beforeMount () {
            if (!this.$store.state.isLogged) {
                this.$router.push('/login');
            }
        },

        components: {
            CurrentMileage,
            Login
        }
    }
</script>


<template>

    <div>
        <CurrentMileage></CurrentMileage>
    </div>

</template>

