const themeColors = [
  { name: "theme-shade-1", value: "hsla(0, 0%, 100%, 1)" },
  { name: "theme-shade-2", value: "hsla(0, 0%, 97%, 1)" },
  { name: "theme-shade-3", value: "hsla(0, 0%, 93%, 1)" },
  { name: "theme-shade-4", value: "hsla(0, 0%, 89%, 1)" },
  { name: "text-default", value: "hsla(0, 0%, 25%, 1)" },
  { name: "text-subtle", value: "hsla(0, 0%, 25%, 0.75)" },
  { name: "text-disabled", value: "hsla(0, 0%, 25%, 0.3)" },
  { name: "text-border", value: "hsla(0, 0%, 25%, 0.2)" },
  { name: "opacity-overlay-heavy", value: "hsla(0, 0%, 25%, 0.75)" },
  { name: "opacity-overlay-light", value: "hsla(0, 0%, 25%, 0.3)" },
  { name: "opacity-subtle", value: "hsla(0, 0%, 25%, 0.15)" },
  { name: "opacity-active", value: "hsla(0, 0%, 25%, 0.08)" },
  { name: "opacity-disabled", value: "hsla(0, 0%, 25%, 0.05)" },
  { name: "opacity-hover", value: "hsla(0, 0%, 25%, 0.04)" }
];

const attentionColors = [
  { name: "attention-accent-active", value: "hsla(225, 89%, 53%, 1)" },
  { name: "attention-accent-default", value: "hsla(225, 100%, 58%, 1)" },
  { name: "attention-accent-hover", value: "hsla(225, 100%, 61%, 1)" },
  { name: "attention-accent-tone", value: "hsla(222, 100%, 63%, 0.13)" },
  { name: "attention-error-active", value: "hsla(0, 91%, 47%, 1)" },
  { name: "attention-error-default", value: "hsla(0, 89%, 52%, 1)" },
  { name: "attention-error-hover", value: "hsla(0, 100%, 57%, 1)" },
  { name: "attention-success-active", value: "hsla(145, 100%, 29%, 1)" },
  { name: "attention-success-default", value: "hsla(145, 100%, 32%, 1)" },
  { name: "attention-success-hover", value: "hsla(145, 90%, 36%, 1)" },
  { name: "attention-warning-active", value: "hsla(25, 96%, 53%, 1)" },
  { name: "attention-warning-default", value: "hsla(25, 100%, 57%, 1)" },
  { name: "attention-warning-hover", value: "hsla(25, 100%, 61%, 1)" },
  { name: "attention-info-active", value: "hsla(225, 89%, 53%, 1)" },
  { name: "attention-info-default", value: "hsla(225, 100%, 58%, 1)" },
  { name: "attention-info-hover", value: "hsla(225, 100%, 61%, 1)" },
  { name: "attention-highlight-hover", value: "hsla(69, 100%, 50%, 1)" }
];

