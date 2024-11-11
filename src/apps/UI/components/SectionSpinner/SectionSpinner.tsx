/* Components */
import { Icon } from 'semantic-ui-react';

export const SectionSpinner = ({ text }: { text?: string }) => {
  return (
    <section className="text-center my-5">
      <Icon loading name="spinner" /> {text}
    </section>
  );
};
