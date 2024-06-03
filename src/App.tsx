import { useState } from 'react';
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

export const MyComponent = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (
    <Stage options={{ hello: true }}>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={200} y={230}>
        <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return <MyComponent />;
}

export default App;
