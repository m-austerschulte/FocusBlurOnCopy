<template>
    <v-btn @click="copy('Hi')">Copy to clipboard</v-btn>
</template>
<script lang="ts">
import Vue from "apprt-vue/Vue";
import {copyText} from "apprt-vue/directives/clipboard";

export default Vue.extend({
    methods: {
        copy(text: string): void {
            copyText(text, this.$el);
        }
    }
});
</script>