const productColors1 = [
  {
    name: "Product colors/Electric Dreams/Active",
    value: "hsla(214, 61%, 46%, 1)"
  },
  {
    name: "Product colors/Electric Dreams/Default",
    value: "hsla(214, 59%, 52%, 1)"
  },
  {
    name: "Product colors/Electric Dreams/Hover",
    value: "hsla(214, 65%, 57%, 1)"
  },
  {
    name: "Product colors/Event Horizon/Active",
    value: "hsla(236, 29%, 45%, 1)"
  },
  {
    name: "Product colors/Event Horizon/Default",
    value: "hsla(237, 26%, 50%, 1)"
  },
  {
    name: "Product colors/Event Horizon/Hover",
    value: "hsla(237, 27%, 56%, 1)"
  },
  {
    name: "Product colors/Extraterrestrial/Active",
    value: "hsla(116, 38%, 48%, 1)"
  },
  {
    name: "Product colors/Extraterrestrial/Default",
    value: "hsla(116, 37%, 53%, 1)"
  },
  {
    name: "Product colors/Extraterrestrial/Hover",
    value: "hsla(117, 42%, 59%, 1)"
  },
  {
    name: "Product colors/Fantastic Voyage/Active",
    value: "hsla(337, 63%, 38%, 1)"
  },
  {
    name: "Product colors/Fantastic Voyage/Default",
    value: "hsla(337, 57%, 42%, 1)"
  },
  {
    name: "Product colors/Fantastic Voyage/Hover",
    value: "hsla(337, 50%, 47%, 1)"
  },
  {
    name: "Product colors/Forbidden Planet/Active",
    value: "hsla(10, 66%, 74%, 1)"
  },
  {
    name: "Product colors/Forbidden Planet/Default",
    value: "hsla(10, 80%, 80%, 1)"
  },
  {
    name: "Product colors/Forbidden Planet/Hover",
    value: "hsla(10, 100%, 86%, 1)"
  },
  {
    name: "Product colors/Future Shock/Active",
    value: "hsla(59, 87%, 48%, 1)"
  },
  {
    name: "Product colors/Future Shock/Default",
    value: "hsla(59, 88%, 53%, 1)"
  },
  {
    name: "Product colors/Future Shock/Hover",
    value: "hsla(59, 97%, 58%, 1)"
  },
  {
    name: "Product colors/Giant Leap/Active",
    value: "hsla(190, 66%, 56%, 1)"
  },
  {
    name: "Product colors/Giant Leap/Default",
    value: "hsla(190, 74%, 62%, 1)"
  },
  {
    name: "Product colors/Giant Leap/Hover",
    value: "hsla(190, 84%, 67%, 1)"
  },
  {
    name: "Product colors/Ground Control/Active",
    value: "hsla(24, 53%, 37%, 1)"
  },
  {
    name: "Product colors/Ground Control/Default",
    value: "hsla(24, 47%, 42%, 1)"
  },
  {
    name: "Product colors/Ground Control/Hover",
    value: "hsla(24, 42%, 47%, 1)"
  },
  {
    name: "Product colors/Luna Dust/Active",
    value: "hsla(200, 16%, 48%, 1)"
  },
  {
    name: "Product colors/Luna Dust/Default",
    value: "hsla(200, 15%, 54%, 1)"
  },
  {
    name: "Product colors/Luna Dust/Active",
    value: "hsla(200, 15%, 60%, 1)"
  },
  {
    name: "Product colors/Moon Lagoon/Active",
    value: "hsla(186, 75%, 39%, 1)"
  },
  {
    name: "Product colors/Moon Lagoon/Default",
    value: "hsla(186, 68%, 44%, 1)"
  },
  {
    name: "Product colors/Moon Lagoon/Hover",
    value: "hsla(186, 61%, 49%, 1)"
  },
  {
    name: "Product colors/New Horizon/Active",
    value: "hsla(44, 100%, 47%, 1)"
  },
  {
    name: "Product colors/New Horizon/Default",
    value: "hsla(44, 100%, 52%, 1)"
  }
];

