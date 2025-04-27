import { CheckItem } from '@/components/CheckItem';

function App() {
  return (
    <div className="my-0 mx-auto w-full lg:w-[900px]">
      <div className="p-2 flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CheckItem key={index} order={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default App;
