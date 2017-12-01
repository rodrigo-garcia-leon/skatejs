// @flow

import { component, h } from '../../utils';
import { Layout } from '../../components/layout';

export default component(function mixins() {
  return (
    <Layout.is title="emit()">
      <style>{this.context.style}</style>
      <p>Coming soon!</p>
    </Layout.is>
  );
});
