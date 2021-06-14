<script>
import appConfig from "@/app.config";

import { notificationMethods } from "@/state/helpers";

export default {
  name: "app",
  metaInfo: {
    meta: [
      {
        property: 'og:title',
        content: 'Guru Kreator by Paideia',
        vmid: 'og:title'
      },
      {
        property: 'og:locale',
        content: 'id_ID',
        vmid: 'og:locale'
      },
      {
        property: 'og:description',
        content: 'Aplikasi Guru Kreator adalah aplikasi edukasi pertama yang dapat menjangkau hampir seluruh daerah terluar di Indonesia',
        vmid: 'og:description'
      },
      {
        property: 'og:url',
        content: 'https://gurukreator.id',
        vmid: 'og:url'
      },
      {
        property: 'og:site_name',
        content: 'Guru Kreator',
        vmid: 'og:site_name'
      },
    ],
  },
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    }
  },
  mounted() {},
  watch: {
    /**
     * Clear the alert message on route change
     */
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      // clear alert on location change
      this.clearNotification();
    }
  },
  methods: {
    clearNotification: notificationMethods.clear
  }
};
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>
