import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  window.addEventListener('click',handleClick);
  function handleClick(e) {
    setProduto(e.target.innerHTML);
  }
  const [produto, setProduto] = useLocalStorage('produto','');
  return <button >teste</button>
}

export default App
