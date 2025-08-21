import { useState } from 'react';
import './App.css';

function App() {
  const [leftWidth, setLeftWidth] = useState(200);
  const [centerWidth, setCenterWidth] = useState(400);

  const startResizing = (panel) => (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startLeftWidth = leftWidth;
    const startCenterWidth = centerWidth;

    const onMouseMove = (e) => {
      const dx = e.clientX - startX;
      if (panel === 'left') {
        setLeftWidth(Math.max(100, startLeftWidth + dx));
      }
      if (panel === 'center') {
        setCenterWidth(Math.max(100, startCenterWidth + dx));
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div
      className="App"
      style={{ gridTemplateColumns: `${leftWidth}px 5px ${centerWidth}px 5px 1fr` }}
    >
      <div className="panel left">Left Panel</div>
      <div className="resizer" onMouseDown={startResizing('left')}></div>
      <div className="panel center">
        <canvas id="main-canvas" data-testid="drawing-canvas"></canvas>
      </div>
      <div className="resizer" onMouseDown={startResizing('center')}></div>
      <div className="panel right">Right Panel</div>
    </div>
  );
}

export default App;
