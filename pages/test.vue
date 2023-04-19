<template>
  <div>
    <Head>
      <Title>TEST ROASTING</Title>
    </Head>

    <div>
      <h1>TEST TRACKING URL PAGE</h1>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ query, store }) {
    // fetch data from API
    try {
      const carDetails = await fetch(
        `https://jsonplaceholder.typicode.com/users/1`
      ).then((res) => res.json());
      console.log("Details: ", carDetails);
      return {
        carDetails,
      };
    } catch (error) {
      // Redirect to error page or 404 depending on server response
      console.log("Error: ", error);
    }
  },
  head() {
    return {
      //   title: "FAKE title",
      title: this.carDetails.name,
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: this.carDetails.name,
        },
        // other meta
      ],
    };
  },
};

// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {

//     },
// })
</script>
