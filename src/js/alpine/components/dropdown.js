export default {
  name: "dropdown",
  component() {
    return {
      open: false,
      init() {
        console.log("Dropdown Component Initialized.");
      },
      toggle() {
        this.open = !this.open;
      },
      close() {
        this.open = false;
      },
      open() {
        this.open = true;
      },
    };
  },
};
