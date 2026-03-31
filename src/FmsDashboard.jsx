const controlButtons = [
  { label: "手動啟動", icon: "▶", active: false },
  { label: "手動暫停", icon: "▌▌", active: false, muted: true },
  { label: "手臂停止", icon: "■", active: true },
  { label: "手臂重置", icon: "⟳", active: false },
  { label: "派工啟動", icon: "⚙", active: false },
];

const hopperGroups = [
  {
    title: "W1",
    accent: "orange",
    items: [
      { name: "上門", action: "開啟" },
      { name: "掃描狀態", action: "●" },
      { name: "門狀態", action: "●" },
    ],
  },
  {
    title: "E1",
    accent: "blue",
    items: [
      { name: "下門", action: "開啟" },
      { name: "掃描狀態", action: "●" },
      { name: "門狀態", action: "●" },
    ],
  },
  {
    title: "E2",
    accent: "blue",
    items: [
      { name: "上門", action: "開啟" },
      { name: "掃描狀態", action: "●" },
      { name: "門狀態", action: "●" },
    ],
  },
  {
    title: "W2",
    accent: "orange",
    items: [
      { name: "下門", action: "開啟" },
      { name: "掃描狀態", action: "●" },
      { name: "門狀態", action: "●" },
    ],
  },
];

const footerItems = [
  "產線總覽",
  "整場總覽",
  "設備總覽",
  "工單管理",
  "RFID換線",
  "操作紀錄",
  "倉儲庫存",
  "系統設定",
];

function ControlButton({ label, icon, active, muted }) {
  return (
    <button
      type="button"
      className={[
        "control-button",
        active ? "is-active" : "",
        muted ? "is-muted" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="control-icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function HopperCard({ title, accent, items }) {
  return (
    <article className="hopper-card">
      <header className={`hopper-title ${accent}`}>{title}</header>
      <div className="hopper-body">
        {items.map((item) => (
          <div className="hopper-row" key={`${title}-${item.name}`}>
            <span>{item.name}</span>
            <strong>{item.action}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function FmsDashboard() {
  return (
    <div className="fms-app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-oscar">OSCAR</span>
          <span className="brand-fms">FMS</span>
          <span className="brand-subtitle">彈性製造系統</span>
        </div>

        <div className="topbar-center">
          <span className="alert-dot" />
          <div className="system-alert">系統有警報</div>
        </div>

        <div className="topbar-actions">
          <span className="topbar-action">◔</span>
          <span className="topbar-action">☰</span>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <div className="sidebar-meta">
            <span>2026/01/27 09:50:22</span>
            <span className="sidebar-user">⇲</span>
          </div>

          <section className="panel">
            <header className="panel-header">機械臂目前位置</header>
            <div className="panel-content robot-panel">
              <div className="robot-status">
                <div>
                  <strong>Robot1</strong>
                </div>
                <div className="location-row">
                  <span className="pin">●</span>
                  <span>EW1</span>
                </div>
              </div>

              <div className="robot-illustration" aria-hidden="true">
                <div className="robot-arm robot-base" />
                <div className="robot-arm robot-lower" />
                <div className="robot-arm robot-upper" />
                <div className="robot-arm robot-head" />
              </div>

              <div className="robot-flow">
                <label>
                  <span>目前動作</span>
                  <div className="select-like">-</div>
                </label>
                <label>
                  <span>下一步</span>
                  <div className="select-like">-</div>
                </label>
              </div>

              <div className="robot-pager">
                <button type="button">‹</button>
                <button type="button">›</button>
              </div>
            </div>
          </section>

          <section className="panel">
            <header className="panel-header">控制單元</header>
            <div className="panel-content control-grid">
              {controlButtons.map((button) => (
                <ControlButton key={button.label} {...button} />
              ))}
            </div>
          </section>

          <section className="panel feed-panel">
            <header className="panel-header feed-header">
              <span>料倉控制</span>
              <div className="feed-tools">
                <button type="button" className="feed-toggle">
                  <span className="feed-track" />
                </button>
                <button type="button" className="feed-edit">
                  ✎
                </button>
              </div>
            </header>

            <div className="panel-content hopper-grid">
              {hopperGroups.map((group) => (
                <HopperCard key={group.title} {...group} />
              ))}
            </div>
          </section>
        </aside>

        <main className="main-stage">
          <div className="status-strip">
            <span className="status-indicator" />
            <span>系統狀態監控中</span>
          </div>

          <section className="canvas-area">
            <div className="canvas-empty">
              <div>
                <h1>FMS 控制主畫面</h1>
                <p>這裡可接機台地圖、流程視覺化、告警圖層或即時監控資訊。</p>
              </div>
            </div>
          </section>

          <nav className="footer-dock">
            {footerItems.map((item) => (
              <button type="button" className="dock-item" key={item}>
                <span className="dock-icon">▣</span>
                <span>{item}</span>
              </button>
            ))}
          </nav>
        </main>
      </div>
    </div>
  );
}
