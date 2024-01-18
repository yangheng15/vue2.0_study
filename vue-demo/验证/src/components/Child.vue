<template>
    <el-input type="textarea" :value="inputVal" @input="inputChange" />
</template>

<script>
export default {
    props: {
        value: {
            type: String,
        },
    },
    computed: {
        inputVal() {
            console.log(this.value)
            return this.value;
        },
    },
    methods: {
        inputChange(val) {
            console.log(val);
            this.$emit('input', val)
        }
    }
};
</script>

<style></style>