const productColors2 = [
  { name: "product-blast-off-active", value: "hsla(29, 85%, 54%, 1)" },
  { name: "product-blast-off-default", value: "hsla(29, 94%, 59%, 1)" },
  { name: "product-blast-off-hover", value: "hsla(29, 100%, 63%, 1)" },
  { name: "product-crash-course-active", value: "hsla(8, 87%, 61%, 1)" },
  { name: "product-crash-course-default", value: "hsla(8, 100%, 67%, 1)" },
  { name: "product-crash-course-hover", value: "hsla(8, 100%, 71%, 1)" },
  { name: "product-critical-mass-active", value: "hsla(346, 63%, 57%, 1)" },
  { name: "product-critical-mass-default", value: "hsla(346, 71%, 62%, 1)" },
  { name: "product-critical-mass-hover", value: "hsla(346, 81%, 68%, 1)" },
  { name: "product-deep-thought-active", value: "hsla(0, 0%, 80%, 1)" },
  { name: "product-deep-thought-default", value: "hsla(257, 5%, 74%, 1)" },
  { name: "product-deep-thought-hover", value: "hsla(257, 10%, 67%, 1)" },

  {
    name: "Product colors/Outer Limits/Active",
    value: "hsla(197, 76%, 67%, 1)"
  },
  {
    name: "Product colors/Outer Limits/Default",
    value: "hsla(197, 90%, 74%, 1)"
  },
  {
    name: "Product colors/Outer Limits/Hover",
    value: "hsla(197, 95%, 78%, 1)"
  },
  {
    name: "Product colors/Paradise Lost/Active",
    value: "hsla(277, 26%, 48%, 1)"
  },
  {
    name: "Product colors/Paradise Lost/Default",
    value: "hsla(277, 25%, 54%, 1)"
  },
  {
    name: "Product colors/Paradise Lost/Hover",
    value: "hsla(276, 27%, 59%, 1)"
  },
  {
    name: "Product colors/Primeval Soup/Active",
    value: "hsla(60, 85%, 39%, 1)"
  },
  {
    name: "Product colors/Primeval Soup/Default",
    value: "hsla(60, 78%, 44%, 1)"
  },
  {
    name: "Product colors/Primeval Soup/Hover",
    value: "hsla(60, 70%, 49%, 1)"
  },
  {
    name: "Product colors/Rocky Planet/Active",
    value: "hsla(37, 18%, 48%, 1)"
  },
  {
    name: "Product colors/Rocky Planet/Default",
    value: "hsla(37, 17%, 54%, 1)"
  },
  {
    name: "Product colors/Rocky Planet/Hover",
    value: "hsla(37, 18%, 60%, 1)"
  },
  { name: "Product colors/Serenity/Active", value: "hsla(226, 42%, 64%, 1)" },
  {
    name: "Product colors/Serenity/Default",
    value: "hsla(226, 46%, 70%, 1)"
  },
  { name: "Product colors/Serenity/Hover", value: "hsla(226, 53%, 77%, 1)" },
  {
    name: "Product colors/Solar Rust/Active",
    value: "hsla(35, 85%, 40%, 1)"
  },
  {
    name: "Product colors/Solar Rust/Default",
    value: "hsla(35, 77%, 45%, 1)"
  },
  { name: "Product colors/Solar Rust/Hover", value: "hsla(35, 70%, 50%, 1)" },
  {
    name: "Product colors/Space Invader/Active",
    value: "hsla(160, 57%, 33%, 1)"
  },
  {
    name: "Product colors/Space Invader/Default",
    value: "hsla(160, 51%, 38%, 1)"
  },
  {
    name: "Product colors/Space Invader/Hover",
    value: "hsla(160, 46%, 42%, 1)"
  },
  {
    name: "Product colors/Space Oddity/Active",
    value: "hsla(44, 40%, 49%, 1)"
  },
  {
    name: "Product colors/Space Oddity/Default",
    value: "hsla(44, 43%, 55%, 1)"
  },
  {
    name: "Product colors/Space Oddity/Hover",
    value: "hsla(44, 47%, 60%, 1)"
  },
  { name: "Product colors/Sun Maker/Active", value: "hsla(50, 96%, 48%, 1)" },
  {
    name: "Product colors/Sun Maker/Default",
    value: "hsla(50, 97%, 53%, 1)"
  },
  { name: "Product colors/Sun Maker/Hover", value: "hsla(50, 100%, 59%, 1)" },
  {
    name: "Product colors/Terra Form/Active",
    value: "hsla(85, 61%, 45%, 1)"
  },
  {
    name: "Product colors/Terra Form/Default",
    value: "hsla(85, 55%, 50%, 1)"
  },
  { name: "Product colors/Terra Form/Hover", value: "hsla(85, 60%, 55%, 1)" },
  {
    name: "Product colors/Tiny Clanger/Active",
    value: "hsla(340, 68%, 71%, 1)"
  },
  {
    name: "Product colors/Tiny Clanger/Default",
    value: "hsla(340, 82%, 78%, 1)"
  },
  {
    name: "Product colors/Tiny Clanger/Hover",
    value: "hsla(339, 100%, 84%, 1)"
  }
];

export { themeColors, attentionColors, productColors1, productColors2 };
