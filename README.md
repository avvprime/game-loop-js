# game-loop-js
Simple easy to use game loop. No dependency.

```
// Default is 60
loop.setSimulationDepth(120);

// Register an update method
loop.setUpdateCallback(myUpdateFunc);

// Register a draw method
loop.setDrawCallback(myDrawFunc);

// Start loop
loop.init();

// When you want to quit
loop.quit();
```
