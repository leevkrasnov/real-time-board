import Layout from './components/layout/Layout';

export default function App() {
  return (
    <Layout>
      <h1 className="text-pearl dark:text-indigo text-3xl">pearl/indigo</h1>
      <h1 className="dark:text-lavander text-amethyst text-3xl">
        lavander/amethyst
      </h1>
      <h1 className="dark:text-lilac text-charcoal text-3xl">lilac/charcoal</h1>
      <h1 className="dark:text-rosewood text-mahogany text-3xl">
        rosewood/mahogany
      </h1>
      <h1 className="dark:text-sand text-crimson text-3xl">sand/crimson</h1>
    </Layout>
  );
}
