import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import CopyButton from "./CopyButton.ts.vue";

class CopyButtonWidgetFactory {
    createInstance(): any {
        const vm = new Vue(CopyButton);
        const widget = VueDijit(vm);
        return widget;
    }
}

export default CopyButtonWidgetFactory;
