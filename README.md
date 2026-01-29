# waheim-haptics

Haptic feedback for web applications using the Vibration API.

## Installation

```bash
npm install waheim-haptics
```

## Usage

### React Hook

```typescript
import { useHaptics } from 'waheim-haptics';

function MyComponent() {
  const triggerHaptics = useHaptics();

  const handlePress = () => {
    triggerHaptics(50); // 50ms vibration
    triggerHaptics([100, 50, 100]); // Custom pattern: vibrate 100ms, pause 50ms, vibrate 100ms
  };

  return <button onClick={handlePress}>Press me</button>;
}
```

### Vanilla JavaScript

```javascript
import { triggerHaptics } from 'waheim-haptics';

// Trigger vibration
triggerHaptics(50); // 50ms vibration
triggerHaptics([100, 50, 100]); // Custom pattern
```

## API

### Functions

- `triggerHaptics(pattern?: number | number[]): boolean` - Direct vibration function
- `useHaptics(): (pattern?: number | number[]) => void` - React hook

### Parameters

- `pattern`: Optional vibration pattern
  - `number`: Duration in milliseconds (default: 50)
  - `number[]`: Array of durations for complex patterns

## Browser Support

Uses the Vibration API where supported. On iOS Safari and other WebKit browsers, falls back to a workaround that triggers haptic feedback by programmatically toggling an invisible switch element.

## License

MIT
