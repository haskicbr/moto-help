<script>

    import CurrentMileage from "./CurrentMileage";
    import Login from "./Login";

    export default {
        name: "Index",
        components: {
            CurrentMileage,
            Login
        }
    }
</script>


<template>




    <div>

        <template v-if="$store.state.isLogged">
            <CurrentMileage></CurrentMileage>
        </template>
        <template v-else>
            <Login/>
        </template>


    </div>

</template>

