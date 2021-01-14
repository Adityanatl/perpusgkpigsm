<script>
import { layoutComputed } from "@/state/helpers";
import Vertical from "./vertical";
import Horizontal from "./horizontal";

export default {
  components: { Vertical },
  data() {
    return {};
  },
  computed: {
    ...layoutComputed
  },
  methods: {}
};
</script>

<template>
  <div style="background-color:transparent">
    <vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </vertical>

    <!-- <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal> -->
  </div>
</template>