import { h } from "vue";
import { splitBuzzwords } from "@/lib/buzzwords";

/**
 * Renders text, wrapping buzzwords in <mark> when `highlight` is on.
 * A render function keeps the text exactly as is: no whitespace is added
 * around the marks.
 */
export default function BuzzText({ text, highlight }) {
  if (!highlight) return text;
  return splitBuzzwords(text).map((segment) =>
    segment.buzz ? h("mark", segment.text) : segment.text,
  );
}

BuzzText.props = {
  text: { type: String, required: true },
  highlight: { type: Boolean, default: false },
};
