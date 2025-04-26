import { Checkbox } from '@/components/ui/checkbox';

function App() {
  return (
    <div className="my-0 mx-auto w-full lg:w-[900px]">
      <div className="p-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center gap-2 justify-between">
            <span>팔굽혀펴기 20회 {index + 1}SET</span>
            <Checkbox />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
