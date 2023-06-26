export default {
  validate: {
    required: (value) => (value ? undefined : 'Required'),
    onlyNumber: (value) => (/[0-9]/.test(value) ? undefined : 'only number'),
  },
  onKeyPress: {
    onlyNumber: (event) => {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    },
  },
};
