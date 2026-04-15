import Container from "../components/common/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Everything You Need
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Discover amazing products at unbeatable prices. Fast shipping,
              easy returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Categories
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-8 hoverable">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400">
                On orders over $50
              </p>
            </Card>

            <Card className="text-center p-8 hoverable">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Genuine</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quality guaranteed
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
