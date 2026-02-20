# agent-security-scanner-monitor

> Service: monitor for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-monitor
```

## Usage

```javascript
import { AgentSecurityScannerMonitor } from '@agent-security-scanner/agent-security-scanner-monitor';

const service = new AgentSecurityScannerMonitor();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
