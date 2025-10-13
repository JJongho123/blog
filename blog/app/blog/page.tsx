import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold tracking-tight">블로그</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
