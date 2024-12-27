import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipe }) {
  return (
    <section aria-live="polite">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
