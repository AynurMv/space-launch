const a = new Date();
const date2 = 2022-09-05T00:32:00Z

let day_1 = new Date(2019, 08, 20),
    day_2 = new Date(2019, 10, 07);

function diffDates(day_one, day_two) {
    return (day_one - day_two) / (60 * 60 * 24 * 1000);
};

console.log(`${a}`);

export default function App() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const id = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);
  
      return () => {
        clearInterval(id);
      };
    }, []);
  
    return (
      <>
        <div>{count}</div>
      </>
    );
  }