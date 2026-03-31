const featureList = [
  "快速啟動的 React + Vite 專案",
  "已設定好開發、建置與預覽指令",
  "可以直接擴充元件與樣式",
];

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">React Starter</p>
        <h1>你的 React 專案已經準備好了</h1>
        <p className="lead">
          目前這台機器還沒有安裝 Node.js，所以我先把專案骨架建立完成。等
          Node.js 安裝好後，就能直接安裝套件並啟動開發伺服器。
        </p>

        <div className="action-row">
          <code>npm install</code>
          <code>npm run dev</code>
        </div>

        <ul className="feature-list">
          {featureList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
