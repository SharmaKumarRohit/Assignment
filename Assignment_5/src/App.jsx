import Products from "./components/Products";

function App() {
  return (
    <div className="min-h-screen bg-zinc-200">
      <div className="h-full max-w-7xl mx-auto p-4 sm:p-8">
        <h1 className="text-3xl font-semibold text-center mb-4">Products</h1>
        <Products />
      </div>
    </div>
  );
}

export default App;
