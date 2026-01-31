# waheim-haptics

Haptic feedback for web applications using the Vibration API.

## Features

- 🎯 Simple API with TypeScript support
- ⚛️ React hook included
- 🌐 Cross-browser support (Vibration API + iOS WebKit fallback)
- 🪶 Lightweight (no dependencies)
- 📦 Works with ESM, CJS, and CDN

## Installation

```bash
npm install waheim-haptics
```

Or use a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/waheim-haptics@latest/lib/core.min.js"></script>
```

## Usage

### Browser Global (CDN)

When using the CDN version, `triggerHaptics` is available on `window`:

```html
<script src="https://cdn.jsdelivr.net/npm/waheim-haptics@latest/lib/core.min.js"></script>
<script>
  // Single vibration (50ms default)
  window.triggerHaptics();

  // Custom duration
  window.triggerHaptics(100);

  // Custom pattern
  window.triggerHaptics([100, 50, 100]);
</script>
```

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

### Vanilla JavaScript / TypeScript

```typescript
import { triggerHaptics } from 'waheim-haptics';

// Trigger vibration with default 50ms duration
triggerHaptics();

// Trigger vibration with custom duration
triggerHaptics(100); // 100ms vibration

// Trigger vibration with custom pattern
triggerHaptics([100, 50, 100]); // vibrate 100ms, pause 50ms, vibrate 100ms
```

## API

### Functions

| Function | Description |
|----------|-------------|
| `triggerHaptics(pattern?)` | Direct vibration function. Returns `true` if successful. |
| `useHaptics()` | React hook that returns a trigger function. |

### Parameters

- `pattern` (optional): Vibration pattern
  - `number`: Duration in milliseconds (default: 50)
  - `number[]`: Array of durations for complex patterns (alternating vibrate/pause)

## Browser Support

- **Android / Chrome / Firefox**: Uses the native Vibration API
- **iOS Safari / WebKit**: Falls back to a workaround using invisible switch elements to trigger haptic feedback

## License

MIT
